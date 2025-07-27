

const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor



const obj = {
  value: 42,
  getValue: () => this.value, // `this` does not refer to `obj`
};

console.log(obj.getValue()); // undefined



// arrow function in event handler 
const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  console.log(this); // Output: Button
  console.log(this === button); // Output: true
});

button.addEventListener('click', () => {
  console.log(this); // Output: Window
  console.log(this === window); // Output: true
});
