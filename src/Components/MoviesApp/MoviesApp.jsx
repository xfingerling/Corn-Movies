import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import MyLoader from "../Loader/Loader";
import Navigation from "../../Components/Navigation/Navigation";

const HomePage = lazy(() =>
  import("../../Pages/HomePage/HomePage" /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import(
    "../../Pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    "../../Pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import(
    "../../Pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found-page" */
  ),
);

const MoviesApp = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default MoviesApp;
