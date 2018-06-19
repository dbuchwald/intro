const main = require('./main.js');

test('getNamedCallbackGreeting function should return error message for undefined name', done => {
  function successCallback(message) {
    fail('This should not happen!');
    done();
  };
  function failureCallback(message) {
    expect(message).toBe('Undefined name from Callback');
    done();
  };
  main.getNamedCallbackGreeting(undefined, successCallback, failureCallback);
});

test('getNamedCallbackGreeting function should return valid message for name', done => {
  function successCallback(message) {
    expect(message).toBe('Hello from Callback, name!');
    done();
  };
  function failureCallback(message) {
    fail('This should not happen!');
    done();
  };
  main.getNamedCallbackGreeting('name', successCallback, failureCallback);
});

// This way of writing tests for Promises is not optimal, see below
test('getNamedPromiseGreeting function should return error message for undefined name', done => {
  function successCallback(message) {
    fail('This should not happen!');
    done();
  };
  function failureCallback(message) {
    expect(message).toBe('Undefined name from Promise');
    done();
  };
  main.getNamedPromiseGreeting(undefined).then(successCallback, failureCallback);
});

test('getNamedPromiseGreeting function should return valid message for name', done => {
  function successCallback(message) {
    expect(message).toBe('Hello from Promise, name!');
    done();
  };
  function failureCallback(message) {
    fail('This should not happen!');
    done();
  };
  main.getNamedPromiseGreeting('name').then(successCallback, failureCallback);
});

//This is the right way to test code using Promises
test('getNamedPromiseGreeting function should return error message for undefined name - the Promise way', () => {
  expect.assertions(1);
  return main.getNamedPromiseGreeting(undefined).catch(
    message => expect(message).toMatch('Undefined name from Promise')
  );
});

test('getNamedPromiseGreeting function should return correct message for name - the Promise way', () => {
  expect.assertions(1);
  return main.getNamedPromiseGreeting('name').then(
    message => expect(message).toBe('Hello from Promise, name!')
  )
});

//This is also correct (and maybe a bit more clear)
test('getNamedPromiseGreeting function should return error message for undefined name - the Promise.rejects way', () => {
  //expect.assertions(1);
  return expect(main.getNamedPromiseGreeting(undefined)).rejects.toMatch('Undefined name from Promise');
});

test('getNamedPromiseGreeting function should return correct message for name - the Promise.resolves way', () => {
  //expect.assertions(1);
  return expect(main.getNamedPromiseGreeting('name')).resolves.toBe('Hello from Promise, name!');
});

//Last but not least - async/await version
test('getNamedPromiseGreeting function should return error message for undefined name - the Async way', async () => {
  //expect.assertions(1);
  await expect(main.getNamedPromiseGreeting(undefined)).rejects.toMatch('Undefined name from Promise');
});

test('getNamedPromiseGreeting function should return correct message for name - the Async way', async () => {
  //expect.assertions(1);
  await expect(main.getNamedPromiseGreeting('name')).resolves.toBe('Hello from Promise, name!');
});
