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
    this.get();
  }

  onClick(e) {
    e.preventDefault();
    const { sizingModalVisibility } = this.state;
    this.setState({
      sizingModalVisibility: !sizingModalVisibility,
    });
  }

  onProductTierClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    this.setState({
      productId: id,
    });
    this.get();
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
      .then((obj) => {
        const { data, related } = obj;
        this.setState({
          product: data,
          relatedProducts: related,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const {
      product, relatedProducts, sizingModalVisibility, reviewsModalVisibility,
    } = this.state;

    const productTier = product.product_tier;
    const isPrime = product.is_prime;
    const productOptions = product.product_options;
    const aboutProduct = product.about_product;

    const { brand, name } = product;
    const { reviews, questions, price } = product;
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
