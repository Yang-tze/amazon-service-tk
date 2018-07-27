import React from 'react';
import ItemReviews from './ItemReviews.jsx';
import styles from '../../style/productInfoComponents/ItemOverview.css';

const ItemOverview = (props) => {
  const { reviewInfo } = props;
  const { title } = props;
  return (
    <div className={styles.overview}>
      <div className="overview-brand">
        <a href="">
          {title.brand}
        </a>
      </div>
      <div className="overview-heading">
        <h3>
          {`${title.brand} ${title.productTier} ${title.name}`}
        </h3>
      </div>
      <ItemReviews reviewInfo={reviewInfo} />
    </div>
  );
};

export default ItemOverview;
