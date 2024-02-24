import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOTP,
  dotsToHyphens,
  hyphensToDots,
  isEmail,
  isMobile,
} from "../helpers/helpers.js";
import { sendSMS } from "../utils/sendSMS.js";
import { ActivationEmail } from "../mails/ActivationEmail.js";
import { cloudUpload } from "../utils/cloudinary.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { auth, password } = req.body;

  // validation
  if (!auth || !password)
    return res.status(404).json({ message: "All fields are required" });

  // find login user
  let loginUserdata = null;

  if (isMobile(auth)) {
    // find login user by phone
    loginUserdata = await User.findOne({ phone: auth });

    // user not found
    if (!loginUserdata)
      return res.status(404).json({ message: "User not found" });
  } else if (isEmail(auth)) {
    // find login user by phone
    loginUserdata = await User.findOne({ email: auth });

    // user not found
    if (!loginUserdata)
      return res.status(404).json({ message: "User not found" });
  } else {
    return res
      .status(404)
      .json({ message: "User must have a mobile or email account" });
  }

  // password check
  const passwordCheck = await bcrypt.compare(password, loginUserdata.password);

  // password check
  if (!passwordCheck)
    return res.status(404).json({ message: "Wrong password" });

  // create access token
  const token = jwt.sign({ auth: auth }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
  });

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    token,
    user: loginUserdata,
    message: "User Login Successful",
  });
});

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successful" });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const register = asyncHandler(async (req, res) => {
  const { name, auth, password } = req.body;

  if (!name || !auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // auth value manage
  let authEmail = null;
  let authPhone = null;

  // create a access token for account activation
  const activationCode = createOTP();

  if (isMobile(auth)) {
    authPhone = auth;

    // check mobile exist or not
    const isMobileExists = await User.findOne({ phone: auth });
    if (isMobileExists) {
      return res.status(400).json({
        message: "Phone Number Already Exist",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // send otp to user mobile
    await sendSMS(
      auth,
      `Hello ${name}! Your account activation code is: ${activationCode}`
    );
  } else if (isEmail(auth)) {
    authEmail = auth;
    // check mobile exist or not
    const isEmailExists = await User.findOne({ email: auth });
    if (isEmailExists) {
      return res.status(400).json({
        message: "Email Already Exist",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth, otp: activationCode },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // activation link
    const activationLink = `http://localhost:3000/activation/${dotsToHyphens(
      verifyToken
    )}`;

    // send activation link to email
    await ActivationEmail(auth, {
      name,
      code: activationCode,
      link: activationLink,
    });
  } else {
    return res.status(400).json({
      message: "You must use Email address or Phone number",
    });
  }

  // // check user email
  // const userEmailCheck = await User.findOne({ email });

  // if (userEmailCheck) {
  //   return res.status(400).json({ message: "Email already exists" });
  // }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email: authEmail,
    phone: authPhone,
    password: hashPass,
    accessToken: activationCode,
  });

  res.status(200).json({
    user,
    message: "User Created successful",
  });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const loggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.me);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const makeHashPass = asyncHandler(async (req, res) => {
  const { password } = req.body;
  // password hash
  const hashPass = await bcrypt.hash(password, 10);
  res.status(200).json({ hashPass });
});

/**
 * Account activate by OTP
 */
export const accountActivateByOTP = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { otp } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }

  if (!otp) {
    return res.status(400).json({ message: "OTP not found" });
  }

  const verifyToken = hyphensToDots(token);

  // verify token
  const tokenCheck = jwt.verify(verifyToken, process.env.ACCESS_TOKEN_SECRET);

  if (!tokenCheck) {
    return res.status(400).json({ message: "Invalid Activation Request" });
  }

  // activate account now
  let activateUser = null;

  if (isMobile(tokenCheck.auth)) {
    activateUser = await User.findOne({ phone: tokenCheck.auth });

    if (!activateUser) {
      return res.status(400).json({ message: "Activate User Not Found" });
    }
  } else if (isEmail(tokenCheck.auth)) {
    activateUser = await User.findOne({ email: tokenCheck.auth });

    if (!activateUser) {
      return res.status(400).json({ message: "Activate User Not Found" });
    }
  } else {
    return res.status(400).json({ message: "Auth Undefined" });
  }

  // check otp
  if (otp != activateUser.accessToken) {
    return res.status(400).json({ message: "OTP doesn't match!" });
  }

  // set access token
  activateUser.accessToken = null;
  activateUser.save();

  // clear cookie from browser
  res.clearCookie("verifyToken");

  return res
    .status(200)
    .json({ message: "User activation successfull", user: activateUser });
});
/**
 * Account activate by url
 */
export const accountActivateByLink = asyncHandler(async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }

  const verifyToken = hyphensToDots(token);

  // verify token
  const tokenCheck = jwt.verify(verifyToken, process.env.ACCESS_TOKEN_SECRET);

  if (!tokenCheck) {
    return res.status(400).json({ message: "Invalid Activation Request" });
  }

  // activate account now
  let activateUser = null;

  if (isMobile(tokenCheck.auth)) {
    activateUser = await User.findOne({ phone: tokenCheck.auth });

    if (!activateUser) {
      return res.status(400).json({ message: "Activate User Not Found" });
    }
  } else if (isEmail(tokenCheck.auth)) {
    activateUser = await User.findOne({ email: tokenCheck.auth });

    if (!activateUser) {
      return res.status(400).json({ message: "Activate User Not Found" });
    }
  } else {
    return res.status(400).json({ message: "Auth Undefined" });
  }

  // set access token
  activateUser.accessToken = null;
  activateUser.save();

  // clear cookie from browser
  res.clearCookie("verifyToken");

  return res.status(200).json({ message: "User activation successfull" });
});

/**
 *resend activation code
 */
export const resendAccountActivation = asyncHandler(async (req, res) => {
  const { auth } = req.params;

  // create a access token for account activation
  const activationCode = createOTP();

  // get auth
  let authEmail = null;
  let authPhone = null;
  let authUser = null;

  if (isMobile(auth)) {
    authPhone = auth;

    // check mobile exist or not
    authUser = await User.findOne({ phone: auth });

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // send otp to user mobile
    await sendSMS(
      auth,
      `Hello ${authUser.name}! Your account activation code is: ${activationCode}`
    );
  } else if (isEmail(auth)) {
    authEmail = auth;
    // check mobile exist or not
    authUser = await User.findOne({ email: auth });

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // activation link
    const activationLink = `http://localhost:3000/activation/${dotsToHyphens(
      verifyToken
    )}`;

    // send activation link to email
    await ActivationEmail(auth, {
      name: authUser.name,
      code: activationCode,
      link: activationLink,
    });
  }

  authUser.accessToken = activationCode;
  authUser.save();

  res.status(200).json({
    message: "Activation Code Send Successfully",
  });
});

/**
 * Reset Password
 */
export const resetPassword = asyncHandler(async (req, res) => {
  const { auth } = req.body;

  // create a access token for account activation
  const activationCode = createOTP();

  // reset user data
  let resetUser = null;

  if (isMobile(auth)) {
    resetUser = await User.findOne({ phone: auth });

    console.log(resetUser);

    if (!resetUser) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // send otp to user mobile
    await sendSMS(
      auth,
      `Hello ${resetUser.name}! Your password reset code is: ${activationCode}`
    );
  } else if (isEmail(auth)) {
    resetUser = await User.findOne({ email: auth });

    console.log(resetUser);

    if (!resetUser) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    // create verification token
    const verifyToken = jwt.sign(
      { auth: auth, otp: activationCode },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("verifyToken", verifyToken);

    // activation link
    const activationLink = `http://localhost:3000/activation/${dotsToHyphens(
      verifyToken
    )}`;

    // send activation link to email
    await ActivationEmail(auth, {
      name: resetUser.name,
      code: activationCode,
      link: activationLink,
    });
  } else {
    return res.status(400).json({
      message: "You must use Email address or Phone number",
    });
  }
  resetUser.accessToken = activationCode;
  resetUser.save();
  res.status(200).json({
    message: "Password Reset Code Sent Successfully",
  });
});

/**
 * Password Reset Action
 */
export const resetPasswordAction = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { newPassword, confPassword, otp } = req.body;

  if (!newPassword) {
    return res.status(400).json({ message: "Provide a password!" });
  }
  if (!confPassword) {
    return res.status(400).json({ message: "Confirm your new password!" });
  }
  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }

  if (!otp) {
    return res.status(400).json({ message: "OTP not found" });
  }
  if (newPassword != confPassword) {
    return res.status(400).json({ message: "Password doesnt match!" });
  }

  const verifyToken = hyphensToDots(token);

  // verify token
  const tokenCheck = jwt.verify(verifyToken, process.env.ACCESS_TOKEN_SECRET);

  if (!tokenCheck) {
    return res.status(400).json({ message: "Invalid Activation Request" });
  }

  // activate account now
  let resetUser = null;

  if (isMobile(tokenCheck.auth)) {
    resetUser = await User.findOne({ phone: tokenCheck.auth });

    if (!resetUser) {
      return res.status(400).json({ message: "User Not Found" });
    }
  } else if (isEmail(tokenCheck.auth)) {
    resetUser = await User.findOne({ email: tokenCheck.auth });

    if (!resetUser) {
      return res.status(400).json({ message: "User Not Found" });
    }
  } else {
    return res.status(400).json({ message: "Auth Undefined" });
  }

  // check otp
  if (otp != resetUser.accessToken) {
    return res.status(400).json({ message: "OTP doesn't match!" });
  }

  // password hash
  const hashPass = await bcrypt.hash(newPassword, 10);
  resetUser.password = hashPass;
  resetUser.accessToken = null;
  resetUser.save();
  return res.status(200).json({ message: "Password Updated" });
});

/**
 * Password Reset Action
 */
export const uploadProfilePhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // upload file
  const file = await cloudUpload(req);

  // now find user
  const user = await User.findByIdAndUpdate(
    id,
    {
      photo: file.secure_url,
    },
    { new: true }
  );

  res.status(201).json({ message: "Profile Photo Updated", user });
});
