import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

import styled from "./Loader.module.scss";
import img from "./loader.svg";

const Loader = () => {
  const loader = useSelector((state: RootState) => state.loader);

  return (
    <React.Fragment>
      {loader.status ? (
        <div className={styled.container}>
          <img className={styled.image} src={img} alt="loader"></img>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Loader;
