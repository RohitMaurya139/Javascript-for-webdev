// 📌 JavaScript Dialog Boxes: alert(), prompt(), confirm()

// 1️⃣ alert() – shows a simple message to the user (OK button only)
alert("Welcome to my website!"); // ✅ Just displays a message

// 2️⃣ prompt() – asks the user to enter input (OK and Cancel buttons)
let userName = prompt("What is your name?"); // 🚀 User enters something
console.log("User entered:", userName);

// 3️⃣ confirm() – asks for confirmation (OK and Cancel)
// Returns true if OK is clicked, false if Cancel is clicked
let isSure = confirm("Do you really want to leave this page?");
console.log("User clicked:", isSure ? "OK" : "Cancel");

// 🧠 Summary:
// - alert() = display message
// - prompt() = get input from user (returns string or null)
// - confirm() = ask yes/no (returns true/false)
