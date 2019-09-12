import React from "react";
import App from "../../containers/App";
import { Provider } from "react-redux";

import store from "../../store";

import "./Home.scss";

const Home = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Home;
