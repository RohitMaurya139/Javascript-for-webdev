// 📌 JavaScript Reference Types
// Reference types are data types where variables store a reference (address) to the value in memory.
// This includes: Object, Array, Function

// ✅ 1. Object (Reference Type)
let person = {
  name: "Rohit",
  age: 25,
};

let personRef = person; // personRef now references the same object as person

personRef.age = 30; // Changing personRef also affects person
console.log("👤 person.age:", person.age); // ➤ 30

// ✅ 2. Array (Reference Type)
let numbers = [1, 2, 3];
let numsRef = numbers;

numsRef.push(4); // Modifies the same array
console.log("📦 numbers:", numbers); // ➤ [1, 2, 3, 4]

// ✅ 3. Function (Reference Type)
function greet() {
  console.log("Hello!");
}

let greetRef = greet;
greetRef(); // ➤ "Hello!"

// ✅ 4. Checking Reference Equality
let obj1 = { x: 1 };
let obj2 = obj1; // same reference
let obj3 = { x: 1 }; // different object with same content

console.log("obj1 === obj2:", obj1 === obj2); // ➤ true
console.log("obj1 === obj3:", obj1 === obj3); // ➤ false

// ✅ 5. Passing Reference Types to Functions
function modifyObject(obj) {
  obj.changed = true;
}

let item = { name: "Book" };
modifyObject(item);

console.log("item after function:", item); // ➤ { name: 'Book', changed: true }

// ✅ 6. Cloning (copying) Objects (avoid shared references)
let original = { id: 1 };
let clone = { ...original }; // shallow copy using spread operator

clone.id = 2;
console.log("original:", original); // ➤ { id: 1 }
console.log("clone:", clone); // ➤ { id: 2 }

// ✅ 7. Arrays also follow reference behavior
let fruits = ["apple", "banana"];
let basket = fruits;

basket.push("orange");

console.log("fruits:", fruits); // ➤ ["apple", "banana", "orange"]
console.log("basket:", basket); // ➤ same as fruits (same reference)

/* 
🔥 Important:
Reference types are mutable (can be changed).

Copying a reference type does not create a new copy, just another pointer to the same memory.
*/