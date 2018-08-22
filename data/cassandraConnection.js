const cassandra = require('cassandra-driver');

const options = {
  contactPoints: process.env.CASSANDRA_HOSTS
    ? process.env.CASSANDRA_HOSTS.split('|')
    : ['127.0.0.1'],
  keyspace: 'product_db',
};

const client = new cassandra.Client(options);
client.connect((err) => {
  if (err) console.error(err);
});

module.exports = client;
