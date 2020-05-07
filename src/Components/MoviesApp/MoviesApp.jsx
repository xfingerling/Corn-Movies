import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

const MoviesApp = () => {
  return (
    <div>
      <HomePage />

      <Switch>
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
};

export default MoviesApp;
