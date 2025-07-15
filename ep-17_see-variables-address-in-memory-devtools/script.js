// 📌 JavaScript: Variable Address / References

// ✅ 1. Primitive types (number, string, boolean)
// They are stored directly in the variable (copied by value)

let a = 10;
let b = a; // `b` gets a **copy** of `a`'s value

console.log("a =", a); // ➤ 10
console.log("b =", b); // ➤ 10

b = 20; // changing b does not affect a
console.log("After change:");
console.log("a =", a); // ➤ 10
console.log("b =", b); // ➤ 20

// ✅ 2. Reference types (objects, arrays, functions)
// Stored in memory by reference (like an address under the hood)

let person1 = { name: "Rohit" };
let person2 = person1; // Both variables point to the same object in memory

console.log("person1 =", person1); // ➤ { name: "Rohit" }
console.log("person2 =", person2); // ➤ { name: "Rohit" }

person2.name = "Rahul"; // Changing person2 also changes person1

console.log("After change:");
console.log("person1 =", person1); // ➤ { name: "Rahul" }
console.log("person2 =", person2); // ➤ { name: "Rahul" }

// ✅ 3. Check if two variables refer to same object
console.log("Same reference:", person1 === person2); // ➤ true

// ✅ 4. Create a copy instead of shared reference
let original = { value: 42 };
let copy = { ...original }; // spread operator creates a shallow copy

copy.value = 100;

console.log("original =", original); // ➤ { value: 42 }
console.log("copy =", copy); // ➤ { value: 100 }

// ✅ 5. Array behaves the same (reference type)
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log("arr1 =", arr1); // ➤ [1, 2, 3, 4]
console.log("arr2 =", arr2); // ➤ [1, 2, 3, 4]
console.log("Same reference:", arr1 === arr2); // ➤ true

// ✅ 6. You can't access memory address, but you can track identity by reference
function printIdentity(obj) {
  console.log("Object ID:", obj);
}

let data = { id: 1 };
printIdentity(data); // ➤ prints object reference (not memory address)
