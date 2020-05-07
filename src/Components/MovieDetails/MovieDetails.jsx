import React from "react";
import PropTypes from "prop-types";

const MovieDetails = ({ poster, title, overview, genres, voteAverage }) => {
  const genresItem = genres.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return (
    <div>
      {poster && (
        <img src={`http://image.tmdb.org/t/p/w300/${poster}`} alt={title} />
      )}
      <h2>{title}</h2>
      <p>User Score: {voteAverage}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>{genresItem}</ul>
    </div>
  );
};

MovieDetails.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
  voteAverage: PropTypes.number,
};

export default MovieDetails;
