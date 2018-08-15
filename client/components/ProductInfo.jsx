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

    // variable tracking whether mouse is over star meter or reviews modal
    this.reviewsModalVisibility = false;

    this.state = {
      productId: window.location.pathname,
      sizingModalVisibility: false,
      reviewsModalVisibility: false,
      product: productData.data,
      productTier: 'Elite',
    };
    this.get();
  }

  onClickSizeChart(e) {
    e.preventDefault();
    const { sizingModalVisibility } = this.state;
    if (e.target.getAttribute('data-target')) {
      this.setState({
        sizingModalVisibility: !sizingModalVisibility,
      });
    }
  }

  onMouseEnterStars(e) {
    e.preventDefault();
    this.reviewsModalVisibility = true;
    setTimeout(this.delayedVis.bind(this), 400);
  }

  onMouseLeaveStars(e) {
    e.preventDefault();
    this.reviewsModalVisibility = false;
    setTimeout(this.delayedVis.bind(this), 400);
  }

  onProductTierClick(e) {
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('data-id');
    if (id) {
      this.setState({
        productId: id,
      });
      window.location.assign(`http://${window.location.host}${id}`);
    }
  }

  onMouseEnterImageOption(e) {
    e.preventDefault();
    const tier = e.target.getAttribute('data-tier');
    this.setState({
      productTier: tier,
    });
  }

  onMouseLeaveImageOption(e) {
    e.preventDefault();
    const { product } = this.state;
    this.setState({
      productTier: product.product_tier,
    });
  }

  // after delay, check to see if mouse is hovering over revieiws modal or star meter
  delayedVis() {
    if (this.reviewsModalVisibility) {
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
    fetch(`/products${productId}`)
      .then(response => {
        debugger;
        return response.json();
      })
      .then((data) => {
        this.setState({
          product: data,
          productTier: data.product_tier
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { product, sizingModalVisibility, reviewsModalVisibility } = this.state;

    const currentTier = this.state.productTier;
    const { brand } = product;
    const aboutProduct = product.descriptions;
    const isPrime = product.is_prime;
    const name = product.product_name;
    const price = { sale: product.product_price };
    const questions = product.num_questions;
    const reviews = product.review_totals;
    const thumbnail = `https://${product.thumbnail_url}`;
    const relatedProducts = product.variants ? product.variants.map(variant => ({
      price: { sale: variant.price },
      productTier: variant.tier,
      thumbnail: `https://${variant.thumbnailUrl}`,
    })) : [];
    const productOptions = {
      color: ['green', 'white', 'blue', 'black', 'silver', 'purple'],
      size: ['S', 'M', 'L', 'XL'],
    };

    const { onMouseEnterStars, onMouseLeaveStars, onClickSizeChart } = this;
    const { onMouseEnterImageOption, onMouseLeaveImageOption, onProductTierClick } = this;

    return (
      <div className={styles.info}>
        <ItemOverview
          title={{ brand, name, currentTier }}
          reviewInfo={{ reviews, questions }}
          onMouseEnter={onMouseEnterStars.bind(this)}
          onMouseLeave={onMouseLeaveStars.bind(this)}
        />
        <ItemPricing
          price={price}
          isPrime={isPrime}
          reviews={reviews}
          onMouseEnter={onMouseEnterStars.bind(this)}
          onMouseLeave={onMouseLeaveStars.bind(this)}
          visibility={reviewsModalVisibility}
        />
        <ItemOptions
          options={productOptions}
          tier={currentTier}
          thumbnail={thumbnail}
          related={relatedProducts}
          onClick={onClickSizeChart.bind(this)}
          onMouseEnter={onMouseEnterImageOption.bind(this)}
          onMouseLeave={onMouseLeaveImageOption.bind(this)}
          onSelect={onProductTierClick.bind(this)}
        />
        <ItemDescription description={aboutProduct} />
        <SizingTable visibility={sizingModalVisibility} onClick={onClickSizeChart.bind(this)} />
      </div>
    );
  }
}

export default ProductInfo;
