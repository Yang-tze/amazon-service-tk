import React from 'react';
import styles from '../../style/productInfoComponents/ItemColors.css';

const ListItemOne = (props) => {
  const { tier, thumbnail, handlers } = props;
  const { onMouseEnter, onMouseLeave, onSelect } = handlers;
  console.log(tier);
  return (
    <li>
      <div
        onMouseEnter={() => onMouseEnter(tier)}
        onMouseLeave={onMouseLeave}
        onClick={onSelect}
        data-id={null}
      >
        <img src={thumbnail} alt={tier} />
      </div>
    </li>
  );
};

const ListItems = (props) => {
  const { object, handlers } = props;
  const { onMouseEnter, onMouseLeave, onSelect } = handlers;
  return (
    <li key={object.id}>
      <div
        onMouseEnter={() => onMouseEnter(object.productTier)}
        onMouseLeave={onMouseLeave}
        onClick={onSelect}
      >
        <img src={object.thumbnail} alt={object.thumbnail} />
      </div>
    </li>
  );
};

const ItemColors = (props) => {
  const { tier, related, handlers } = props;
  const { thumbnail } = props;
  const { onMouseEnter, onMouseLeave, onSelect } = handlers;

  return (
    <div>
      <div>
        <h4 className={styles.colorName}>
Tier:&nbsp;
        </h4>
        <span>
          {tier}
        </span>
      </div>
      <ul className={styles.list}>
        {related.length > 0 ? (
          <ListItemOne handlers={handlers} thumbnail={thumbnail} tier={tier} />
        ) : (
          <span />
        )}
        {related.map((el, idx) => (
          <ListItems handlers={handlers} object={el} key={`item${idx + 1}`} />
        ))}
      </ul>
    </div>
  );
};

export default ItemColors;
