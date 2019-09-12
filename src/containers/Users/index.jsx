import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  loadMoreUsers,
  resetUsersData
} from "../../actions/usersActions";
import UsersList from "../../components/UsersList";

const Users = () => {
  const dispatch = useDispatch();
  const { users, next_url } = useSelector(state => state.users);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchUsers(page));
  // }, []);

  useEffect(() => {
    dispatch(loadMoreUsers(page));
  }, [page]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(resetUsersData())
  //   }
  // }, []);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <Fragment>
      <UsersList
        data={users ? users : null}
        nextUrl={next_url}
        onClick={onClick}
      />
    </Fragment>
  );
};

export default Users;
