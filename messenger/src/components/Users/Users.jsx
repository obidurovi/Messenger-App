import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/user/userSlice";
import { getAllUser } from "../../features/user/userApiSlice";
import { Avatar } from "@chakra-ui/avatar";

const Users = ({ setActiveChat, activeChat }) => {
  const dispatch = useDispatch();
  const { users, error, message } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch]);

  return (
    <div className="chat-users">
      <div className="chat-users-header">
        <div className="chat-users-header-top">
          <h2>Chats</h2>
          <div className="btns">
            <button>
              <BsThreeDots />
            </button>
            <button>
              <FiEdit />
            </button>
          </div>
        </div>
        <div className="chat-users-header-search">
          <input type="search" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="chat-users-header-menu">
          <button className="active">Inbox</button>
          <button>Communities</button>
        </div>
      </div>
      <div className="chat-users-list">
        {users?.map((item, index) => {
          return (
            <div
              className={`user-item ${
                item._id === activeChat?._id ? "active" : ""
              }`}
              key={index}
              onClick={() => setActiveChat(item)}
            >
              <Avatar name={item?.name} src={item.photo} />
              <div className="user-details">
                <span className="user-name">{item.name}</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
