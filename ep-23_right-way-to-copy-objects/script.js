// ! COPYING OBJECTS IN JAVASCRIPT
// * In JavaScript, objects are reference types.
// * Assigning one object to another does NOT copy it—it just copies the reference!

const original = {
  name: "Rohit",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"],
};

const referenceCopy = original; // * This copies the reference, NOT the object!
referenceCopy.name = "Changed";
console.log(original.name); // ! Outputs: "Changed" → both point to same object

// ? To create a real (shallow) copy, use one of the following methods:

// * 1️⃣ Using Object.assign() - Shallow copy
const shallowCopy1 = Object.assign({}, original);
shallowCopy1.name = "Shallow";
console.log(original.name); // * Still "Changed", so this is a copy
console.log(shallowCopy1); // * Different object

// * 2️⃣ Using spread operator {...} - Shallow copy
const shallowCopy2 = { ...original };
shallowCopy2.age = 30;
console.log(original.age); // * Still 22
console.log(shallowCopy2.age); // * 30

// ? But both methods only make shallow copies!
// ! Nested objects/arrays are still referenced.

shallowCopy2.skills.push("React");
console.log(original.skills); // ! "React" is added in original too → due to shallow copy

// * 3️⃣ Deep copy using JSON methods (simple cases only)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.skills.push("Node.js");
console.log(original.skills); // * Original unaffected
console.log(deepCopy.skills); // * Separate copy with "Node.js"

// @note: JSON method fails with:
// - functions
// - undefined
// - Date, Map, Set, RegExp, etc.

// TODO: For complex structures, use structuredClone (ES2023) or libraries like lodash

// * 4️⃣ Deep copy using structuredClone() (modern & best for most cases)
const deepCopy2 = structuredClone(original);
deepCopy2.skills.push("TypeScript");
console.log(original.skills); // * Original still unchanged

// ! Always use structuredClone if available, or libraries like lodash for older browsers
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// ! // ! JSON.stringify() AND JSON.parse() IN JAVASCRIPT

// * JSON.stringify(object)
// * Converts a JavaScript object into a JSON-formatted string

const user = {
  name: "Rohit",
  age: 22,
  isDeveloper: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Delhi",
    country: "India"
  }
};

// ? Convert object to JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// * Output:
// * "{"name":"Rohit","age":22,"isDeveloper":true,"skills":["HTML","CSS","JavaScript"],"address":{"city":"Delhi","country":"India"}}"

// * This is useful for:
// * - Saving to localStorage or sending over a network (e.g., APIs)

// TODO: Try storing this in localStorage (browser)
localStorage.setItem("user", jsonString);

// ----------------------------------------------------

// * JSON.parse(jsonString)
// * Converts a JSON string back into a JavaScript object

const jsonFromStorage = localStorage.getItem("user");

// ? Convert JSON string back to JS object
const parsedUser = JSON.parse(jsonFromStorage);

console.log("Parsed Object:", parsedUser);
console.log(parsedUser.name);      // * Output: "Rohit"
console.log(parsedUser.address.city); // * Output: "Delhi"

// ----------------------------------------------------

// ! LIMITATIONS of JSON.stringify()

const complex = {
  a: 1,
  b: undefined,
  c: () => console.log("Function"),
  d: new Date(),
  e: /regex/
};

const jsonLimited = JSON.stringify(complex);
console.log("Limited JSON:", jsonLimited);

// * Output: {"a":1,"d":"2025-07-19T..."} → others are removed or stringified

// @note: JSON.stringify()
// - Removes `undefined`
// - Removes `function`
// - Converts `Date` to ISO string
// - Converts `RegExp` to empty object

// ! JSON.parse() will fail on invalid JSON
try {
  const badJson = "{ name: 'Rohit' }"; // ! Invalid JSON (keys must be in double quotes)
  const result = JSON.parse(badJson);
} catch (error) {
  console.error("Parsing Error:", error.message);
}

// TODO: Always validate or wrap JSON.parse() in try-catch
