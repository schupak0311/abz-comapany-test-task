import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import RegistrationForm from "../../components/RegistrationForm";

const Registration = ({ positions }) => {
  return (
    <Fragment>
      <RegistrationForm positions={positions} />
    </Fragment>
  );
};

export default Registration;
