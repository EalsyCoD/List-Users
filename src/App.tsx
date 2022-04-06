import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import UsersPage from "./pages/Profiles/UsersPage";

import { setUser } from "./ducks/actions/UserAction";
// import { EditUser } from "./ducks/actions/EditAction";

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
        <Route path="/profile/:id" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

export default App;
