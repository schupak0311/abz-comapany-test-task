import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Requirements.scss";

const Requirements = () => {
  return (
    <div className="requirements__background">
      <div className="container">
        <section className="requirements" id="requirements">
          <div className="requirements__heading">
            General requirements for the test task
          </div>
          <div className="requirements__content">
            <div className="requirements__content__text">
              Users want to find answers to their questions quickly and data
              shows that people really care about how quickly their pages load.
              The Seatch team announced speed would be a ranking signal for
              desktop searches in 2010 and as of this mounth (July 2018), page
              speed will be a ranking factor for mobile searches too.
              <div className="requirements__content__text__paragraph">
                If you're a developer working on a site, now is a good time to
                evaluate your perfomance using our speed tools. Think about how
                perfomance using our speed tools. Think about how perfomance
                affects the user experience of your pages and consider measuring
                a variety of real-world user-centric perfomance metrics.
              </div>
              <div className="requirements__content__text__paragraph">
                Are you shipping too much JavaScript? Too many images? Images
                and JavaScript are the most significant contributors to the page
                weight that affect page load time based on data from HTTP
                Archive and the Chrome User Experience Report - our public
                dataset for key UX metrics as experienced by Chrome users under
                real-world conditions.
              </div>
            </div>
            <img
              className="requirements__content__image"
              src={require("../../assets/imgs/man-laptop-v1.svg")}
              alt="man"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Requirements;
