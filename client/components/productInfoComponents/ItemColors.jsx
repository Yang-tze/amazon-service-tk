import React from 'react';
import styles from '../../style/productInfoComponents/ItemColors.css';

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
        { related.length > 0
          ? (
            <li>
              <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onSelect} data-id={null} data-tier={tier}>
                <img src={`https://s3-us-west-1.amazonaws.com/viamis/${thumbnail}`} alt={tier} />
              </div>
            </li>
          ) : <span /> }
        { related.map(el => (
          <li key={el.id}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onSelect} data-id={`/${el.id}/`} data-tier={el.product_tier}>
              <img src={`https://s3-us-west-1.amazonaws.com/viamis/${el.thumbnail}`} alt={el.thumbnail}/>
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default ItemColors;
