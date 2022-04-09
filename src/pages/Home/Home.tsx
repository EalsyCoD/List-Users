import React from 'react';

import Header from '../../Components/Header/Header';
import UsersList from '../../Components/ListUsers/UsersList';
import SideBar from '../../Components/SideBar/SideBar';
import Loader from '../../Components/Loader/Loader';

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <UsersList />
      <Loader />
      <SideBar />
    </React.Fragment>
  );
};

export default Home;
