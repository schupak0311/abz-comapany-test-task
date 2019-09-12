import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_MORE_USERS,
  RESET_USERS,
  ADD_USER
} from "../actions/types";

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_MORE_USERS:
      return {
        ...state,
        users: [...state.users].concat(action.payload.users),
        next_url: action.payload.links.next_url
      };
    case RESET_USERS:
      return {
        ...state,
        users: []
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};
