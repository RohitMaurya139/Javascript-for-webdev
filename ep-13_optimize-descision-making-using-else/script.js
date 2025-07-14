// ✅ 1. if...else if...else Statement
// Useful for multiple conditions
let score = 85;

if (score >= 90) {
  console.log("🏅 Grade: A");
} else if (score >= 80) {
  console.log("🎖️ Grade: B"); // ➤ This will run
} else if (score >= 70) {
  console.log("🏵️ Grade: C");
} else {
  console.log("📉 Grade: F");
}

// ✅ 2. Nested if Statement
// You can place if statements inside another if
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("🛠️ Welcome, Admin.");
  } else {
    console.log("👋 Welcome, User."); // ➤ This will run
  }
} else {
  console.log("🔒 Please log in.");
}
