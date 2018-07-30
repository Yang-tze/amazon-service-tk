import React from 'react';
import styles from '../../style/productInfoComponents/ItemPricing.css';
import ReviewsModal from './ReviewsModal';

const ItemPricing = (props) => {
  const { onMouseHover, onMouseLeave } = props;
  const {
    price,
    isPrime,
    reviews,
    visibility,
  } = props;

  return (
    <div className={styles.container}>
      <ReviewsModal
        reviews={reviews}
        onMouseHover={onMouseHover}
        onMouseLeave={onMouseLeave}
        visibility={visibility} />
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
