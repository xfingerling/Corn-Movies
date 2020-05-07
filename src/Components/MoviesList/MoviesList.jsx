import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./MoviesList.module.css";

import MoviesListItem from "./MoviesListItem/MoviesListItem";

class MoviesList extends Component {
  static defaultProps = {
    title: "",
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, movies } = this.props;

    const listItem = movies.map((movie) => {
      return <MoviesListItem key={movie.id} movie={movie} />;
    });

    return (
      <>
        {!!title && <h1>{title}</h1>}
        <ul className={style.movieList}>{listItem}</ul>
      </>
    );
  }
}

MoviesList.propTypes = {
  title: PropTypes.string,
};

export default MoviesList;
