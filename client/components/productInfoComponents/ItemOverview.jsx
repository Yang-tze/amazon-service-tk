import React from 'react';
import ItemReviews from './ItemReviews.jsx';

const ItemOverview = (props) => {
  const { reviews } = props;
  const { title } = props;
  return (
    <div>
      <div>
        <a href="">{title.brand}</a>
      </div>
      <h3>
        <span>{title.brand} </span>
        <span>{title.productTier} </span>
        <span>{title.name}</span>
      </h3>
      <ItemReviews reviews={reviews} />
    </div>
  );
};

export default ItemOverview;
