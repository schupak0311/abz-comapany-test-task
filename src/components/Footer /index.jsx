import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Footer.scss";

const menuItems = [
  { name: "About me", link: "#about" },
  { name: "Relationships", link: "#relatationships" },
  { name: "Requirements", link: "#requirements" },
  { name: "Users", link: "#Users" },
  { name: "Sign up", link: "#signup" }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <img
            className="footer__top__logo"
            src={require("../../assets/logo/logo.svg")}
            alt=""
          />
          <nav className="footer__top__nav">
            {menuItems.map(({ name, link }) => (
              <div key={name} className="footer__top__nav__item">
                <a href={link}>{name}</a>
              </div>
            ))}
          </nav>
        </div>

        <hr />

        <div className="footer__bottom">
          <ul className="footer__bottom__row-1">
            <li className="footer__bottom__row-1__item">
              <img src={require("../../assets/icons/mail.svg")} alt="" />
              <div>work.of.future@gmail.com</div>
            </li>
            <li className="footer__bottom__row-1__item">
              <img src={require("../../assets/icons/phone.svg")} alt="" />
              <div>+38 (050) 789 24 98</div>
            </li>
            <li className="footer__bottom__row-1__item">
              <img src={require("../../assets/icons/cellphone.svg")} alt="" />
              <div>+38 (095) 556 08 45</div>
            </li>
          </ul>

          <ul className="footer__bottom__row-2">
            <li className="footer__bottom__row-2__item">News</li>
            <li className="footer__bottom__row-2__item">Blog</li>
            <li className="footer__bottom__row-2__item">Partners</li>
            <li className="footer__bottom__row-2__item">Shop</li>
          </ul>
          <ul className="footer__bottom__row-2">
            <li className="footer__bottom__row-2__item">Overview</li>
            <li className="footer__bottom__row-2__item">Design</li>
            <li className="footer__bottom__row-2__item">Code</li>
            <li className="footer__bottom__row-2__item">Collaborate</li>
          </ul>
          <ul className="footer__bottom__row-2">
            <li className="footer__bottom__row-2__item">Tutorials</li>
            <li className="footer__bottom__row-2__item">Resources</li>
            <li className="footer__bottom__row-2__item">Guides</li>
            <li className="footer__bottom__row-2__item">Examples</li>
          </ul>
          <ul className="footer__bottom__row-2">
            <li className="footer__bottom__row-2__item">FAQ</li>
            <li className="footer__bottom__row-2__item">Terms</li>
            <li className="footer__bottom__row-2__item">Conditions</li>
            <li className="footer__bottom__row-2__item">Help</li>
          </ul>
        </div>

        <div className="footer__socials">
          <div className="footer__socials__text">
            &copy; abz.agency specially for the test task
          </div>
          <div className="footer__socials__icons">
            <img src={require("../../assets/icons/facebook.svg")} alt="" />
            <img src={require("../../assets/icons/linkedin.svg")} alt="" />
            <img src={require("../../assets/icons/instagram.svg")} alt="" />
            <img src={require("../../assets/icons/twitter.svg")} alt="" />
            <img src={require("../../assets/icons/pinterest.svg")} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
