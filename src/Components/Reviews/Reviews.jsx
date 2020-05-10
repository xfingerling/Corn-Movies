import React from "react";
import PropTypes from "prop-types";

import style from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const listItem = reviews.map(({ id, author, content }) => {
    const sliceContent =
      content.length > 500 ? content.slice(0, 500) + "…" : content;

    return (
      <li key={id} className={style.listItem}>
        <p className={style.authorText}>
          Written by <span className={style.author}>{author}</span>
        </p>
        <p className={style.content}>{sliceContent}</p>
      </li>
    );
  });

  return (
    <div>
      {reviews.length ? (
        <ul className={style.list}>{listItem}</ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

export default Reviews;
