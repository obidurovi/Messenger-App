import "./Auth.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/toast";

const Register = () => {
  // hooks
  const dispatch = useDispatch();
  const { message, error, loader } = useSelector(getAuthData);
  const navigate = useNavigate();

  // form feild manage
  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
    auth: "",
    password: "",
  });

  // handle user register
  const handleUserRegister = (e) => {
    e.preventDefault();

    dispatch(createUser(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/activation");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);

  return (
    <>
      <PageHeader title="Sign Up" />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <AuthHeader
              title="Create Your Account"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam"
            />

            <div className="auth-form">
              <form onSubmit={handleUserRegister}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  value={input.auth}
                  name="auth"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                />
                <button className="bg-fb-green">
                  Create Account {loader ? "Creating...." : ""}
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

export default Register;
