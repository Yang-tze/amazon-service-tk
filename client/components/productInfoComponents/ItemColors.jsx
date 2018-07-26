import React from 'react';

const ItemColors = (props) => {
  const { tier } = props;
  const { related } = props;
  return (
    <div className="colors">
      { related.length > 0 ? <img src={`${tier}.jpg`} alt="product" /> : <span></span> }
      { related.map(el => <img src={el.thumbnail} alt="related product" key={el.id} />) }
    </div>
  );
};

export default ItemColors;
