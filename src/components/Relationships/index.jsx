import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Relationships.scss";

const Relatationships = () => {
  return (
    <div className="container">
      <section className="relatationships" id="relatationships">
        <div className="relatationships__heading">
          About my relationships with web-development
        </div>
        <div className="technologies">
          <div className="technology">
            <img
              className="technology_image"
              src={require("../../assets/imgs/html.svg")}
              alt="logo"
            />
            <div>
              <div className="technology__title">I'm in love with HTML</div>

              <p className="technology__info">
                Hypertext Markup Languagy (HTML) is the standart markup language
                for creating web pages and web applications.
              </p>
            </div>
          </div>

          <div className="technology">
            <img src={require("../../assets/imgs/css.svg")} alt="logo" />

            <div>
              <div className="technology__title">Css is my best friend</div>

              <p className="technology__info">
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                langiage like HTML.
              </p>
            </div>
          </div>

          <div className="technology">
            <img src={require("../../assets/imgs/javascript.svg")} alt="logo" />

            <div>
              <div className="technology__title">JavaScript is my passion</div>

              <p className="technology__info">
                JavaScript is a high-level, interpreted programming language. It
                is a language which is also characterized as dynamic, weakly
                typed, prototype-based and multi-paradigm.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Relatationships;
