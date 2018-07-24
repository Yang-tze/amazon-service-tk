const fetch = require('node-fetch');

test('serving requests from port 3003', () => {
  fetch('http://127.0.0.1:3003/')
    .then(res => res.json())
    .then((response) => {
      expect(response.ok).toBe(true);
    })
    .catch(error => console.error('Fetch Error =\n', error));
});
