// 📌 JavaScript Data Types Examples

// 1️⃣ Primitive Data Types

// String - text data
let name = "Rohit";
console.log(typeof name); // "string"

// Number - integer or decimal
let age = 22;
let rating = 4.5;
console.log(typeof age); // "number"
console.log(typeof rating); // "number"

// Boolean - true or false
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// Undefined - variable declared but not assigned
let address;
console.log(typeof address); // "undefined"

// Null - intentional absence of value (special object type)
let car = null;
console.log(typeof car); // "object" (this is a JavaScript quirk)

// Symbol - unique identifiers (used for object keys)
let id = Symbol("id");
console.log(typeof id); // "symbol"

// BigInt - for large integers (above 2^53 - 1)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// 2️⃣ Non-Primitive (Reference) Data Types

// Object - key-value pairs
let person = {
  name: "Rohit",
  age: 22,
};
console.log(typeof person); // "object"

// Array - ordered list (a type of object)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // (true) The Array.isArray() method is used to check whether a value is an array or not. 

// Function - a callable object
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"

// 🔍 Summary:
// Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitives: Object, Array, Function
