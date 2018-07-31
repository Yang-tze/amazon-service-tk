import React from 'react';
import styles from '../../style/productInfoComponents/ItemColors.css';

const ItemColors = (props) => {
  const { tier } = props;
  const { related } = props;
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
        { related.length > 0 ? <li><div><img src={`https://s3-us-west-1.amazonaws.com/viamis/${tier}.jpg`} alt={tier} /></div></li> : <span /> }
        { related.map(el => <li><div><img src={`https://s3-us-west-1.amazonaws.com/viamis/${el.thumbnail}`} alt={el.thumbnail} key={el.id} /></div></li>) }
      </ul>
    </div>
  );
};

export default ItemColors;
