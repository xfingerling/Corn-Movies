import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

const MoviesListItem = ({ id, title, name, location }) => (
  <li>
    <NavLink to={{ pathname: `/movies/${id}`, state: { from: location } }}>
      {name || title}
    </NavLink>
  </li>
);

MoviesListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default withRouter(MoviesListItem);
