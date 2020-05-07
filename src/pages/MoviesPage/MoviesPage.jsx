import React, { Component } from "react";

import queryString from "query-string";

import { fetchMovieByKeyword } from "../../api/TheMoviedbAPI";

import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesList from "../../Components/MoviesList/MoviesList";

class MoviesPage extends Component {
  state = { movies: [], query: "" };

  handleQueryChange = (e) => {
    e.preventDefault();

    const formInput = e.target.query;

    this.props.history.push({
      ...this.props.location,
      search: `query=${formInput.value}`,
    });

    formInput.value = "";
  };

  componentDidMount() {
    const query = queryString.parse(this.props.location.search).query;

    if (query) {
      fetchMovieByKeyword(query).then(({ results }) =>
        this.setState({ movies: results })
      );
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.location.search;
    const nextQuery = this.props.location.search;

    if (prevQuery !== nextQuery) {
      const query = queryString.parse(this.props.location.search).query;

      if (query) {
        fetchMovieByKeyword(query).then(({ results }) =>
          this.setState({ movies: results })
        );
      }
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleQueryChange} />
        {!!movies.length && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default MoviesPage;
