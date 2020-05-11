import React from "react";
import PropTypes from "prop-types";

import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ onGoBack }) => (
  <button onClick={onGoBack} className={style.btn}></button>
);

GoBackBtn.propTypes = {
  onGoBack: PropTypes.func,
};

export default GoBackBtn;
