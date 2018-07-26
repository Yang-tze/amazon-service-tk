import React from 'react';

const ItemReviews = (props) => {
  const { reviewInfo } = props;
  const { reviews, stars, questions } = reviewInfo;
  return (
    <div>
      <span>Stars: {stars} </span>
      <span>Reviews: {reviews} </span>
      <span>Questions: {questions} </span>
    </div>
  );
};

export default ItemReviews;
