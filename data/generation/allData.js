const writeProducts = require('./products.js');
const writeReviews = require('./reviews.js');
const writeAbout = require('./about.js');
const writeRelated = require('./related.js');

const productCount = 10000000;

writeProducts(productCount);
writeReviews(productCount);
writeAbout(productCount);
writeRelated(productCount);
