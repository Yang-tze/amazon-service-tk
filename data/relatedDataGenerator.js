const zlib = require('zlib');
const fs = require('fs');

const startTime = new Date();

const productCount = 10000000;
const relatedCount = productCount * 2;
const relatedHeadings = 'id\tproduct_id\trelated_id\n';

const randomProductId = () => {
  return Math.floor(Math.random() * productCount);
}

const generateRelated = (id) => {
  const product = randomProductId();
  const related = randomProductId();
  return `${id}\t${product}\t${related}`;
}

const writeRelated = (start = 0, end, batchId = 1) => {
  const out = fs.createWriteStream(`${__dirname}/sampleData/related_${batchId}.tsv`);
  const stream = zlib.createGzip();
  stream.pipe(out);
  stream.write(relatedHeadings);
  for (let i = start; i < end; i++) {
    generateRelated(i);
    stream.write(`${generateRelated(i)}\n`);
  }
};

generateRelateds(0, relatedCount);
