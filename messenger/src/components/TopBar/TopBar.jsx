import "./TopBar.scss";
import { Link } from "react-router-dom";
import { CiSearch, CiHome, CiVideoOn, CiShop, CiEdit } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import { Avatar } from "@chakra-ui/avatar";

const TopBar = () => {
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const { user } = useAuthUser();
  const dispatch = useDispatch();

  //   user logout
  const handleUserLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="top-bar">
        <div className="topbar-container">
          <div className="topbar-search">
            <Link to="/">
              <img
                src="https://static-00.iconduck.com/assets.00/messenger-icon-512x512-5pi1qivq.png"
                alt=""
              />
            </Link>
            <div className="search">
              <input type="text" placeholder="Search Messenger" />
              <CiSearch />
            </div>
          </div>
          <div className="topbar-menu">
            <ul>
              <li>
                <Link to="/">
                  <CiHome />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiUsers />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiVideoOn />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiShop />
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-user">
            <button onClick={toggleMenu}>
              <Avatar
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
                name={user.name}
                src={user.photo}
              />
            </button>

            {isOpen && (
              <div className="drop-down-menu dropdown">
                <ul>
                  <li>
                    <Link to="/">
                      <MdDarkMode />
                      Dark Mode
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile-edit">
                      <CiEdit />
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLock /> Password Change
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleUserLogout}>
                      <IoIosLogOut /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
