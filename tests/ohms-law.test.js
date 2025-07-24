const { calculateCurrent } = require('../public/assets/js/ohms-law');

test('calculates current correctly', () => {
  expect(calculateCurrent(10, 5)).toBe(2);
  expect(calculateCurrent(0, 10)).toBe(0);
  expect(calculateCurrent(10, 0)).toBe(0); // Avoid division by zero
});
