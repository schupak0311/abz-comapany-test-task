import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const User = ({ username, email, phone, position, photo }) => {
  return (
    <div className="user">
      <img src={photo} alt="" className="user__avatar" />
      <div className="user__name">{username}</div>
      <div className="user__details">
        <div className="user__details__position">{position}</div>
        <div className="user__details__email">{email}</div>
        <div className="user__details__phone">{phone}</div>
      </div>
    </div>
  );
};

export default User;
