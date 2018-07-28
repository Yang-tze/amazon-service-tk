import React from 'react';
import styles from '../../style/productInfoComponents/ReviewsModal.css';

const ReviewTable = (props) => {
  const { reviews, reviewCount } = props;
  const percent = num => Math.round(num / reviewCount * 100);
  const meter = num => new Array(Math.round(num / 10)).fill('–').join('').padEnd(10, '.');

  return (
    <tbody className="reviews-modal-breakdown">
      {reviews.map((el, idx) => {
        return (
          <tr className={styles.row} key={`${idx + 1}-star`}>
            <td className={styles.leftColumn}>
              {`${idx + 1} star`}
            </td>
            <td className={styles.middleColumn}>
              <div className={styles.meter} value={meter(percent(el))}>
                <div className={styles.progress} style={{ width: `${percent(el)}%` }} />
              </div>
            </td>
            <td className={styles.rightColumn}>
              {percent(el)}
              %
            </td>
          </tr>
        );
      }).reverse()}
    </tbody>
  );
};

const ReviewsModal = (props) => {
  const { reviews } = props;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  const stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;

  return (
    <div className={styles.container}>
      <div className={styles.score}>
        {`${stars} out of 5 stars`}
      </div>
      <div>
        <table className={styles.table}>
          <ReviewTable reviews={reviews} reviewCount={reviewCount} />
        </table>
      </div>
      <div className={styles.reviewCount}>
        {`See all ${reviewCount} reviews`}
      </div>
    </div>
  );
};

export default ReviewsModal;
