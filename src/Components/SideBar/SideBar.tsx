import React from "react";
import styled from "./SideBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types";
import { filterNameChange } from "../../ducks/reducers/FilterReducer";
import { filterNameChangeCompany } from "../../ducks/reducers/FilterReducerCompany";

const SideBar = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

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
    dispatch(filterNameChangeCompany(filterSort));
  };
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>Сортировка</h1>
      <div className={styled.btns}>
        <button onClick={handleChange} type="submit" className={styled.city}>
          <span className={styled.text}>по городу</span>
        </button>
        <button onClick={handleChangeCompany} className={styled.company}>
          <span className={styled.text1}>по компании</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
