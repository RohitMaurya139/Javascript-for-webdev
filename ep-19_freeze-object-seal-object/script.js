// 📌 Object.freeze() and Object.seal() in JavaScript
// Used to control changes to objects (mutability protection)

// ✅ 1. Object.freeze(obj)
// ➤ Prevents adding, deleting, or modifying properties

let user = {
  name: "Rohit",
  age: 25,
};

Object.freeze(user); // Now user object is frozen

user.name = "Rahul"; // ❌ Cannot modify
user.city = "Mumbai"; // ❌ Cannot add
delete user.age; // ❌ Cannot delete

console.log("🔒 Frozen object:", user);
// ➤ { name: "Rohit", age: 25 } — unchanged

// ✅ Check if object is frozen
console.log("Is frozen?", Object.isFrozen(user)); // ➤ true

// ✅ 2. Object.seal(obj)
// ➤ Allows modifying existing properties
// ➤ Prevents adding or deleting properties

let product = {
  id: 101,
  name: "Laptop",
};

Object.seal(product); // Now product is sealed

product.name = "Gaming Laptop"; // ✅ Can modify existing property
product.price = 50000; // ❌ Cannot add new property
delete product.id; // ❌ Cannot delete property

console.log("🧷 Sealed object:", product);
// ➤ { id: 101, name: "Gaming Laptop" }

// ✅ Check if object is sealed
console.log("Is sealed?", Object.isSealed(product)); // ➤ true

// ✅ 3. Comparison: freeze vs seal

let student1 = { name: "Aman" };
let student2 = { name: "Riya" };

Object.freeze(student1); // full lock
Object.seal(student2); // partial lock

// Try to modify
student1.name = "Changed"; // ❌ will not change
student2.name = "Changed"; // ✅ will change

console.log("student1 (frozen):", student1); // ➤ { name: "Aman" }
console.log("student2 (sealed):", student2); // ➤ { name: "Changed" }

/* 
🔐 Use Cases
Use Object.freeze() when you want to make an object completely immutable (like constants).

Use Object.seal() when you want to allow value changes but prevent structure changes (no adding/removing keys).
*/