import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <section className="about" id="about">
        <div className="heading-primary">Let's get acquainted</div>
        <div className="about__content">
          <img
            src={require("../../assets/imgs/man-mobile.svg")}
            alt="man-mobile"
            className="about__image"
          />
          <div className="about__text">
            <div className="about__text__title">
              I am cool frontend developer
            </div>
            <div className="about__text--first">
              When real users have a slow experience on mobile, they're much
              less likely to find what they are looking for or purchase from you
              in the future. For many sites this equates to a huge missed
              opportunity, especially when more than half ov visits are
              abandoned if a mobile page takes over 3 seconds to load
            </div>
            <div className="about__text--second">
              Last week, Google Search and Ads teams announced two new speed
              initiatives to help improve user-experience on the web
            </div>
            <div className="about__text--third">
              <a className="link" href="#registration">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
