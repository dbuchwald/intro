const main = require('./main.js');

test('getGreeting function should return valid greeting', () => {
  const greeting = main.getGreeting();

  expect(greeting).toBe('Hello World!');
});
