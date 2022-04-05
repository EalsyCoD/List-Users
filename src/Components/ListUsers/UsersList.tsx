import React from "react";
import styled from "./UsersList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterNameChange } from "../../ducks/reducers/FilterReducer";

const UsersList = (name:any): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) =>{
    return state.users
  })
  
  const filters = useSelector((state: RootState) => state.filter);
  const handleChange = () => {
    const filterSort = users.sort((a: any, b: any) =>
      a.address.city > b.address.city ? 1 : -1
    );
    dispatch(filterNameChange(filterSort));
  };
  const handleChangeCompany = () => {
    const filterSort = users.sort((a: any, b: any) =>
      a.company.name > b.company.name ? 1 : -1
    );
    dispatch(filterNameChange(filterSort));
  };
  return (
    <div className={styled.container}>
      {Array.isArray(users) &&
        users.map((user: any, i: any) => {
          return (
            <div className={styled.border} key={i}>
              <div className={styled.users}>
                <p className={styled.name}>ФИО:</p>{" "}
                <p className={styled.username}>{user.name}</p>
                <Link to={`/profile/${user.id}`} type="submit" className={styled.button}>
                  Подробнее
                </Link>
              </div>
              <div className={styled.users}>
                <p className={styled.name}>город:</p>{" "}
                <p className={styled.username}>{user.address.city}</p>
              </div>
              <div className={styled.users}>
                <p className={styled.name}>компания:</p>{" "}
                <p className={styled.username}>{user.company.name}</p>
              </div>
            </div>
          );
        })}
      <div className={styled.lengthUsers}>
        <h1>Найдено {users.length} пользоваталей</h1>
      </div>
    </div>
  );
};

export default UsersList;
