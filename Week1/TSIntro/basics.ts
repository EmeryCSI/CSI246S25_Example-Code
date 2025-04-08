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
let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 30;
let isStudent: boolean = false;
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let mixed: (string | number)[] = ["hello", 1, "world", 2]; // Union type array

// Basic function with type annotations
//function that takes in two numbers and returns a number
//function syntax: function name(parameter: type): return type { body }
function add(x: number, y: number): number {
  return x + y;
}

// Function that takes multiple types (union type)
function printId(id: number | string): void {
  console.log(`ID is: ${id}`);
}

// Interface definition
// Interfaces define the structure that objects must follow
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property (note the ?)
}

// Function that uses an interface as a parameter type
function greetPerson(person: Person): void {
  console.log(`Hello ${person.name}, you are ${person.age} years old!`);
  // We can safely check optional properties
  if (person.email) {
    console.log(`Your email is ${person.email}`);
  }
}

// Example usage of the interface
const john: Person = {
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
enum Direction {
  North,
  South,
  East,
  West,
}

// Example usage of the Direction enum
let myDirection: Direction = Direction.North;
console.log(myDirection); // Output: 0 (enums are zero-based by default)
console.log(Direction[myDirection]); // Output: "North"

// Using enum in a function
function navigate(direction: Direction): void {
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
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Generic function example
//Simple example of generic type
function display<T>(item: T): void {
  console.log(item);
}

display("Hello");

//generic function syntax: function name<T>(parameter: T[]): T | undefined { body }
//T is a generic type parameter
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Using the generic function
const numbers2 = firstElement([1, 2, 3]); // Type is number
const strings = firstElement(["a", "b", "c"]); // Type is string

//Interface used for a class
interface Speak {
  // function that makeSound
  makeSound(): void;
}
interface Animal {
  name: string;
  breed: string;
}
//I can use this interface to make classes
class Dog implements Speak, Animal {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
  makeSound(): void {
    console.log("Woof");
  }
}
class Cat implements Speak, Animal {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
  makeSound(): void {
    console.log("Meow");
  }
}

// To run this file:
// 1. Make sure TypeScript is installed: npm install -g typescript
// 2. Compile: tsc basics.ts
// 3. Run: node basics.js
