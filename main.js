const getGreeting = function() {
  return 'Hello World!';
};

const getNamedGreeting = function(name) {
  return 'Hello, ' + name + '!';
}

module.exports = {
  getGreeting: getGreeting,
  getNamedGreeting: getNamedGreeting
}
