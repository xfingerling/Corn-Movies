import React, { Component } from "react";
import { Route } from "react-router-dom";

import { fetchTrendingDayMovies } from "../../api/TheMoviedbAPI";

import Navigation from "../../Components/Navigation/Navigation";
import MoviesList from "../../Components/MoviesList/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrendingDayMovies().then(({ results }) =>
      this.setState({ movies: results })
    );
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        <Navigation />
        <Route
          exact
          path="/"
          render={(props) => (
            <MoviesList {...props} title="Trending Tooday" movies={movies} />
          )}
        />
      </>
    );
  }
}

export default HomePage;
