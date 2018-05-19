const main = require('./main.js');

test('getGreeting function should return valid greeting', () => {
  const greeting = main.getGreeting();

  expect(greeting).toBe('Hello World!');
});

test('getNamedGreeting function should return valid greeting', () => {
  const greeting = main.getNamedGreeting('Dawid');

  expect(greeting).toBe('Hello, Dawid!');
});