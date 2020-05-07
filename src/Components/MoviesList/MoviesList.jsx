import React, { Component } from "react";
import PropTypes from "prop-types";

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

    const listItem = movies.map(({ id, name, title }) => {
      return <MoviesListItem key={id} title={title} name={name} id={id} />;
    });

    return (
      <>
        {!!title && <h1>{title}</h1>}
        <ul>{listItem}</ul>
      </>
    );
  }
}

MoviesList.propTypes = {
  title: PropTypes.string,
};

export default MoviesList;
