const getNamedCallbackGreeting = function(name, successCallback, failureCallback) {
  if (name === undefined) {
    failureCallback('Undefined name from Callback');
  } else {
    successCallback('Hello from Callback, ' + name + '!')
  };
};

const getDelayedCallbackGreeting = (name, successCallback, failureCallback) => {
  setTimeout(() => {
    if (name === undefined) {
      failureCallback('Undefined name from Delayed Callback');
    } else {
      successCallback('Hello from Delayed Callback, ' + name + '!')
    };
  }, 500);
};

const getNamedPromiseGreeting = function(name) {
  return new Promise((resolve, reject) => { 
    if (name === undefined)
      reject('Undefined name from Promise');
    else
      resolve('Hello from Promise, ' + name + '!');
  });
};

const getDelayedPromiseGreeting = function(name) {
  return new Promise((resolve, reject) => { 
    setTimeout( () => {
      if (name === undefined)
        reject('Undefined name from Delayed Promise');
      else
        resolve('Hello from Delayed Promise, ' + name + '!');
    }, 500);
  });
};

module.exports = {  
  getNamedCallbackGreeting: getNamedCallbackGreeting,
  getDelayedCallbackGreeting: getDelayedCallbackGreeting,
  getNamedPromiseGreeting: getNamedPromiseGreeting,
  getDelayedPromiseGreeting: getDelayedPromiseGreeting
}

