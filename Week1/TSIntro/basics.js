// TypeScript Tutorial
// Basic Types in TypeScript:
// string: For text values
// number: For all numbers (integers and decimals)
// boolean: true/false
// any: Turns off type checking
// void: Usually for functions that don't return anything
// null and undefined: Represent null and undefined values
// array: Can be written as type[] or Array<type>
// tuple: Fixed-length array where each element can have a different type
// enum: A set of named constants
// object: Represents any non-primitive type
// Basic variable declarations with types
var firstName = "John";
var lastName = "Doe";
var age = 30;
var isStudent = false;
var numbers = [1, 2, 3, 4, 5]; // Array of numbers
var mixed = ["hello", 1, "world", 2]; // Union type array
// Basic function with type annotations
//function that takes in two numbers and returns a number
//function syntax: function name(parameter: type): return type { body }
function add(x, y) {
  return x + y;
}
// Function that takes multiple types (union type)
function printId(id) {
  console.log("ID is: ".concat(id));
}
// Function that uses an interface as a parameter type
function greetPerson(person) {
  console.log(
    "Hello ".concat(person.name, ", you are ").concat(person.age, " years old!")
  );
  // We can safely check optional properties
  if (person.email) {
    console.log("Your email is ".concat(person.email));
  }
}
// Example usage of the interface
var john = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};
// Example usage of the code
console.log(add(5, 3)); // Output: 8
printId("A123"); // Output: ID is: A123
printId(456); // Output: ID is: 456
greetPerson(john); // Output: Hello John Doe, you are 30 years old!
// Enum example
var Direction;
(function (Direction) {
  Direction[(Direction["North"] = 0)] = "North";
  Direction[(Direction["South"] = 1)] = "South";
  Direction[(Direction["East"] = 2)] = "East";
  Direction[(Direction["West"] = 3)] = "West";
})(Direction || (Direction = {}));
// Example usage of the Direction enum
var myDirection = Direction.North;
console.log(myDirection); // Output: 0 (enums are zero-based by default)
console.log(Direction[myDirection]); // Output: "North"
// Using enum in a function
function navigate(direction) {
  switch (direction) {
    case Direction.North:
      console.log("Heading North");
      break;
    case Direction.South:
      console.log("Heading South");
      break;
    case Direction.East:
      console.log("Heading East");
      break;
    case Direction.West:
      console.log("Heading West");
      break;
  }
}
navigate(Direction.East); // Output: "Heading East"
// Type assertion example
var someValue = "this is a string";
var strLength = someValue.length;
// Generic function example
//generic function syntax: function name<T>(parameter: T[]): T | undefined { body }
//T is a generic type parameter
function firstElement(arr) {
  return arr[0];
}
// Using the generic function
var numbers2 = firstElement([1, 2, 3]); // Type is number
var strings = firstElement(["a", "b", "c"]); // Type is string
//Implementing an interface
//makeSound is a method that must be implemented by any class that implements the Animal interface
var Dog = /** @class */ (function () {
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.makeSound = function () {
    console.log("Woof!");
  };
  return Dog;
})();
// To run this file:
// 1. Make sure TypeScript is installed: npm install -g typescript
// 2. Compile: tsc basics.ts
// 3. Run: node basics.js
