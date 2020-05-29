import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./AdditionalInformation.module.css";

const AdditionalInformation = ({ id }) => (
  <div className={style.wrap}>
    <NavLink
      to={`/movies/${id}/cast`}
      className={style.link}
      activeClassName={style.active}
    >
      Cast
    </NavLink>
    <NavLink
      to={`/movies/${id}/reviews`}
      className={style.link}
      activeClassName={style.active}
    >
      Reviews
    </NavLink>
  </div>
);

AdditionalInformation.propTypes = {
  id: PropTypes.string,
};

export default AdditionalInformation;
