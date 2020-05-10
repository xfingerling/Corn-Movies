import React from "react";

import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ onGoBack }) => (
  <button onClick={onGoBack} className={style.btn}>
    Go Back
  </button>
);

export default GoBackBtn;
