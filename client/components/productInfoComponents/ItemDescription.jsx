import React from 'react';
import styles from '../../style/productInfoComponents/ItemDescription.css';

const ItemDescription = (props) => {
  const { description } = props;
  return (
    <ul className={styles.description}>
      {description.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
  );
};

export default ItemDescription;
