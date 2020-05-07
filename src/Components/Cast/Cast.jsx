import React from "react";
import PropTypes from "prop-types";

const Cast = ({ cast }) => {
  const castItem = cast.map(({ id, name, character, profile_path }) => {
    return (
      <li key={id}>
        {profile_path && (
          <img
            src={`http://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
          />
        )}
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <ul>{castItem}</ul>;
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
