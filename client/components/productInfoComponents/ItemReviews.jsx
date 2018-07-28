import React from 'react';
import styles from '../../style/productInfoComponents/ItemReviews.css';

const ItemReviews = (props) => {
  const { reviewInfo } = props;
  const { reviews, questions } = reviewInfo;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  const stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;

  return (
    <div className="reviews-module">
      <span className="reviews-star-meter">
        <div className={styles.stars}>
          {stars}
          &nbsp;
          <img src="" alt="stars" />
        </div>
      </span>
      <span>
        <a href="" className={styles.link}>
          {`${reviewCount} customer reviews`}
        </a>
      </span>
      <span>
        &nbsp;|&nbsp;
      </span>
      <span>
        <a href="" className={styles.link}>
          {`${questions} answered questions`}
        </a>
      </span>
    </div>
  );
};

export default ItemReviews;
