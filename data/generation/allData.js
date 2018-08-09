const writeProducts = require('./products.js');
const writeReviews = require('./reviews.js');
const writeAbout = require('./about.js');
const writeRelated = require('./related.js');

const productCount = 10000000;

const startTime = new Date();
writeAbout(productCount);
console.log(new Date() - startTime);
writeRelated(productCount);
console.log(new Date() - startTime);
writeProducts(productCount);
console.log(new Date() - startTime);
writeReviews(productCount);
console.log(new Date() - startTime);
