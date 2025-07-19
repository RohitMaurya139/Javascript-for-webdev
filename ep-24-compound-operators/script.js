// ! COMPOUND OPERATORS IN JAVASCRIPT
// * Compound operators combine an arithmetic or bitwise operation with assignment.

// ? Syntax: variable OP= value  →  same as: variable = variable OP value

let a = 10;
let b = 5;

// * 1️⃣ Addition assignment (+=)
a += b; // same as: a = a + b
console.log("a += b:", a); // * Output: 15

// * 2️⃣ Subtraction assignment (-=)
a -= b; // same as: a = a - b
console.log("a -= b:", a); // * Output: 10

// * 3️⃣ Multiplication assignment (*=)
a *= b; // same as: a = a * b
console.log("a *= b:", a); // * Output: 50

// * 4️⃣ Division assignment (/=)
a /= b; // same as: a = a / b
console.log("a /= b:", a); // * Output: 10

// * 5️⃣ Remainder assignment (%=)
a %= b; // same as: a = a % b
console.log("a %= b:", a); // * Output: 0

// --------------------------------------------------------

// * 6️⃣ Exponentiation assignment (**=)
let x = 2;
x **= 3; // same as: x = x ** 3 (2^3)
console.log("x **= 3:", x); // * Output: 8

// * 7️⃣ Bitwise AND assignment (&=)
let p = 6; // binary: 110
let q = 3; // binary: 011
p &= q; // same as: p = p & q → binary AND
console.log("p &= q:", p); // * Output: 2 (binary: 010)

// * 8️⃣ Bitwise OR assignment (|=)
p |= q; // same as: p = p | q
console.log("p |= q:", p); // * Output: 3 (binary: 011)

// * 9️⃣ Bitwise XOR assignment (^=)
p ^= q; // same as: p = p ^ q
console.log("p ^= q:", p); // * Output: 0

// * 🔟 Left shift assignment (<<=)
let num = 2; // binary: 10
num <<= 2; // same as: num = num << 2
console.log("num <<= 2:", num); // * Output: 8 (binary: 1000)

// * 🔁 Right shift assignment (>>=)
num >>= 1; // same as: num = num >> 1
console.log("num >>= 1:", num); // * Output: 4

// * 🔁 Unsigned right shift assignment (>>>=)
num >>>= 1;
console.log("num >>>= 1:", num); // * Output: 2

// --------------------------------------------------------

// @note: Compound operators make code shorter and cleaner.
// TODO: Try using compound operators in loops, conditions, etc.
