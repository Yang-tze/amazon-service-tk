const fs = require('fs');
const path = require('path');

const { generateWeightedId } = require('./testData.js');

const productIds = [];
for (let i = 0; i < 300000; i++) {
  productIds.push([generateWeightedId()]);
}
const data = { keys: ['productId'], values: productIds };

fs.writeFile(
  path.resolve(__dirname, '../public/loaderIoPayload.json'),
  JSON.stringify(data),
  'utf8',
  err => console.log(err || 'success!'),
);
