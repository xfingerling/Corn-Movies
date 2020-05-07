import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MoviesListItem = ({ id, title, name }) => {
  return (
    <li>
      <NavLink to={`/movies/${id}`}>{name || title}</NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default MoviesListItem;
