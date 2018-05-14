const getGreeting = function() {
  return 'Hello World!';
};

var getNamedGreeting = function(name) {
  return 'Hello, ' + name + '!';
}

module.exports.getGreeting = getGreeting;
module.exports.getNamedGreeting = getNamedGreeting;
