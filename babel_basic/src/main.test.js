import { getGreeting, getNamedGreeting } from './main';

test('getGreeting function should return valid greeting', () => {
  const greeting = getGreeting();

  expect(greeting).toBe('Hello World!');
});

test('getNamedGreeting function should return valid greeting', () => {
  const greeting = getNamedGreeting('Dawid');

  expect(greeting).toBe('Hello, Dawid!');
});