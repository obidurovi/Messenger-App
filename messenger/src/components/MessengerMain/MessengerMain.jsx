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

const MessengerMain = () => {
  const { isOpen, toggleMenu } = useDropdownPopupControl();

  return (
    <>
      <div className="chat-container">
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
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item active">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
            <div className="user-item">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <div className="user-details">
                <span className="user-name">Obidur Rahman</span>
                <span className="user-chat-info">
                  <span className="chat-short">kaman a60?</span>
                  <span className="chat-time">1h</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-body-active-user">
            <div className="chat-active-user-details">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <spn className="chat-user-name">Obidur Rahman</spn>
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
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />
              <span className="chat-user-name">Obidur Rahman</span>
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
              <input type="text" placeholder="Aa" />
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
        </div>
        <div className="chat-profile">
          <div className="profile-info">
            <img
              src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
              alt=""
            />
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
      </div>
    </>
  );
};

export default MessengerMain;
