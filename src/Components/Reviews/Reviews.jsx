import React from "react";

const Reviews = ({ reviews }) => {
  const listItem = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p>{author}</p>
        <p>{content}</p>
      </li>
    );
  });

  console.log(reviews.length);
  return (
    <>
      {!!reviews.length ? (
        <ul>{listItem}</ul>
      ) : (
        <p>"We don`t have any reviews for this movie"</p>
      )}
    </>
  );
};

export default Reviews;
