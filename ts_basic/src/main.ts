export const getGreeting = function(): string {
  return 'Hello World!';
}

export const getNamedGreeting = function(name: string): string {
  return `Hello, ${name}!`;
}

console.log('Standard greeting (no parameters): ' + getGreeting());
console.log('Parameterized greeting with parameter "Node": ' + getNamedGreeting('Node'));

