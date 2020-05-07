import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { fetchDetailsMovieWithId } from "../../api/TheMoviedbAPI";

import GoBackBtn from "../../Components/GoBackBtn/GoBackBtn";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import AdditionalInformation from "../../Components/AdditionalInformation/AdditionalInformation";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Reviews/Reviews";

class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      path: PropTypes.string,
    }),
  };

  state = { movie: null, cast: null, reviews: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchDetailsMovieWithId(id).then((movie) => this.setState({ movie }));
    fetchDetailsMovieWithId(id, "credits").then(({ cast }) =>
      this.setState({ cast })
    );
    fetchDetailsMovieWithId(id, "reviews").then(({ results }) =>
      this.setState({ reviews: results })
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push("/");
  };

  render() {
    const { params, path } = this.props.match;
    const { movie, cast, reviews } = this.state;

    return (
      <div>
        <GoBackBtn onGoBack={this.handleGoBack} />
        {movie && (
          <MovieDetails
            title={movie.title}
            overview={movie.overview}
            genres={movie.genres}
            voteAverage={movie.vote_average}
            poster={movie.poster_path}
          />
        )}
        <AdditionalInformation id={params.id} />
        <Switch>
          {cast && (
            <Route
              path={`${path}/cast`}
              render={(props) => <Cast {...props} cast={cast} />}
            />
          )}
          {reviews && (
            <Route
              path={`${path}/reviews`}
              render={(props) => <Reviews {...props} reviews={reviews} />}
            />
          )}
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
