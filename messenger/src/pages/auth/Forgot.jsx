import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { Link } from "react-router-dom";

const Forgot = () => {
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
              <form action="">
                <input type="text" placeholder="Email or Phone Number" />
                <button className="bg-fb">Reset Password</button>
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

export default Forgot;
