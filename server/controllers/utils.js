const handleResponse = (err, results, res) => {
  if (err) console.error(err);
  res.statusCode = err ? 400 : 200;
  res.send(err || results);
};

module.exports = {
  handleResponse,
};
