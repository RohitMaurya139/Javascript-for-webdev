
// 📌 JavaScript Arrays
// Arrays are used to store multiple values in a single variable.

// ✅ 1. Create an Array
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits); // ➤ [ 'apple', 'banana', 'orange' ]

// ✅ 2. Accessing Array Elements (0-based index)
console.log("First fruit:", fruits[0]); // ➤ 'apple'

// ✅ 3. Modifying Array Elements
fruits[1] = "mango"; // Change banana to mango
console.log("Modified fruits:", fruits); // ➤ [ 'apple', 'mango', 'orange' ]

// ✅ 4. Array Length
console.log("Number of fruits:", fruits.length); // ➤ 3

// ✅ 5. Adding Elements
fruits.push("grape"); // ➤ Adds to end
fruits.unshift("kiwi"); // ➤ Adds to start
console.log("After adding:", fruits); // ➤ [ 'kiwi', 'apple', 'mango', 'orange', 'grape' ]

// ✅ 6. Removing Elements
fruits.pop(); // ➤ Removes last element
fruits.shift(); // ➤ Removes first element
console.log("After removing:", fruits); // ➤ [ 'apple', 'mango', 'orange' ]

// ✅ 7. Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// ✅ 8. Using for...of Loop (simpler)
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

