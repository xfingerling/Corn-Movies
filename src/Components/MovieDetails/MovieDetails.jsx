import React from "react";
import PropTypes from "prop-types";

import style from "./MovieDetails.module.css";

const MovieDetails = ({ poster, title, overview, genres, voteAverage }) => {
  const genresItem = genres.map(({ id, name }) => {
    return (
      <li key={id} className={style.listItem}>
        {name}
      </li>
    );
  });

  return (
    <div className={style.detailsWrap}>
      {poster && (
        <img src={`http://image.tmdb.org/t/p/w300/${poster}`} alt={title} />
      )}
      <div className={style.wrap}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.scoreText}>
          User Score: <span className={style.score}>{voteAverage}</span>
        </p>
        <h4 className={style.caption}>Overview</h4>
        <p className={style.overview}>{overview}</p>
        <h4 className={style.caption}>Genres</h4>
        <ul className={style.list}>{genresItem}</ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
  ),
  voteAverage: PropTypes.number,
};

export default MovieDetails;
