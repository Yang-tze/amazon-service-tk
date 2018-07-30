import React from 'react';
import productData from './mockData';
import ItemOverview from './productInfoComponents/ItemOverview';
import ItemPricing from './productInfoComponents/ItemPricing';
import ItemOptions from './productInfoComponents/ItemOptions';
import ItemDescription from './productInfoComponents/ItemDescription';
import SizingTable from './productInfoComponents/SizingTable';
import styles from '../style/ProductInfo.css';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      sizingModalVisibility: false,
      reviewsModalVisibility: false,
      product: productData.data,
      relatedProducts: productData.related,
    };
  }

  onClick(e) {
    e.preventDefault();
    const { sizingModalVisibility } = this.state;
    this.setState({
      sizingModalVisibility: !sizingModalVisibility,
    });
  }

  onMouseEnter(e) {
    e.preventDefault();
    const { state } = this;
    state.reviewsModalVisibility = true;
    setTimeout(this.delayedVis.bind(this), 400);
  }

  onMouseLeave(e) {
    e.preventDefault();
    const { state } = this;
    state.reviewsModalVisibility = false;
    this.delayedVis.call(this);
  }

  delayedVis() {
    const { state } = this;
    if (state.reviewsModalVisibility) {
      this.setState({
        reviewsModalVisibility: true,
      });
    } else {
      this.setState({
        reviewsModalVisibility: false,
      });
    }
  }

  get() {
    const { productId } = this.state;
    fetch(`http://127.0.0.1:3003/products/${productId}`)
      .then(response => response.json())
      .then(obj => console.log(obj))
      .catch(err => console.error(err));
  }

  render() {
    const {
      product, relatedProducts, sizingModalVisibility, reviewsModalVisibility,
    } = this.state;
    const { brand, name, productTier } = product;
    const { reviews, questions } = product;
    const { price, isPrime } = product;
    const { productOptions } = product;
    const { aboutProduct } = product;
    const { onMouseEnter, onMouseLeave, onClick } = this;

    return (
      <div className={styles.info}>
        <ItemOverview
          title={{ brand, name, productTier }}
          reviewInfo={{ reviews, questions }}
          onMouseEnter={onMouseEnter.bind(this)}
          onMouseLeave={onMouseLeave.bind(this)} />
        <ItemPricing
          price={price}
          isPrime={isPrime}
          reviews={reviews}
          onMouseLeave={onMouseLeave.bind(this)}
          visibility={reviewsModalVisibility} />
        <ItemOptions
          options={productOptions}
          tier={productTier}
          related={relatedProducts}
          onClick={onClick.bind(this)}
          visibility={sizingModalVisibility} />
        <ItemDescription description={aboutProduct} />
        <SizingTable visibility={sizingModalVisibility} onClick={onClick.bind(this)} />
      </div>
    );
  }
}

export default ProductInfo;
