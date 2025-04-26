export const getGreeting = () => {
  return 'Hello World!';
};

export const getNamedGreeting = (name) => `Hello, ${name}!`;

console.log('Standard greeting (no parameters): ' + getGreeting());
console.log('Parameterized greeting with parameter "Node": ' + getNamedGreeting('Node'));


