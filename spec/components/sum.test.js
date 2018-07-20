import React from 'react';
import { shallow, mount, render } from 'enzyme';

import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
