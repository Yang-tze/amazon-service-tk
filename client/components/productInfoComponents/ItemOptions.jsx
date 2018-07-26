import React from 'react';
import ItemSizing from './ItemSizing.jsx';
import ItemColors from './ItemColors.jsx';

const ItemOptions = (props) => {
  const { options } = props;
  const { related } = props;
  return (
    <div>
      <div>
        <span>
          Fit:
        </span>
        <a href="">
          As expected (81%)
        </a>
      </div>
      <ItemSizing itemOptions={options} />
      <ItemColors related={related} />
    </div>
  );
};

export default ItemOptions;
