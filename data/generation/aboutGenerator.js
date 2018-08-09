const fs = require('fs');

const { randomInt, sentences } = require('./helpers.js');

const magnitude = 5;

let indexId = 1;

const generateAbout = (productId, productCount) => {
  let lines = '';
  for (let i = 0; i < 3; i++) {
    const sentence = sentences[randomInt(0, sentences.length)].trim();
    lines += `${indexId++}\t${productId}\t${sentence}\n`;
  }
  return lines;
};

const writeBatch = (start = 1, end, batchId = 1, productCount) => {
  // const startTime = new Date();

  const stream = fs.createWriteStream(`${__dirname}/sampleData/about_${batchId}.tsv`);
  for (let i = start; i < end; i++) {
    stream.write(`${generateAbout(i, productCount)}`);
  }
  stream.end();

  // console.log(new Date() - startTime);
};

const writeAbout = (productCount, batchSize = productCount / 10) => {
  for (let i = 1; i < productCount; i += batchSize) {
    const start = i;
    const end = i + batchSize;
    const batchId = Math.floor(i / batchSize);
    writeBatch(start, end, batchId, productCount);
  }
};

writeAbout(10 ** magnitude);
