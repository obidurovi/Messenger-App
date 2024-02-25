import "./MessengerMain.scss";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import Gallery from "../../svgs/Gallery";
import ThumbsUp from "../../svgs/ThumbsUp";
import Smile from "../../svgs/Smile";
import Plus from "../../svgs/Plus";
import Sticker from "../../svgs/Sticker";
import Gif from "../../svgs/Gif";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import Profile from "../../svgs/Profile";
import Bell from "../../svgs/Bell";
import Search from "../../svgs/Search";
import Collapsible from "react-collapsible";
import Users from "../Users/Users";
import { useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { useDispatch } from "react-redux";
import { createChat } from "../../features/chat/chatApiSlice";

const MessengerMain = () => {
  const [chat, setChat] = useState("");
  const dispatch = useDispatch();

  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const [activeChat, setActiveChat] = useState();

  const handleMessageSent = (e) => {
    if (e.key === "Enter") {
      dispatch(
        createChat({
          chat: chat,
          receiverId: activeChat._id,
        })
      );

      setChat("");
    }
  };

  return (
    <>
      <div className="chat-container">
        <Users setActiveChat={setActiveChat} activeChat={activeChat} />
        <div className="chat-body">
          {activeChat ? (
            <>
              <div className="chat-body-active-user">
                <div className="chat-active-user-details">
                  <Avatar name={activeChat?.name} src={activeChat?.photo} />
                  <spn className="chat-user-name">{activeChat?.name}</spn>
                </div>
                <div className="chat-active-user-menu">
                  <button>
                    <IoIosCall />
                  </button>
                  <button>
                    <FaVideo />
                  </button>
                  <button>
                    <MdInfo />
                  </button>
                </div>
              </div>

              <div className="chat-body-msg">
                <div className="chat-msg-profile">
                  <Avatar name={activeChat?.name} src={activeChat?.photo} />
                  <span className="chat-user-name">{activeChat?.name}</span>
                </div>
                <div className="chat-msg-list">
                  <div className="my-msg">
                    <div className="msg-txt">Hello, How are you?</div>
                    <div className="msg-photo">
                      <img
                        src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span>2:54PM</span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />
                    <div className="friend-msg-details">
                      <div className="msg-txt">Hello, How are you?</div>
                      <div className="msg-photo"></div>
                    </div>
                  </div>
                  <div className="my-msg">
                    <div className="msg-txt">Hello, How are you?</div>
                    <div className="msg-photo">
                      <img
                        src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span>2:54PM</span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />
                    <div className="friend-msg-details">
                      <div className="msg-txt">Hello, How are you?</div>
                      <div className="msg-photo"></div>
                    </div>
                  </div>
                  <div className="my-msg">
                    <div className="msg-txt">Hello, How are you?</div>
                    <div className="msg-photo">
                      <img
                        src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span>2:54PM</span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />
                    <div className="friend-msg-details">
                      <div className="msg-txt">Hello, How are you?</div>
                      <div className="msg-photo"></div>
                    </div>
                  </div>
                  <div className="my-msg">
                    <div className="msg-txt">Hello, How are you?</div>
                    <div className="msg-photo">
                      <img
                        src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span>2:54PM</span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />
                    <div className="friend-msg-details">
                      <div className="msg-txt">Hello, How are you?</div>
                      <div className="msg-photo"></div>
                    </div>
                  </div>
                  <div className="my-msg">
                    <div className="msg-txt">Hello, How are you?</div>
                    <div className="msg-photo">
                      <img
                        src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="msg-time">
                    <span>2:54PM</span>
                  </div>
                  <div className="friend-msg">
                    <img
                      src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      alt=""
                    />
                    <div className="friend-msg-details">
                      <div className="msg-txt">Hello, How are you?</div>
                      <div className="msg-photo"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat-body-form">
                <div className="chat-form-icons">
                  <ul>
                    <li>
                      <Plus />
                    </li>
                    <li>
                      <Gallery />
                    </li>
                    <li>
                      <Sticker />
                    </li>
                    <li>
                      <Gif />
                    </li>
                  </ul>
                </div>
                <div className="chat-form-input">
                  <input
                    type="text"
                    onChange={(e) => setChat(e.target.value)}
                    placeholder="Aa"
                    value={chat}
                    onKeyDown={handleMessageSent}
                  />
                  {isOpen && (
                    <div className="chat-emoji-picker">
                      <EmojiPicker />
                    </div>
                  )}

                  <button className="emoji-btn" onClick={toggleMenu}>
                    <Smile />
                  </button>
                </div>
                <div className="chat-emoji">
                  <ThumbsUp />
                </div>
              </div>
            </>
          ) : (
            "No Chat Selected"
          )}
        </div>
        {activeChat && (
          <div className="chat-profile">
            <div className="profile-info">
              <Avatar name={activeChat?.name} src={activeChat?.photo} />
              <ul>
                <li>
                  <button>
                    <Profile />
                  </button>
                  <span>Profile</span>
                </li>
                <li>
                  <button>
                    <Bell />
                  </button>
                  <span>Mute</span>
                </li>
                <li>
                  <button>
                    <Search />
                  </button>
                  <span>Search</span>
                </li>
              </ul>

              <div className="profile-options">
                <Collapsible trigger="Chat Info">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
                <Collapsible trigger="Customize Chat">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
                <Collapsible trigger="Media, files and links">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
                <Collapsible trigger="Privacy & Support">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessengerMain;
