import React from 'react';
import styles from '../../style/productInfoComponents/ItemSizing.css';

const ItemSizing = (props) => {
  const { sizing, onClick } = props;
  return (
    <div>
      <h4 className={styles.title}>
        Size:
      </h4>
      <div className={styles.container}>
        <span className={styles.label}>Select</span>
        <select className={styles.select}>
          <option className={styles.option} value="" disabled selected />
          {sizing.size.map(el => <option className={styles.option} key={el}>{el}</option>)}
        </select>
        <a className={styles.link} href="" onClick={onClick}>
          Size Chart
        </a>
      </div>
    </div>
  );
};

export default ItemSizing;
