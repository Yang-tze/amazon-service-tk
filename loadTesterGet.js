const siege = require('siege');
const {
  generateWeightedId,
  generateWeightedName,
  generateProductInfo,
} = require('./loadTestData.js');

let sieger = siege().on(3003);

// GET product by id
for (let i = 0; i < 10000000; i++) {
  sieger = sieger.for(1).times.get(`/products/${generateWeightedId()}`);
}

// GET product by name
// for (let i = 0; i < 100000; i++) {
//   sieger = sieger.for(1).times.get(`/products/name/${generateWeightedName()}`);
// }

sieger.attack();
