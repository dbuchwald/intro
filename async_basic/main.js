const getNamedCallbackGreeting = function(name, successCallback, failureCallback) {
  if (name === undefined) {
    failureCallback('Undefined name from Callback');
  } else {
    successCallback('Hello from Callback, ' + name + '!')
  };
};

const getNamedPromiseGreeting = function(name) {
  return new Promise((resolve, reject) => { 
    if (name === undefined)
      reject('Undefined name from Promise');
    else
      resolve('Hello from Promise, ' + name + '!');
  });
};

module.exports = {
  getNamedCallbackGreeting: getNamedCallbackGreeting,
  getNamedPromiseGreeting: getNamedPromiseGreeting 
}

