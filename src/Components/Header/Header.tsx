import React from 'react';
import styled from './Header.module.scss';

const Header = () => (
  <div className={styled.container}>
    <h1 className={styled.h1}>Список пользователей</h1>
  </div>
);

export default Header;
