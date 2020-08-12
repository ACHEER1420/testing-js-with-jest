const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('Cheer', 30);
  expect(text).toBe('Cheer (30 years old)');
});