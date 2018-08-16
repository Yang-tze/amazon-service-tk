const cassandra = require('cassandra-driver');

const options = {
  contactPoints: process.env.CASSANDRA_HOST ? [process.env.CASSANDRA_HOST] : ['127.0.0.1'],
  keyspace: 'product_db',
};

const client = new cassandra.Client(options);
client.connect((err) => {
  if (err) console.error(err);
});

module.exports = client;
