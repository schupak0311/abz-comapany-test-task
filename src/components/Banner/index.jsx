import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="background">
      <div className="container">
        <section className="banner">
          <div className="content-container">
            <div className="banner__content">
              <div className="heading">
                Test assignment for Frontent Developer position
              </div>

              <div className="text">
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository. Please be
                patient, we consider and respond every application that meets
                minimum requirements. We look forward to your submission. Good
                luck!
              </div>

              <button className="btn">
                <a href="#registration">Sign up</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
