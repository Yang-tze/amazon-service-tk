const faker = require('faker');

const getRandomNumberWeightedTowardMax = (max) => {
  if (Math.random() < 0.1) {
    return Math.ceil(Math.random() * 0.9 * max);
  }
  return 0.9 * max + Math.ceil(Math.random() * 0.1 * max);
};

const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const generateName = (index, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ltrs[index % 10];
    index = Math.floor(index / 10);
  }
  return result;
};

const generateWeightedId = (context, events, done) => {
  context.vars.id = getRandomNumberWeightedTowardMax(10000000);
  return done();
};

const generateWeightedName = (context, events, done) => {
  const id = getRandomNumberWeightedTowardMax(10000000);
  context.vars.name = generateName(id, 7);
  return done();
};

const generateProductInfo = (context, events, done) => {
  context.vars.id = getRandomNumberWeightedTowardMax(10000000);
  context.vars.brand = 'brand';
  context.vars.is_prime = 1;
  context.vars.num_questions = 50;
  context.vars.product_name = generateName(context.vars.id, 4);
  context.vars.product_price = 0.99;
  context.vars.product_tier = 'first';
  context.vars.review_totals = [5, 5, 5, 5, 5];
  context.vars.seller_name = faker.name.firstName();
  context.vars.stock_count = 1;
  context.vars.thumbnail_url = 'url';
  return done();
};

module.exports = {
  generateWeightedId,
  generateWeightedName,
  generateProductInfo,
};
