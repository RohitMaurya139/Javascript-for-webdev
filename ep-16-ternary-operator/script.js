// 📌 Ternary Operator in JavaScript
// The ternary operator is a shorthand way to write if...else statements.

// ✅ Syntax:
// condition ? expressionIfTrue : expressionIfFalse

// ✅ 1. Basic Example
let age = 20;

let canVote = age >= 18 ? "✅ Eligible to vote" : "❌ Not eligible";
console.log(canVote); // ➤ "✅ Eligible to vote"

// ✅ 2. Without using ternary (for comparison)
if (age >= 18) {
  console.log("✅ Eligible to vote");
} else {
  console.log("❌ Not eligible");
}

// ✅ 3. Ternary with function call
let isLoggedIn = false;

let message = isLoggedIn ? "👋 Welcome back!" : "🔒 Please log in.";
console.log(message); // ➤ "🔒 Please log in."

// ✅ 4. Nested Ternary Operator (not recommended for complex logic)
let marks = 85;

let grade =
  marks >= 90
    ? "Grade A"
    : marks >= 80
    ? "Grade B"
    : marks >= 70
    ? "Grade C"
    : "Grade F";

console.log("🎓 Your grade is:", grade); // ➤ "Grade B"

// ✅ 5. Use in expressions (inline assignment)
let number = 7;
let parity = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is ${parity}`); // ➤ "7 is Odd"

// ✅ 6. Ternary with console output directly
let userType = "admin";
userType === "admin"
  ? console.log("🔐 Admin Access")
  : console.log("👤 User Access");

// ✅ 7. Avoiding unnecessary ternary
// ⚠️ Don't use ternary when a simple if is clearer
// ❌ Bad:
age >= 18 ? console.log("Adult") : console.log("Minor");

// ✅ Better:
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

/* 
| Part        | Meaning                       |
| ----------- | ----------------------------- |
| `?`         | If condition is true          |
| `:`         | Else (if condition is false)  |
| `x ? y : z` | If x is true, do y; else do z |

*/