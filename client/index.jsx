import ReactDOM from 'react-dom';
import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ShippingInfo from './ShippingInfo.jsx';

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));
ReactDOM.render(<ShippingInfo />, document.getElementById('shipping-info'));
