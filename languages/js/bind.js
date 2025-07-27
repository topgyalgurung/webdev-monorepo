const obj = {name:"John"};
let greeting = function(a,b){
	return `${a} ${this.name}. ${b}`;
}
// create new bound function wraps original function object
let bound = greeting.bind(obj);

console.log(bound("Hello", "How are you?"));
// returns: Hello John, How are you?

// currying 
function multiply(a, b) {
  return a * b;
}

// Using bind() to create a new function with some arguments pre-set
const multiplyBy5 = multiply.bind(null, 5);
console.log(multiplyBy5(3)); // Output: 15


// method borrowing 
const person = {
  name: 'John',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetPerson = person.greet.bind({ name: 'Alice' });
greetPerson(); // Output: Hello, Alice!
