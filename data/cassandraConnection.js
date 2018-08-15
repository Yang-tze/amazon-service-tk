const cassandra = require('cassandra-driver');

const distance = cassandra.types.distance;

const options = {
  contactPoints: ['127.0.0.1'],
  keyspace: 'product_db',
};

const client = new cassandra.Client(options);
client.connect((err) => {
  if (err) console.error(err);
});

module.exports = client;
