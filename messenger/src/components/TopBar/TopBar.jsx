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

const TopBar = () => {
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const { user } = useAuthUser();
  const dispatch = useDispatch();

  //   user logout
  const handleUserLogout = () => {
    dispatch(logoutUser());
  };

  return (
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
            {user.photo ? (
              <img src={user.photo} />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            )}
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
                  <Link to="/">
                    <CiEdit />
                    Edit
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
  );
};

export default TopBar;
