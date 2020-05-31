import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./AdditionalInformation.module.css";

const AdditionalInformation = ({ id, location }) => (
  <div className={style.wrap}>
    <NavLink
      to={{ pathname: "/movies/${id}/cast", state: { from: location } }}
      className={style.link}
      activeClassName={style.active}
    >
      Cast
    </NavLink>
    <NavLink
      to={{ pathname: "/movies/${id}/reviews", state: { from: location } }}
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
