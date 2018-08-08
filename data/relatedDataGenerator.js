const zlib = require('zlib');
const fs = require('fs');

const { randomInt } = require('./helpers.js');

const startTime = new Date();

const productCount = 50;
const relatedHeadings = 'id\tproduct_id\trelated_id\n';

let indexId = 1;

const generateRelated = (productId) => {
  let lines = '';
  const relatedCount = randomInt(0, 9);
  const intervalSize = Math.floor(productCount / relatedCount);
  for (let i = 0; i < relatedCount; i++) {
    // console.log(indexId);
    const start = intervalSize * i + 1;
    const end = intervalSize * (i + 1) + 1;
    const relatedId = randomInt(start, end);
    console.log(`${indexId}\t${productId}\t${relatedId}\n`);
    lines += `${indexId++}\t${productId}\t${relatedId}\n`;
  }
  return lines;
}

const writeBatch = (start = 1, end, batchId = 1) => {
  const stream = fs.createWriteStream(`${__dirname}/sampleData/related_${batchId}.tsv`);
  // const stream = zlib.createGzip();
  // stream.pipe(out);
  stream.write(relatedHeadings);
  for (let i = start; i < end; i++) {
    // generateRelated(i);
    stream.write(`${generateRelated(i)}`);
  }
};

const writeRelated = (productCount, batchSize = productCount / 10) => {
  for (let i = 1; i < productCount; i += batchSize) {
    writeBatch(i, i + batchSize, Math.floor(i / batchSize));
  }
};

writeRelated(productCount);
