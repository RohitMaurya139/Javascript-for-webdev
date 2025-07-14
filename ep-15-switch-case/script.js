// 📌 JavaScript switch...case Statement
// Used to perform different actions based on different conditions.
// It’s a cleaner alternative to many else-if statements.

// ✅ 1. Basic Syntax

let day = 3;

switch (day) {
  case 1:
    console.log("📅 Monday");
    break;
  case 2:
    console.log("📅 Tuesday");
    break;
  case 3:
    console.log("📅 Wednesday"); // ➤ This will run
    break;
  case 4:
    console.log("📅 Thursday");
    break;
  case 5:
    console.log("📅 Friday");
    break;
  default:
    console.log("❓ Invalid day"); // ➤ Runs if no case matches
}

// ✅ 2. Using string values in switch
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("🍌 Banana is selected");
    break;
  case "apple":
    console.log("🍎 Apple is selected"); // ➤ This will run
    break;
  case "orange":
    console.log("🍊 Orange is selected");
    break;
  default:
    console.log("❌ Unknown fruit");
}

// ✅ 3. Grouping multiple cases (fall-through)
let grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("✅ Passed"); // ➤ This will run for A, B, or C
    break;
  case "D":
  case "F":
    console.log("❌ Failed");
    break;
  default:
    console.log("Invalid grade");
}

// ✅ 4. switch vs if-else: A real-world login role example
let role = "admin";

switch (role) {
  case "admin":
    console.log("🔐 Access to admin panel");
    break;
  case "user":
    console.log("👤 Access to user dashboard");
    break;
  case "guest":
    console.log("👀 View-only access");
    break;
  default:
    console.log("🚫 Unknown role");
}

/* 
| Keyword        | Description                                        |
| -------------- | -------------------------------------------------- |
| `switch`       | Starts the switch statement                        |
| `case`         | Each value to compare with the `switch` expression |
| `break`        | Stops checking further cases if a match is found   |
| `default`      | Executes if no matching case is found              |
| `fall-through` | If you skip `break`, it continues to the next case |

*/