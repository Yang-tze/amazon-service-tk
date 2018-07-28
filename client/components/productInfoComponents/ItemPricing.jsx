import React from 'react';
import styles from '../../style/productInfoComponents/ItemPricing.css';

const ItemPricing = (props) => {
  const { price } = props;
  const { isPrime } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className={styles.leftColumn}>
              <span>
                Price:
              </span>
            </td>
            <td>
              <span className={styles.price}>
                {`$${price.sale}`}
              </span>
              <span className={styles.prime}>
                { isPrime ? 'Prime' : '' }
              </span>
              <div>
                <a href="" className={styles.returns}>
                  Free Returns on some sizes and colors
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemPricing;
