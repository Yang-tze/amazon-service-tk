const cassandra = require('cassandra-driver');

const options = {
  contactPoints: ['127.0.0.1'] || [process.env.CASSANDRA_HOST],
  keyspace: 'product_db',
};

const client = new cassandra.Client(options);
client.connect((err) => {
  if (err) console.error(err);
});

module.exports = client;
