import React from 'react';
import ItemSizing from './ItemSizing.jsx';
import ItemColors from './ItemColors.jsx';

const ItemOptions = (props) => {
  const {
    options,
    related,
    tier,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onSelect,
    thumbnail,
  } = props;

  return (
    <div>
      <div>
        <span>
          Fit:&nbsp;
        </span>
        <a href="">
          As expected (81%)
        </a>
      </div>
      <ItemSizing sizing={options} onClick={onClick} />
      <ItemColors
        tier={tier}
        related={related}
        thumbnail={thumbnail}
        handlers={{ onMouseEnter, onMouseLeave, onSelect }} />
    </div>
  );
};

export default ItemOptions;
