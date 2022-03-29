import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
// import Header from "./Components/Header/Header";
// import SideBar from "./Components/SideBar/SideBar";
// import UsersList from "./Components/ListUsers/UsersList";

import { setUser } from "./ducks/actions/UserAction";

import styled from "./styles.module.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(1));
  }, [dispatch]);

  return (
    <div className={styled.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
