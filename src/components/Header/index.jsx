import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Logo from "../../assets/logo/logo.svg";
import "./Header.scss";
import "./menuToggle.scss";

const menuItems = [
  { name: "About me", link: "#about" },
  { name: "Relationships", link: "#relatationships" },
  { name: "Requirements", link: "#requirements" },
  { name: "Users", link: "#users" },
  { name: "Sign up", link: "#registration" }
];

const Header = ({ currentUser }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <nav className="user-nav">
          {menuItems.map(({ name, link }) => (
            <div key={name} className="user-nav__item">
              <a href={link}>{name}</a>
            </div>
          ))}
        </nav>

        <nav className="mobile-nav" role="mobile-nav">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              {currentUser ? (
                <div>
                  <img
                    src={currentUser.photo}
                    alt=""
                    className="toggle__avatar"
                  />
                  <div className="toggle__nickname">{currentUser.name}</div>
                  <div className="toggle__email">{currentUser.email}</div>
                </div>
              ) : null}
              <hr />
              <a href="#">
                <li>About me</li>
              </a>
              <a href="#">
                <li>Relationships</li>
              </a>
              <a href="#">
                <li>Requirements</li>
              </a>
              <a href="#">
                <li>Users</li>
              </a>
              <a href="#">
                <li>Sign Up</li>
              </a>
              <a href="#">
                <li>Sign Out</li>
              </a>
            </ul>
          </div>
        </nav>

        {currentUser ? (
          <div className="profile">
            <div className="profile__info">
              <div className="profile__info__nickname">{currentUser.name}</div>
              <div className="profile__info__email">{currentUser.email}</div>
            </div>

            <img src={currentUser.photo} alt="" className="profile__avatar" />

            <div className="profile__signout">
              <img src={require("../../assets/icons/sign-out.svg")} alt="" />
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
