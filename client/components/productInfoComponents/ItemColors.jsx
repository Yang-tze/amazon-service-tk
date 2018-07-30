import React from 'react';
import styles from '../../style/productInfoComponents/ItemColors.css';

const ItemColors = (props) => {
  const { tier } = props;
  const { related } = props;
  return (
    <ul>
      { related.length > 0 ? <li className={styles.colors}><img src={`https://s3-us-west-1.amazonaws.com/viamis/${tier}.jpg`} alt={tier} /></li> : <span></span> }
      { related.map(el => <li className={styles.colors}><img src={`https://s3-us-west-1.amazonaws.com/viamis/${el.thumbnail}`} alt={el.thumbnail} key={el.id} /></li>) }
    </ul>
  );
};

export default ItemColors;
