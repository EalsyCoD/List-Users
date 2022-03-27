import React from 'react';
import styled from './UsersList.module.scss'
import { useSelector } from "react-redux";
import { RootState } from '../../types'


const UsersList = (): JSX.Element => {
    const users = useSelector((state: RootState) => state.users)

    return (
        <div className={styled.container}>
                {Array.isArray(users) && users.map((user:any,i:any) => {
                    return(
                        <div className={styled.border}>
                        <div className={styled.users} key={i}>
                            <p className={styled.name}>ФИО:</p> <p className={styled.username}>{user.name}</p>
                            <button type="submit" className={styled.button}>Подробнее</button>
                            </div>
                        <div className={styled.users} key={i}>
                            <p className={styled.name}>город:</p> <p className={styled.username}>{user.address.city}</p>
                            </div>
                        <div className={styled.users} key={i}>
                            <p className={styled.name}>компания:</p> <p className={styled.username}>{user.company.name}</p>
                            </div>
                        </div>
                    )
                })}

               
        </div>
    );
}

export default UsersList;