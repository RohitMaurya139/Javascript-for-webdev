// 📌 Conditional Statements: if, else if, else in JavaScript

// ✅ 1. Basic if Statement
// Executes block only if condition is true
let age = 20;

if (age >= 18) {
  console.log("✅ You are eligible to vote."); // ➤ This will run
}

// ✅ 2. if...else Statement
// if block runs if condition is true; else block runs otherwise
let isRaining = true;

if (isRaining) {
  console.log("🌧️ Take an umbrella.");
} else {
  console.log("☀️ Enjoy the sunshine.");
}


// ✅ 3. Using logical operators with if
let hasEmail = true;
let hasPassword = false;

if (hasEmail && hasPassword) {
  console.log("🔓 Login successful");
} else {
  console.log("❌ Email or password missing"); // ➤ This will run
}

// ✅ 4. if condition with a variable check
let user = "";

if (user) {
  console.log("👋 Hello, " + user);
} else {
  console.log("🙋 Please enter your name"); // ➤ user is falsy (empty string)
}
