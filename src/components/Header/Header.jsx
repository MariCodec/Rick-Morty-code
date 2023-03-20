import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import logo from "../../assets/Rm.png";
import { URLS } from "../../consts";

import "./header.scss";

const Header = ({ photoUser, user }) => {
  const onSignOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
    });
  };
  return (
    <div className="header">
      <Link to={URLS.LOGIN}>
        <img className="userPhoto" src={photoUser} alt="" />
        {user ? (
          <h2 onClick={onSignOut} className="loginButton">
            SignOut
          </h2>
        ) : (
          <h2 className="loginButton">SignIn</h2>
        )}
        {/* <h2 className="loginButton">SignIn</h2> */}
      </Link>
      <div className="logo">
        <img src={logo} alt="#" />{" "}
      </div>
    </div>
  );
};

export default Header;
