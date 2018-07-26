import React from 'react';

const ItemReviews = (props) => {
  const { reviewInfo } = props;
  const { reviews, questions } = reviewInfo;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  const stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;
  return (
    <div>
      <span>
        {stars}
        &nbsp;
      </span>
      <img src="" alt="stars" />
      <a href="">
        <span>
          {reviewCount}
          &nbsp;
        </span>
        <span>
          customer reviews
        </span>
      </a>
      <span>
        &nbsp;|&nbsp;
      </span>
      <a href="">
        <span>
          {questions}
          &nbsp;
        </span>
        <span>
          answered questions
        </span>
      </a>
    </div>
  );
};

export default ItemReviews;
