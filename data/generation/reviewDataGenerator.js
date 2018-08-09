const fs = require('fs');

const { tab, randomInt } = require('./helpers.js');

const magnitude = 6;

const generateReviews = (id, rawScore) => {
  const reviews = [null, null, null, null, null].map((item, index) => {
    const weight = Math.abs(index / 5 - rawScore);
    return randomInt(0, weight * 1000);
  });
  return `${tab(id)}${reviews.join('\t')}\n`;
};

const writeBatch = (start = 1, end, batchId = 1) => {
  // const startTime = new Date();

  const stream = fs.createWriteStream(`${__dirname}/sampleData/reviews_${batchId}.tsv`);
  for (let i = start; i < end; i++) {
    stream.write(`${generateReviews(i, Math.random())}`);
  }
  stream.end();

  // console.log(new Date() - startTime);
};

const writeReviews = (productCount, batchSize = productCount / 10) => {
  for (let i = 1; i < productCount; i += batchSize) {
    const start = i;
    const end = i + batchSize;
    const batchId = Math.floor(i / batchSize);
    writeBatch(start, end, batchId);
  }
};

writeReviews(10 ** magnitude);
