import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import User from "../User";

import "./UsersList.scss";

const UsersList = ({ data, nextUrl, onClick }) => {
  const isHideButton = nextUrl === null;
  return (
    <div className="container">
      <div className="users-headings">
        <div className="users-headings--1"> Our cheerful users</div>
        <div className="users-headings--2">
          Attention! Sorting users by registration date
        </div>
      </div>

      <section className="users" id="users">
        {data.map(user => (
          <User
            key={user.id}
            username={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
            photo={user.photo}
          />
        ))}
      </section>
      {isHideButton ? null : (
        <div className="center">
          <button onClick={onClick} className="users__button">
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersList;
