import { SET_USER, SET_IS_LOADING } from "../actions/types";

const initialState = {
  user: null,
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {
        ...state,
        user
      };
    case SET_IS_LOADING:
      const isLoading = action.payload;
      return {
        ...state,
        isLoading
      };
    default:
      return state;
  }
};
