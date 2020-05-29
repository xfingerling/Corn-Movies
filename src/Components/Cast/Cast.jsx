import React from "react";
import PropTypes from "prop-types";

import style from "./Cast.module.css";

const Cast = ({ cast }) => {
  const castItem = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={style.listItem}>
      {profile_path && (
        <img
          src={`http://image.tmdb.org/t/p/w200/${profile_path}`}
          alt={name}
        />
      )}
      <p className={style.name}>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return <ul className={style.list}>{castItem}</ul>;
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};

export default Cast;
