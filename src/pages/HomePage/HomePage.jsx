import React, { Component } from "react";

import { fetchTrendingDayMovies } from "../../api/TheMoviedbAPI";

import MoviesList from "../../Components/MoviesList/MoviesList";

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    fetchTrendingDayMovies().then(({ results }) =>
      this.setState({ trendingMovies: results }),
    );
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <MoviesList title="Trending Tooday Movies" movies={trendingMovies} />
    );
  }
}

export default HomePage;
