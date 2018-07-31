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
      productId: window.location.pathname,
      sizingModalVisibility: false,
      reviewsModalVisibility: false,
      product: productData.data,
      relatedProducts: productData.related,
      currentTier: '',
    };
    this.get();
  }

  onClickSizeChart(e) {
    e.preventDefault();
    const { sizingModalVisibility } = this.state;
    this.setState({
      sizingModalVisibility: !sizingModalVisibility,
    });
  }

  onMouseEnterStars(e) {
    e.preventDefault();
    const { state } = this;
    state.reviewsModalVisibility = true;
    setTimeout(this.delayedVis.bind(this), 400);
  }

  onMouseLeaveStars(e) {
    e.preventDefault();
    const { state } = this;
    state.reviewsModalVisibility = false;
    this.delayedVis.call(this);
  }

  onProductTierClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    this.setState({
      productId: id,
    });
    this.get();
  }

  onMouseEnterImageOption(e) {
    e.preventDefault();
    const tier = e.target.getAttribute('data-tier');
    this.setState({
      currentTier: tier,
    });
  }

  onMouseLeaveImageOption(e) {
    e.preventDefault();
    const { product } = this.state;
    this.setState({
      currentTier: product.product_tier,
    });
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
    fetch(`http://127.0.0.1:3003/products${productId}`)
      .then(response => response.json())
      .then((obj) => {
        const { data, related } = obj;
        this.setState({
          product: data,
          relatedProducts: related,
          currentTier: data.product_tier,
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
    const { onMouseEnterStars, onMouseLeaveStars, onClickSizeChart } = this;
    const { onMouseEnterImageOption, onMouseLeaveImageOption, onProductTierClick } = this;

    return (
      <div className={styles.info}>
        <ItemOverview
          title={{ brand, name, productTier }}
          reviewInfo={{ reviews, questions }}
          onMouseEnter={onMouseEnterStars.bind(this)}
          onMouseLeave={onMouseLeaveStars.bind(this)} />
        <ItemPricing
          price={price}
          isPrime={isPrime}
          reviews={reviews}
          onMouseLeave={onMouseLeaveStars.bind(this)}
          visibility={reviewsModalVisibility} />
        <ItemOptions
          options={productOptions}
          tier={productTier}
          related={relatedProducts}
          onClick={onClickSizeChart.bind(this)}
          visibility={sizingModalVisibility}
          onMouseEnter={onMouseEnterImageOption.bind(this)}
          onMouseLeave={onMouseLeaveImageOption.bind(this)}
          onSelect={onProductTierClick.bind(this)} />
        <ItemDescription description={aboutProduct} />
        <SizingTable visibility={sizingModalVisibility} onClick={onClickSizeChart.bind(this)} />
      </div>
    );
  }
}

export default ProductInfo;
