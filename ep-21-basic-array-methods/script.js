
// ✅ 9. Array Methods

// 🔹 includes()
console.log("Has mango?", fruits.includes("mango")); // ➤ true

// 🔹 indexOf()
console.log("Index of orange:", fruits.indexOf("orange")); // ➤ 2

// 🔹 join()
console.log("Fruits list:", fruits.join(", ")); // ➤ apple, mango, orange

// 🔹 slice() – does not modify original array
let sliced = fruits.slice(0, 2);
console.log("Sliced:", sliced); // ➤ [ 'apple', 'mango' ]

// 🔹 splice() – modifies the original array
fruits.splice(1, 1, "pear"); // remove 1 item at index 1, add "pear"
console.log("After splice:", fruits); // ➤ [ 'apple', 'pear', 'orange' ]

// 🔹 reverse()
let reversed = fruits.slice().reverse();
console.log("Reversed:", reversed); // ➤ [ 'orange', 'pear', 'apple' ]

// 🔹 sort()
let numbers = [4, 1, 7, 2];
numbers.sort(); // by default sorts as strings
console.log("Sorted (wrong for numbers):", numbers); // ➤ [1, 2, 4, 7]

// ✅ 10. Custom Sort (Correct way for numbers)
numbers.sort((a, b) => a - b); // ascending
console.log("Sorted (correct):", numbers); // ➤ [1, 2, 4, 7]



/* 
| Method        | Description                         |
| ------------- | ----------------------------------- |
| `.push()`     | Add to end                          |
| `.pop()`      | Remove from end                     |
| `.unshift()`  | Add to start                        |
| `.shift()`    | Remove from start                   |
| `.length`     | Get number of items                 |
| `.includes()` | Check if element exists             |
| `.indexOf()`  | Get index of element                |
| `.join()`     | Convert array to string             |
| `.slice()`    | Returns a portion (non-destructive) |
| `.splice()`   | Remove/replace items (destructive)  |
| `.sort()`     | Sorts array                         |
| `.reverse()`  | Reverses order                      |

*/