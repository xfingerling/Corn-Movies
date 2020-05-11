import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesApp = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default MoviesApp;
