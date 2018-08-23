const request = require('request');

const tests = [
  {
    id: '45d3df6a5a0006e0ab0a42a5629bbcf5',
    key: '5281ea463c61db90880da22f631e2f0e',
  },
  {
    id: 'fa8ff8e2e10f7f75346e0c6467cb36c1',
    key: '6b0f90b6fe2e84bec57e9541df63e578',
  },
];

const startOps = tests.map(test => ({
  url: `https://api.loader.io/v2/tests/${test.id}/run`,
  headers: {
    'loaderio-auth': test.key,
  },
}));

const stopOps = tests.map(test => ({
  url: `https://api.loader.io/v2/tests/${test.id}/stop`,
  headers: {
    'loaderio-auth': test.key,
  },
}));

const startTest = (index) => {
  request.put(startOps[index], (err, res) => {
    if (err) {
      console.log(`startTest error for test ${i}:`, err);
    } else {
      console.log('startTest success');
      setTimeout(() => stopTest(index), 60000);
    }
  });
};

const stopTest = (index) => {
  request.put(stopOps[index], (err, res) => {
    if (err) {
      console.log('stopTest error:', err);
    } else {
      console.log('stopTest success');
      setTimeout(() => startTest(index), 3000);
    }
  });
};

tests.forEach((test, index) => startTest(index));
