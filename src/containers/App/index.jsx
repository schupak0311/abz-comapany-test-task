import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Relationships from "../../components/Relationships";
import Requirements from "../../components/Requirements";
import Registation from "../Registration";
import Footer from "../../components/Footer ";

import { loadCurrentUser } from "../../actions/usersActions";
import { getPositions } from "../../services/authService";
import Users from "../Users";

const App = () => {
  const dispatch = useDispatch();
  const [userPositions, setUserPositions] = useState();
  const { user } = useSelector(state => state.user);

  useEffect(async () => {
    const { positions } = await getPositions();
    setUserPositions(positions);
  }, []);

  useEffect(async () => {
    dispatch(loadCurrentUser());
  }, []);

  return (
    <Fragment>
      <Header currentUser={user ? user : null} />
      <Banner />
      <About />
      <Relationships />
      <Requirements />
      <Users />
      <Registation position={userPositions} />
      <Footer />
    </Fragment>
  );
};

export default App;
