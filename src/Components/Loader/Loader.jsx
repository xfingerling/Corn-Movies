import React from "react";

import Loader from "react-loader-spinner";

import style from "./Loader.module.css";

const MyLoader = () => (
  <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={80}
    width={80}
    className={style.loader}
  />
);

export default MyLoader;
