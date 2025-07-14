// 📌 Logical Operators in JavaScript
// These are used to combine or invert Boolean expressions.

// ✅ 1. Logical AND (&&)
// Returns true if both operands are true
let isAdult = true;
let hasID = true;

if (isAdult && hasID) {
  console.log("✅ Access granted (AND): Both conditions are true");
}

// If one is false
let isVerified = false;
if (isAdult && isVerified) {
  console.log("❌ Will not print");
} else {
  console.log("🚫 Access denied (AND): One condition is false");
}

// ✅ 2. Logical OR (||)
// Returns true if at least one operand is true
let hasTicket = false;
let isVIP = true;

if (hasTicket || isVIP) {
  console.log("🎉 Welcome! (OR): At least one condition is true");
}

// If both are false
hasTicket = false;
isVIP = false;
if (hasTicket || isVIP) {
  console.log("❌ Will not print");
} else {
  console.log("🛑 Entry denied (OR): Both conditions are false");
}

// ✅ 3. Logical NOT (!)
// Reverses the Boolean value
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("🔒 Please log in (NOT): isLoggedIn is false");
}

let isOnline = true;
if (!isOnline) {
  console.log("❌ Will not print");
} else {
  console.log("✅ User is online (NOT): isOnline is true");
}

// ✅ 4. Combining Multiple Logical Operators
let hasAccount = true;
let hasPassword = false;
let hasSecurityCode = true;

if ((hasAccount && hasPassword) || hasSecurityCode) {
  console.log("🔐 Access with backup method (Combined)");
}

// ✅ 5. Short-circuit behavior

// AND (&&) stops at first false
console.log("AND Short-circuit:", false && console.log("Will not execute")); // ➤ false

// OR (||) stops at first true
console.log("OR Short-circuit:", true || console.log("Will not execute")); // ➤ true

// NOT (!) in expression
let age = 18;
console.log("!true:", !true); // ➤ false
console.log("!false:", !false); // ➤ true
console.log("!(age >= 18):", !(age >= 18)); // ➤ false (because 18 >= 18 is true, !true = false)

