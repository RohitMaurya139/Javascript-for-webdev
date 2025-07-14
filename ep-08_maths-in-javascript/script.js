// 📌 JavaScript Math Object
// The Math object allows you to perform mathematical tasks.
// It is not a constructor, so you don’t need to create it (just use Math.)

// ✅ 1. Math.PI – Returns the value of π (pi)
console.log("Math.PI:", Math.PI); // ➤ 3.141592653589793

// ✅ 2. Math.E – Euler's number (base of natural logarithm)
console.log("Math.E:", Math.E); // ➤ 2.718281828459045

// ✅ 3. Math.round(x) – Rounds to the nearest integer
console.log("Math.round(4.6):", Math.round(4.6)); // ➤ 5
console.log("Math.round(4.4):", Math.round(4.4)); // ➤ 4

// ✅ 4. Math.ceil(x) – Rounds up
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // ➤ 5

// ✅ 5. Math.floor(x) – Rounds down
console.log("Math.floor(4.8):", Math.floor(4.8)); // ➤ 4

// ✅ 6. Math.trunc(x) – Removes the decimal part
console.log("Math.trunc(5.89):", Math.trunc(5.89)); // ➤ 5

// ✅ 7. Math.abs(x) – Returns the absolute (positive) value
console.log("Math.abs(-7):", Math.abs(-7)); // ➤ 7

// ✅ 8. Math.pow(base, exponent) – Returns base^exponent
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // ➤ 8

// ✅ 9. Math.sqrt(x) – Returns the square root
console.log("Math.sqrt(49):", Math.sqrt(49)); // ➤ 7

// ✅ 10. Math.cbrt(x) – Returns the cube root
console.log("Math.cbrt(27):", Math.cbrt(27)); // ➤ 3

// ✅ 11. Math.max(a, b, ...) – Returns the highest number
console.log("Math.max(3, 7, 1):", Math.max(3, 7, 1)); // ➤ 7

// ✅ 12. Math.min(a, b, ...) – Returns the lowest number
console.log("Math.min(3, 7, 1):", Math.min(3, 7, 1)); // ➤ 1

// ✅ 13. Math.random() – Returns a pseudo-random number between 0 and 1
console.log("Math.random():", Math.random()); // ➤ 0.0 to 0.999...

// ✅ 14. Generate random integer between two values (min and max)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Integer (1-10):", getRandomInt(1, 10));

// ✅ 15. Math.log(x) – Natural logarithm (base E)
console.log("Math.log(1):", Math.log(1)); // ➤ 0

// ✅ 16. Math.log10(x) – Logarithm base 10
console.log("Math.log10(100):", Math.log10(100)); // ➤ 2

// ✅ 17. Math.sin(x), Math.cos(x), Math.tan(x)
// Takes angle in radians
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // ➤ 1
console.log("Math.cos(0):", Math.cos(0)); // ➤ 1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ➤ ~1

// ✅ 18. Math.sign(x) – Returns 1, -1, 0 based on sign of number
console.log("Math.sign(-20):", Math.sign(-20)); // ➤ -1
console.log("Math.sign(0):", Math.sign(0)); // ➤ 0
console.log("Math.sign(5):", Math.sign(5)); // ➤ 1

/* 
| Property / Method     | Description                 |
| --------------------- | --------------------------- |
| `Math.PI`             | Value of π (3.141...)       |
| `Math.E`              | Euler’s number (2.718...)   |
| `Math.round(x)`       | Rounds x to nearest integer |
| `Math.ceil(x)`        | Rounds x up                 |
| `Math.floor(x)`       | Rounds x down               |
| `Math.trunc(x)`       | Removes decimals            |
| `Math.abs(x)`         | Absolute value              |
| `Math.pow(a, b)`      | Power (a^b)                 |
| `Math.sqrt(x)`        | Square root                 |
| `Math.cbrt(x)`        | Cube root                   |
| `Math.max(a, b, ...)` | Maximum value               |
| `Math.min(a, b, ...)` | Minimum value               |
| `Math.random()`       | Random number (0–1)         |
| `Math.log(x)`         | Natural log (base E)        |
| `Math.log10(x)`       | Base-10 logarithm           |
| `Math.sin(x)`         | Sine of x (radians)         |
| `Math.cos(x)`         | Cosine of x                 |
| `Math.tan(x)`         | Tangent of x                |
| `Math.sign(x)`        | Sign: -1, 0, or 1           |

*/