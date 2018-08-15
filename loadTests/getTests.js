const siege = require('siege');
const { generateWeightedId, generateWeightedName } = require('./testData.js');

let sieger = siege()
  .concurrent(40)
  .on(3003);

// GET product by id
for (let i = 0; i < 100000; i++) {
  sieger = sieger.for(1).times.get(`/products/${generateWeightedId()}`);
}

// GET product by name
// for (let i = 0; i < 100000; i++) {
//   sieger = sieger.for(1).times.get(`/products/name/${generateWeightedName()}`);
// }

sieger.attack();
