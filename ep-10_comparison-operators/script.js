// 📌 JavaScript Comparison Operators
// Used to compare two values and return true or false

// ✅ 1. Equal to (==)
// Compares values after type coercion (loose equality)
console.log(5 == "5"); // ➤ true (number == string, converts string to number)
console.log(null == undefined); // ➤ true (special case)

// ✅ 2. Strict Equal (===)
// Compares values AND types (no type coercion)
console.log(5 === "5"); // ➤ false (number !== string)
console.log(5 === 5); // ➤ true

// ✅ 3. Not Equal (!=)
// Compares values, ignoring type
console.log(10 != "10"); // ➤ false

// ✅ 4. Strict Not Equal (!==)
// Compares values AND types
console.log(10 !== "10"); // ➤ true

// ✅ 5. Greater Than (>)
console.log(10 > 5); // ➤ true
console.log(3 > 10); // ➤ false

// ✅ 6. Less Than (<)
console.log(2 < 5); // ➤ true
console.log(10 < 2); // ➤ false

// ✅ 7. Greater Than or Equal To (>=)
console.log(5 >= 5); // ➤ true
console.log(6 >= 10); // ➤ false

// ✅ 8. Less Than or Equal To (<=)
console.log(5 <= 10); // ➤ true
console.log(5 <= 4); // ➤ false

// ✅ 9. Comparing Strings (alphabetical order based on Unicode)
console.log("apple" < "banana"); // ➤ true (a < b)
console.log("Zebra" < "apple"); // ➤ true ('Z' comes before 'a' in Unicode)

// ✅ 10. Comparing Boolean Values
console.log(true == 1); // ➤ true (true coerces to 1)
console.log(false === 0); // ➤ false (strict check)

// ✅ 11. Comparing with null and undefined
console.log(null == undefined); // ➤ true
console.log(null === undefined); // ➤ false

// ✅ 12. Comparing with NaN
console.log(NaN == NaN); // ➤ false (special case: NaN is not equal to itself)
console.log(isNaN(NaN)); // ➤ true (correct way to check for NaN)


/* 
| Operator | Description                 | Example       | Result |
| -------- | --------------------------- | ------------- | ------ |
| `==`     | Equal (loose)               | `5 == '5'`    | true   |
| `===`    | Strict equal (value + type) | `5 === '5'`   | false  |
| `!=`     | Not equal (loose)           | `10 != '10'`  | false  |
| `!==`    | Strict not equal            | `10 !== '10'` | true   |
| `>`      | Greater than                | `10 > 5`      | true   |
| `<`      | Less than                   | `2 < 5`       | true   |
| `>=`     | Greater than or equal to    | `5 >= 5`      | true   |
| `<=`     | Less than or equal to       | `5 <= 4`      | false  |

*/