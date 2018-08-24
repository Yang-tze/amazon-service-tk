const request = require('request');

const tests = [
  {
    id: '45d3df6a5a0006e0ab0a42a5629bbcf5',
    key: '144ac5fb2dde0c377ba7b9236a41c771',
  },
  {
    id: 'fa8ff8e2e10f7f75346e0c6467cb36c1',
    key: '45d751d99bb93a7b3396841cd72866c1',
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
      console.log(`startTest error for test ${index}:`, err);
    } else {
      console.log(`started test ${index} at ${new Date()}`);
      setTimeout(() => stopTest(index), 60000);
    }
  });
};

const stopTest = (index) => {
  request.put(stopOps[index], (err, res) => {
    if (err) {
      console.log(`stopTest error for test ${index}:`, err);
    } else {
      console.log(`stopped test${index} at ${new Date()}`);
      setTimeout(() => startTest(index), 3000);
    }
  });
};

tests.forEach((test, index) => startTest(index));
