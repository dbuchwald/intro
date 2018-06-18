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
