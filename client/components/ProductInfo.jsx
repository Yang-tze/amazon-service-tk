import React from 'react';
import productData from './mockData.js';
import ItemOptions from './ItemOptions.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      product: productData.data[0],
      relatedProducts: [],
    };
  }

  get() {
    fetch('http://127.0.0.1:3003/products/1')
      .then(response => response.json())
      .then(obj => console.log(obj))
      .catch(err => console.error(err));
  }

  render() {
    const { brand, name, productTier } = this.state.product;
    const { reviews, stars, questions } = this.state.product;
    const { price, isPrime } = this.state.product;

    return (
      <div>
        <div className="product-info">
          <a href="">
            { brand }
          </a>
          <h2>
            { `${brand} ${productTier} ${name}` }
          </h2>
        </div>
        <div>
          <div>
            {stars}
            stars
          </div>
          <div>
            {reviews}
            reviews
          </div>
          <div>
            {questions}
            questions
          </div>
        </div>
        <div>
          <div>
            $
            { price.sale }
          </div>
          <div>
            { isPrime ? 'Prime Shipping' : 'Standard Shipping' }
          </div>
        </div>
        <ItemOptions />
      </div>
    );
  }
}

export default ProductInfo;
