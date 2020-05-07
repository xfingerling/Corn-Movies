import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

import style from "./MoviesListItem.module.css";

const MoviesListItem = ({ movie, location }) => {
  const { title, name, id, poster_path: poster } = movie;
  console.log(movie);
  return (
    <li className={style.movieListItem}>
      <NavLink
        to={{ pathname: `/movies/${id}`, state: { from: location } }}
        className={style.link}
      >
        <img
          src={`http://image.tmdb.org/t/p/w200/${poster}`}
          alt={name || title}
          className={style.img}
        />
        {name || title}
      </NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default withRouter(MoviesListItem);
