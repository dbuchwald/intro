const getNamedCallbackGreeting = function(name, successCallback, failureCallback) {
  if (name === undefined) {
    failureCallback('Undefined name from Callback');
  } else {
    successCallback('Hello from Callback, ' + name + '!')
  }
};

const getDelayedCallbackGreeting = (name, successCallback, failureCallback) => {
  setTimeout(() => {
    if (name === undefined) {
      failureCallback('Undefined name from Delayed Callback');
    } else {
      successCallback('Hello from Delayed Callback, ' + name + '!')
    }
  }, 50);
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
    }, 50);
  });
};

const getDataFromAsyncSourcePromise = function(connection, id) {
  return new Promise((resolve, reject) => {
    //console.log('Checking connection');
    if (connection === undefined || connection === null) {
      //console.log('Failing due to missing connection');
      reject('Connection not established yet!');
      //console.log('Rejection sent back from connection');
    } else {
      //console.log('Setting timeout...');
      setTimeout( () => {
        if (id === undefined) {
          //console.log('Id rejected by data source');
          reject('Incorrect id provided');
          //console.log('Rejection sent back from id')
        } else {
          //console.log('Data fetched from data souce');
          resolve({id, data: {key: 1, value:'Name'}});
          //console.log('Promise resolved');
        }
      }, 50);
      //console.log('Timeout set');
    }
    //console.log('Promise processing completed');
  });
};

const getDataFunction = function(connection, id) {
  return getDataFromAsyncSourcePromise(connection, id)
          .then( (data) => { console.log(`Data received successfully: ${data}`); return data;})
          .catch( (error) => {console.log(`Error captured: ${error}`); throw error;});
}

module.exports = {  
  getNamedCallbackGreeting: getNamedCallbackGreeting,
  getDelayedCallbackGreeting: getDelayedCallbackGreeting,
  getNamedPromiseGreeting: getNamedPromiseGreeting,
  getDelayedPromiseGreeting: getDelayedPromiseGreeting,
  getDataFromAsyncSourcePromise,
  getDataFunction,
}

