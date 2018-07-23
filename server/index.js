const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/products/:id', (req, res) => {
  res.send();
});

app.listen(3003, () => console.log('Listening on port 3003'));
