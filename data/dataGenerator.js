const faker = require('faker');
const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const raw = require('./rawData.js');

const startTime = new Date();

const nameRoot = 'hamazon';
const productCount = 1000000;
const productHeadings = 'id\tname\tbrand\tproduct_tier\tproduct_options\tprice\tabout_product\tis_prime\tstock_count\treviews\tquestions\tseller\tthumbnail';

const imageCount = 3;
const imageEndpoint = 'https://s3.amazonaws.com/sdc-yangtze-details';

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const randomNum = (min, max) => min + Math.random() * (max - min);

const tab = str => `${str}\t`;

const generateOptions = () => `{"size":${raw.size}}`;

const generatePrice = () => {
  const msrp = randomInt(10, 400) - 0.01;
  // const list = Math.floor(randomNum(0.8, 0.9) * msrp) - 0.01;
  // const sale = Math.floor(randomNum(0.8, 0.9) * list) - 0.01;
  return `{"msrp":${msrp}}`; // , "list": ${list}, "sale": ${sale} }`;
};

const generateAbout = () => {
  const about = `["${raw.sentences[randomInt(0, raw.sentences.length)].trim()}","${raw.sentences[randomInt(0, raw.sentences.length)].trim()}","${raw.sentences[randomInt(0, raw.sentences.length)].trim()}"]`;
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

const writeProducts = (productCount, stream) => {
  stream.write(productHeadings);
  for (let i = 1; i <= productCount; i++) {
    stream.write(`${generateProduct(i)}\n`);
    if (i % 100000 === 0) {
      console.log(i, new Date() - startTime);
    }
  }
  console.log(new Date() - startTime);
  stream.end();
};

const out = fs.createWriteStream(`${__dirname}/products.tsv`, { highWaterMark: Math.pow(2, 32) });

gzip.pipe(out);

writeProducts(productCount, out);
