import ReactDOM from 'react-dom';
import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
// import ShippingInfo from './components/ShippingInfo.jsx';

window.ProductInfo = ProductInfo;

ReactDOM.render(<ProductInfo />, document.getElementById('product-info'));
