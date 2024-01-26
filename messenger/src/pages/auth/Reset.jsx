import PageHeader from "../../components/PageHeader/PageHeader";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import useFormFields from "../../hooks/useFormFields";
import {
  resetPassword,
  resetPasswordAction,
} from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import { useEffect } from "react";
import Cookie from "js-cookie";

export const Reset = () => {
  // hooks
  const dispatch = useDispatch();
  const { message, error, loader } = useSelector(getAuthData);
  const navigate = useNavigate();
  const token = Cookie.get("verifyToken");

  // form feild manage
  const { input, handleInputChange, resetForm } = useFormFields({
    newPassword: "",
    confPassword: "",
    otp: "",
  });

  //   handle password reset
  const handlePasswordReset = (e) => {
    e.preventDefault();

    dispatch(resetPasswordAction({ token, input }));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/login");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);

  return (
    <>
      <PageHeader title="Reset Password" />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <AuthHeader
              title="Reset your password"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam"
            />

            <div className="auth-form">
              <form onSubmit={handlePasswordReset}>
                <input
                  type="text"
                  placeholder="New Password"
                  value={input.newPassword}
                  name="newPassword"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={input.confPassword}
                  name="confPassword"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Password OTP"
                  value={input.otp}
                  name="otp"
                  onChange={handleInputChange}
                />
                <button type="submit" className="bg-fb">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/login">Log in Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};
