import React from 'react';

const ItemPricing = (props) => {
  const { price } = props;
  const { isPrime } = props;
  return (
    <div>
      <span>
        Price:
      </span>
      <span>
        {`$${price.sale}`}
      </span>
      <span>
        &
      </span>
      <a href="">
        Free Returns
      </a>
    </div>
  );
};

export default ItemPricing;
