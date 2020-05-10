import React, { Component } from "react";
import { Route } from "react-router-dom";

import style from "./HomePage.module.css";

import {
  page,
  fetchTrendingDayMovies,
  fetchLatestPublishedMovies,
} from "../../api/TheMoviedbAPI";

import Navigation from "../../Components/Navigation/Navigation";
import MoviesList from "../../Components/MoviesList/MoviesList";

import InfiniteScrollList from "../../Components/InfiniteScrollList/InfiniteScrollList";

class HomePage extends Component {
  state = {
    trendingMovies: [],
    latestMovies: [],
  };

  componentDidMount() {
    fetchTrendingDayMovies().then(({ results }) =>
      this.setState({ trendingMovies: results }),
    );

    fetchLatestPublishedMovies(page).then(({ results }) =>
      this.setState({ latestMovies: results }),
    );
  }

  fetchMoreData = () => {
    page.popular += 1;

    fetchLatestPublishedMovies(page.popular).then(({ results }) =>
      this.setState({ latestMovies: [...this.state.latestMovies, ...results] }),
    );
  };

  render() {
    const { trendingMovies, latestMovies } = this.state;

    return (
      <>
        <Navigation />
        <div className={style.container}>
          <Route
            exact
            path="/"
            render={(props) => (
              <MoviesList
                {...props}
                title="Trending Tooday Movies"
                movies={trendingMovies}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <InfiniteScrollList
                {...props}
                title="Popular Movies"
                movies={latestMovies}
                fetchData={this.fetchMoreData}
              />
            )}
          />
        </div>
      </>
    );
  }
}

export default HomePage;
