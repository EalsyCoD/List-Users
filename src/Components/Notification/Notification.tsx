import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

import styled from "./Notification.module.scss";
import img from "./icon-error.svg";
const Notification = () => {
  const notification = useSelector((state: RootState) => state.notification);

  if (notification.message === null) {
    return null;
  }

  return (
    <div
      className={styled.container}
      color={
        notification.status !== null
          ? notification.status > 300
            ? "#d32f2f"
            : "#2e7d32"
          : ""
      }
    >
      <div className={styled.wrap}>
        <img className={styled.img} src={img} alt="img"></img>
        <div className={styled.notification}>{notification.message}</div>
      </div>
    </div>
  );
};

export { Notification };
