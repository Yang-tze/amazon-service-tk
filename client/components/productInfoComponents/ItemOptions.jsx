import React from 'react';
import ItemSizing from './ItemSizing.jsx';
import ItemColors from './ItemColors.jsx';

const ItemOptions = (props) => {
  const {
    options,
    related,
    tier,
    onClick,
  } = props;

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
      <ItemSizing sizing={options} onClick={onClick} />
      <ItemColors tier={tier} related={related} />
    </div>
  );
};

export default ItemOptions;
