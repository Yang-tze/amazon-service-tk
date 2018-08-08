const faker = require('faker');
const zlib = require('zlib');
const fs = require('fs');

const { randomInt, size, sentences } = require('./helpers.js');

const startTime = new Date();

const nameRoot = 'hamazon';
const productCount = 100000;
const productHeadings = 'id\tname\tbrand\tproduct_tier\tproduct_options\tprice\tabout_product\tis_prime\tstock_count\treviews\tquestions\tseller\tthumbnail\n';

const imageCount = 1000;
const imageEndpoint = 'https://s3.amazonaws.com/sdc-yangtze-details';

// const randomNum = (min, max) => min + Math.random() * (max - min);

const tab = str => `${str}\t`;

const generateOptions = () => `{"size":${size}}`;

const generatePrice = () => {
  const msrp = randomInt(10, 400) - 0.01;
  // const list = Math.floor(randomNum(0.8, 0.9) * msrp) - 0.01;
  // const sale = Math.floor(randomNum(0.8, 0.9) * list) - 0.01;
  return `{"msrp":${msrp}}`;
};

const generateAbout = () => {
  const about = `["${sentences[randomInt(0, sentences.length)].trim()}","${sentences[randomInt(0, sentences.length)].trim()}","${sentences[randomInt(0, sentences.length)].trim()}"]`;
  return about;
};

const generateReviews = (rawScore) => {
  const reviews = [null, null, null, null, null].map((item, index) => {
    const weight = Math.abs(index / 5 - rawScore);
    randomInt(0, 1000 * weight);
  });
  return `${reviews}`;
};

const generateProduct = (id) => {
  const productId = tab(`${id}`);
  const name = tab(nameRoot + id);
  const brand = tab(faker.name.lastName());
  const options = tab(generateOptions());
  const price = tab(generatePrice());
  const about = tab(generateAbout());
  const tier = tab(faker.company.catchPhraseAdjective());
  const prime = tab(faker.random.boolean());
  const stock = tab(randomInt(10, 200));
  const reviews = tab(generateReviews(Math.random()));
  const questions = tab(randomInt(3, 50));
  const seller = tab(faker.name.firstName());
  const thumbnail = tab(`${imageEndpoint}${id % imageCount}.png`);
  return (
    productId
    + name
    + brand
    + options
    + price
    + about
    + tier
    + prime
    + stock
    + reviews
    + questions
    + seller
    + thumbnail
  );
};

const writeBatch = (start, end, batchId = 1) => {
  const out = fs.createWriteStream(`${__dirname}/sampleData/products_${batchId}.tsv`);
  const stream = zlib.createGzip();
  stream.pipe(out);
  stream.write(productHeadings);
  for (let i = start; i < end; i++) {
    // generateProduct(i);
    stream.write(`${generateProduct(i)}\n`);
  }
  stream.end();
  console.log(new Date() - startTime);
};

const writeProducts = (productCount, batchSize) => {
  for (let i = 1; i < productCount; i += batchSize) {
    writeBatch(i, i + batchSize, Math.floor(i / batchSize));
  }
};

writeProducts(productCount, productCount / 10);
