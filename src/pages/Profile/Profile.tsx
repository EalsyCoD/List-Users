import React from "react";

import styled from "./Profile.module.scss";

import SideBar from "../../Components/SideBar/SideBar";

const Profile = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={styled.container}>
        <div className={styled.headerline}>
          <div className={styled.header}>Профиль пользователя</div>
          <button type="submit" className={styled.btn}>
            <p className={styled.text}>Редактировать</p>
          </button>
        </div>
        <div className={styled.frame}>
          <div>
            <p className={styled.name}>Name</p>
            <input
              className={styled.border}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>User name</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>E-mail</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>Street</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>City</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>Zip-code</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>Phone</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>Website</p>
            <input
              className={styled.bordername}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <div>
            <p className={styled.username}>Comment</p>
            <input
              className={styled.comment}
              type="text"
              placeholder={""}
            ></input>
          </div>
          <button className={styled.disable}>
            <p className={styled.btntext}>Отправить</p>
          </button>
        </div>
      </div>
      <SideBar />
    </React.Fragment>
  );
};

export default Profile;
