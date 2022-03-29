import React from "react";

import Header from "../../Components/Header/Header";
import UsersList from "../../Components/ListUsers/UsersList";
import SideBar from "../../Components/SideBar/SideBar";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <UsersList />
      <SideBar />
    </React.Fragment>
  );
};

export default Home;
