import React from 'react';
import styled from './UsersList.module.scss'
import { useSelector } from "react-redux";
import { RootState } from '../../types'
import { useDispatch } from 'react-redux'
import { filterNameChange } from '../../ducks/reducers/FilterReducer'
import { setUser } from '../../ducks/actions/UserAction'
const UsersList = (): JSX.Element => {
    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.users)
        
    const handleChange = () => {
        const filterSort = users.sort((a:any,b:any) => (a.name > b.name ? 1 : -1))
        dispatch(filterNameChange(filterSort))
    }
    return (
        <div className={styled.container}>
             <button onClick={handleChange} className={styled.company}>3232</button>
                {Array.isArray(users) && users.map((user:any,i:any) => {
                    return(
                        <div className={styled.border} key={i}>
                            
                        <div className={styled.users} >
                            <p className={styled.name}>ФИО:</p> <p className={styled.username}>{user.name}</p>
                            <button type="submit" className={styled.button}>Подробнее</button>
                            </div>
                        <div className={styled.users} >
                            <p className={styled.name}>город:</p> <p className={styled.username}>{user.address.city}</p>
                            </div>
                        <div  className={styled.users} >
                            <p className={styled.name}>компания:</p> <p className={styled.username}>{user.company.name}</p>
                            </div>
                        </div>
                    )
                })}

               
        </div>
    );
}

export default UsersList;