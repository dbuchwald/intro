const getGreeting = function() {
  return 'Hello World!';
};

const getNamedGreeting = function(name) {
  return 'Hello, ' + name + '!';
};

console.log('Standard greeting (no parameters): ' + getGreeting());
console.log('Parameterized greeting with parameter "Node": ' + getNamedGreeting('Node'));

module.exports = {
  getGreeting: getGreeting,
  getNamedGreeting: getNamedGreeting
};

