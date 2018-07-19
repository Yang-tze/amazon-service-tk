import ReactDOM from 'react-dom';
import React from 'react';
import ProductInfo from './components/ProductInfo';
import ShippingInfo from './components/ShippingInfo';

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));
ReactDOM.render(<ShippingInfo />, document.getElementById('shipping-info'));
