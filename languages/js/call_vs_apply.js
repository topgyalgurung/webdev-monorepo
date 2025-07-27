const person = {
	fullName:function(){
		return this.firstName + "" + this.lastName;
	}
}
const person1 ={
	firstName: "John",
	lastName: "Doe"
}
const person2 ={
	firstName: "Mary",
	lastName: "Doe"
}
console.log(person.fullName.call(person1)); // John Doe
console.log(person.fullName.call(person2)); // Mary Doe

// example 2
const obj = {name: "John"};

let greeting = function(a,b){
	return `${a} ${this.name}. ${b}`;
};

// call take args individually
console.log(greeting.call(obj, "Hello", "How are you?"));
/* returns: Hello John, How are you? */

// apply takes array as args
console.log(greeting.apply(obj, ["Hello", "How are you?"]));
// returns: Hello John, How are you? 

// javascript array do not have max method
const numbers = [1,2,3,4,5];
console.log(Math.max.apply(null, numbers)); // 5