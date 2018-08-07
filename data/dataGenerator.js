const faker = require('faker');
const fs = require('fs');

const raw = require('./rawData.js');

const nameRoot = 'name';
const productCount = 100;
const productHeadings = 'id\tname\tbrand\tproduct_tier\tproduct_options\tprice\tabout_product\tis_prime\tstock_count\treviews\tquestions\tseller\tthumbnail';

const imageCount = 3;
const imageEndpoint = 'https://s3.amazonaws.com/sdc-yangtze-details';

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const randomNum = (min, max) => min + Math.random() * (max - min);

const generateOptions = () => JSON.stringify({ color: raw.color, size: raw.size });

const generatePrice = () => {
  const msrp = randomInt(10, 400) - 0.01;
  const list = Math.floor(randomNum(0.8, 0.9) * msrp) - 0.01;
  const sale = Math.floor(randomNum(0.8, 0.9) * list) - 0.01;
  return JSON.stringify({ msrp, list, sale });
};

const generateAbout = () => {
  const about = [
    raw.sentences[randomInt(0, raw.sentences.length)],
    raw.sentences[randomInt(0, raw.sentences.length)],
    raw.sentences[randomInt(0, raw.sentences.length)],
  ];
  return JSON.stringify(about);
};

const generateReviews = (rawScore) => {
  const reviews = [null, null, null, null, null].map((item, index) => {
    const weight = Math.abs(index / 5 - rawScore);
    randomInt(0, 1000 * weight);
  });
  return JSON.stringify(reviews);
};

const writeProducts = (productCount, stream) => {
  let productList = productHeadings;
  for (let i = 1; i <= productCount; i++) {
    productList += `${generateProduct(i)}\n`;
  }
  return productList;
};

const generateProduct = (id) => {
  const name = nameRoot + id;
  const brand = faker.company.companyName();
  const options = generateOptions();
  const price = generatePrice();
  const about = generateAbout();
  const tier = faker.company.catchPhraseAdjective();
  const prime = faker.random.boolean();
  const stock = randomInt(10, 200);
  const reviews = generateReviews(Math.random());
  const questions = randomInt(3, 50);
  const seller = faker.name.firstName();
  const thumbnail = `${imageEndpoint}${id % imageCount}.png`;
  return [
    id,
    name,
    brand,
    options,
    price,
    about,
    tier,
    prime,
    stock,
    reviews,
    questions,
    seller,
    thumbnail,
  ].join('\t');
};

const handleResponse = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success!');
  }
};

fs.writeFile(`${__dirname}/products.tsv`, writeProducts(productCount), 'utf8', handleResponse);

// const stream = fs.createWriteStream('./data/products.tsv', {flags:'a'});
// console.log(new Date().toISOString());
// [...Array(10000)].forEach( function (item,index) {
//     stream.write(index + "\n");
// });
// stream.end();
