import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import UsersList from './Components/ListUsers/UsersList'

import { setUser } from './ducks/actions/UserAction'


import styled from './styles.module.scss'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setUser(1))
    }, [dispatch])
  
    return (
      <div className={styled.container}>
        <Header />
        <UsersList />
        <SideBar />
      </div>
    )
  }


export default App;