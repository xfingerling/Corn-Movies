import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

import style from "./MoviesListItem.module.css";

const MoviesListItem = ({ movie, location }) => {
  const { title, name, id, poster_path: poster, vote_average: rate } = movie;

  return (
    <div className={style.movieListItem}>
      <div className={style.rate}>
        <span className={style.rateSpan}>{rate}</span>
      </div>
      <NavLink
        to={{ pathname: `/movies/${id}`, state: { from: location } }}
        className={style.link}
      >
        <img
          src={poster && `http://image.tmdb.org/t/p/w200/${poster}`}
          alt={name || title}
          className={style.img}
        />
        <p>{name || title}</p>
      </NavLink>
    </div>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
  }),

  location: PropTypes.object,
};

export default withRouter(MoviesListItem);
