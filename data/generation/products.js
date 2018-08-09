const faker = require('faker');
const fs = require('fs');

const { tab, randomInt, generateName } = require('./utils.js');

const thumbnailCount = 1000;
const thumbnailEndpoint = 'https://s3.amazonaws.com/sdc-yangtze-details';

const generatePrice = () => randomInt(10, 400) - 0.01;

const generateThumbnail = id => `${thumbnailEndpoint}${id % thumbnailCount}.png`;

const generateProduct = (id) => {
  const productId = tab(`${id}`);
  const name = tab(generateName(id - 1, 7));
  const brand = tab(faker.name.lastName());
  const price = tab(generatePrice());
  const tier = tab(faker.company.catchPhraseAdjective());
  const prime = tab(faker.random.boolean());
  const stock = tab(randomInt(10, 200));
  const questions = tab(randomInt(3, 50));
  const seller = tab(faker.name.firstName());
  const thumbnail = generateThumbnail();
  return `${productId
    + name
    + brand
    + price
    + tier
    + prime
    + stock
    + questions
    + seller
    + thumbnail}\n`;
};

const writeBatch = (start = 1, end, batchId = 1) => {
  // const startTime = new Date();

  const stream = fs.createWriteStream(`${__dirname}/sampleData/products_${batchId}.tsv`);
  for (let i = start; i < end; i++) {
    stream.write(`${generateProduct(i)}`);
  }
  stream.end();

  // console.log(new Date() - startTime);
};

const writeProducts = (productCount, batchSize = productCount / 10) => {
  for (let i = 1; i < productCount; i += batchSize) {
    const start = i;
    const end = i + batchSize;
    const batchId = Math.floor(i / batchSize);
    writeBatch(start, end, batchId);
  }
};

module.exports = writeProducts;
