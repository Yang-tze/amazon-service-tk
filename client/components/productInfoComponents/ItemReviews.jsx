import React from 'react';
import styles from '../../style/productInfoComponents/ItemReviews.css';

const Star = (props) => {
  const { width } = props;

  return (
    <div className={styles.border}>
      <div className={styles.clip}>
        <div className={styles.fill}>
          <div className={styles.star} style={{ width: `${width * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

const ItemReviews = (props) => {
  const { reviewInfo, onMouseEnter, onMouseLeave } = props;
  const { reviews, questions } = reviewInfo;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  let stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;

  return (
    <div>
      <span className={styles.stars} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {[0, 1, 2, 3, 4].map((val) => {
          const width = stars >= 1 ? 1 : stars;
          stars -= 1;
          stars = stars < 0 ? 0 : stars;
          return <Star width={width} key={val} />;
        })}
        <div className={styles.dropdown} />
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
