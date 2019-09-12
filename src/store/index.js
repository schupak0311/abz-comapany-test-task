import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "../reducers/userReducer";
import usersReducer from "../reducers/usersReducer";

const initialState = {};

const middlewares = [thunk];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = {
  user: userReducer,
  users: usersReducer
};

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
