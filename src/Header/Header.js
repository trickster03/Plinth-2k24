import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link

import "./Header.css";
import logo from "./asset/Plinth 2024 logo 1.svg";
import image from "./asset/image.svg";
import home from "./asset/home.svg";
import dashboard from "./asset/layout.svg";
import shopping from "./asset/shopping-bag.svg";
import message from "./asset/mail.svg";
import gallery from "./asset/image.svg";
import calander from "./asset/calendar.svg";
import users from "./asset/users.svg";
import document from "./asset/file-text.svg";
import login from "./asset/icons8-login-100.png";
import signup from "./asset/icons8-sign-up-64.png";
import ambassador from "./asset/ambassador.png";
import room from "./asset/room.png";
import UserContext from "../ContextApi/UserContext";
function Header() {

  const user = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    user.setUser(null);
  };


  return (
    <div className="nav-main">
      <span>
        <Link to="/">
          <img className="test" src={home} alt="" />
          <p>Home</p>
        </Link>
      </span>
      {user.user ? (
        <div>
          <span>
            <Link to="/login">
              <img className="test" src={login} alt="" />
              <p>Login</p>
            </Link>
          </span>
          <span>
            <Link to="/signup">
              <img className="test" src={signup} alt="" />
              <p>SignUp</p>
            </Link>
          </span>
        </div>
      ) : (
        <span onClick={handleLogout}>
          <div >
            <img className="test" src={login} alt=""  />
            <p>Logout</p>
          </div >
        </span >
      )}
      <span>
        <Link to="/competitions">
          <img className="test" src={document} alt="" />
          <p style={{ paddingTop: "10%" }}>Competitions</p>
        </Link>
      </span>
      {/* <span>
        <Link to="/Profile">
          <img className='test' src={message} alt="" />
          <p>Profile</p>
        </Link>
      </span> */}
      {/* <span>
        <Link to="/events">
          <img className="test" src={calander} alt="" />
          <p>Events</p>
        </Link>
      </span> */}
      
      <span>
        <Link to="/campus-ambassador">
          <img className="test" src={ambassador} alt="" />
          <p style={{ paddingTop: "8%" }}>Ambassador</p>
        </Link>
      </span>
      <span>
        <Link to="/accomodation">
          <img className="test" src={room} alt="" />
          <p style={{ paddingTop: "10%" }}>Accommodation</p>
        </Link>
      </span>
      <span>
        <Link to="/lnm-hacks">
          <img className="test" src={ambassador} alt="" />
          <p style={{ paddingTop: "6%" }}>LnmHacks</p>
        </Link>
      </span>
      
      <span>
        <Link to="/Team">
          <img className='test' src={ambassador} alt="" />
          <p style={{paddingTop:"8%"}}>Our Team</p>
        </Link>
      </span>
    </div>
  );
}

export default Header;
