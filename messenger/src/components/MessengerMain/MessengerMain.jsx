import "./MessengerMain.scss";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

const MessengerMain = () => {
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
            <div className="chat-form-icons"></div>
            <div className="chat-form-input">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="chat-profile">Profile</div>
      </div>
    </>
  );
};

export default MessengerMain;
