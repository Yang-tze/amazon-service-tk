import React from 'react';
import Data from './mockData.js';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: Data,
    };
  }

  get() {
    fetch('http://127.0.0.1:3003/products/1')
      .then(response => response.json())
      .then(obj => console.log(obj))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
      Hello World
      </div>
    );
  }
}

export default ProductInfo;
