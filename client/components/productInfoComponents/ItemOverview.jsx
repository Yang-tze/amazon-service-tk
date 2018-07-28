import React from 'react';
import ItemReviews from './ItemReviews.jsx';
import styles from '../../style/productInfoComponents/ItemOverview.css';

const ItemOverview = (props) => {
  const { reviewInfo } = props;
  const { title } = props;
  return (
    <div className={styles.overview}>
      <div>
        <a href="" className={styles.brand}>
          {title.brand}
        </a>
      </div>
      <div className={styles.heading}>
        <span>
          {`${title.brand} ${title.productTier} ${title.name}`}
        </span>
      </div>
      <ItemReviews reviewInfo={reviewInfo} />
      <div className={styles.divider} />
    </div>
  );
};

export default ItemOverview;
