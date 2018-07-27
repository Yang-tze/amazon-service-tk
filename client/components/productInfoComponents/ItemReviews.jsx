import React from 'react';

const ItemReviews = (props) => {
  const { reviewInfo } = props;
  const { reviews, questions } = reviewInfo;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  const stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;
  return (
    <div className="reviews-module">
      <span className="reviews-star-meter">
        <div className="reviews-star-wrapper">
          {stars}
          &nbsp;
          <img src="" alt="stars" />
        </div>
      </span>
      <span className="reviews-review-count">
        <a href="">
          {`${reviewCount} customer reviews`}
        </a>
      </span>
      <span>
        &nbsp;|&nbsp;
      </span>
      <span className="reviews-question-count">
        <a href="">
          {`${questions} answered questions`}
        </a>
      </span>
    </div>
  );
};

export default ItemReviews;
