import React from "react";
import styled from "./UsersList.module.scss";
import { RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { filterNameChange } from "../../ducks/reducers/FilterReducer";
import { User } from "./User";
const UsersList = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const filters = useSelector((state: RootState) => state.filter);
  const handleChange = () => {
    const filterSort = users.sort((a, b) =>
      a.address.city > b.address.city ? 1 : -1
    );
    dispatch(filterNameChange(filterSort));
  };
  const handleChangeCompany = () => {
    const filterSort = users.sort((a, b) =>
      a.company.name > b.company.name ? 1 : -1
    );
    dispatch(filterNameChange(filterSort));
  };
  return (
    <React.Fragment>
      {users.length > 0 ? (
        <div>
          {users.map((user, i) => (
            <User data={user} key={i} />
          ))}
        </div>
      ) : (
        <React.Fragment>
          <h1 className={styled.noresult}>Ничего не найденно!</h1>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UsersList;
