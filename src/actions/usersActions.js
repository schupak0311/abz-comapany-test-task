import * as authService from "../services/authService";

import {
  SET_USER,
  SET_IS_LOADING,
  FETCH_USERS_REQUEST,
  FETCH_MORE_USERS,
  FETCH_USERS_SUCCESS,
  ADD_USER,
  RESET_USERS
} from "./types";

const setToken = token => localStorage.setItem("token", token);

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload: payload
});

export const fetchMoreUsers = payload => ({
  type: FETCH_MORE_USERS,
  payload: payload
});

export const addNewUser = user => ({
  type: ADD_USER,
  payload: user
});

const resetUsersSuccess = () => ({
  type: RESET_USERS
});

export const resetUsersData = () => dispatch => {
  dispatch(resetUsersSuccess());
};

export const loadCurrentUser = () => async dispatch => {
  try {
    dispatch(setIsLoading(true));
    const { token } = await authService.getToken();
    setToken(token);
    const { user } = await authService.getCurrentUser();
    dispatch(setUser(user));
  } catch (err) {
    dispatch(setUser(null));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const fetchUsers = page => async dispatch => {
  const { users } = await authService.getUsers(page);
  dispatch(fetchUsersSuccess(users));
};

export const loadMoreUsers = page => async dispatch => {
  const result = await authService.getUsers(page);
  dispatch(fetchMoreUsers(result));
};

export const registration = request => async dispatch => {
  const { user_id } = await authService.registration(request);
  const { users } = await authService.getUsers(1);
  dispatch(resetUsersSuccess());
  dispatch(fetchUsersSuccess(users));
};
