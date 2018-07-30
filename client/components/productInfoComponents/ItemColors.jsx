import React from 'react';
import styles from '../../style/productInfoComponents/ItemColors.css';

const ItemColors = (props) => {
  const { tier } = props;
  const { related } = props;
  return (
    <ul>
      { related.length > 0 ? <li className={styles.colors}><img src={`${tier}.jpg`} alt="product" /></li> : <span></span> }
      { related.map(el => <li className={styles.colors}><img src={el.thumbnail} alt="related product" key={el.id} /></li>) }
    </ul>
  );
};

export default ItemColors;
