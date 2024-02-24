import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/avatar";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { uploadUserPhoto } from "../../features/auth/authApiSlice";

const Profile = () => {
  const { user } = useAuthUser();
  const dispatch = useDispatch();

  // upload file
  const handleFileUpload = (e) => {
    const profilePhoto = e.target.files[0];

    const form_data = new FormData();

    form_data.append("profile-photo", profilePhoto);

    dispatch(uploadUserPhoto({ data: form_data, id: user._id }));
  };

  return (
    <>
      <TopBar />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <div className="profile-photo-wrap">
              <Avatar name={user.name} src={user?.photo} />
              <label className="profile-photo-upload">
                Upload a Photo
                <input type="file" onChange={handleFileUpload} />
              </label>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/">Go to Messenger</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
