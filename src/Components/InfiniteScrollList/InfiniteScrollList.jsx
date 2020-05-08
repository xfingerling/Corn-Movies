import React from "react";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";
import MyLoader from "../Loader/Loader";

import style from "../MoviesList/MoviesList.module.css";

import MoviesListItem from "../MoviesList/MoviesListItem/MoviesListItem";

const InfiniteScrollList = ({ movies, title, fetchData }) => {
  const listItem = movies.map((movie) => (
    <MoviesListItem key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      <InfiniteScroll
        dataLength={movies}
        next={fetchData}
        hasMore={true}
        loader={<MyLoader />}
        endMessage={"That's all"}
        style={{ overflow: "visible" }}
        className={style.movieList}
      >
        {listItem}
      </InfiniteScroll>
    </div>
  );
};

InfiniteScrollList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  fetchData: PropTypes.func,
};

export default InfiniteScrollList;
