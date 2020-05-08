import React from "react";

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

export default InfiniteScrollList;
