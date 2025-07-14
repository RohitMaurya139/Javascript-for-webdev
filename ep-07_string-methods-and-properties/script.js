// 📌 String in JavaScript is a primitive data type used to store text.

// ✅ 1. String Length Property
let name = "Rohit Maurya";
console.log("Length:", name.length); // ➤ Returns number of characters: 12

// ✅ 2. charAt(index): Returns the character at the specified index
console.log("charAt(0):", name.charAt(0)); // ➤ 'R'

// ✅ 3. toUpperCase(): Converts entire string to uppercase
console.log("toUpperCase():", name.toUpperCase()); // ➤ 'ROHIT MAURYA'

// ✅ 4. toLowerCase(): Converts entire string to lowercase
console.log("toLowerCase():", name.toLowerCase()); // ➤ 'rohit maurya'

// ✅ 5. includes(substring): Checks if substring exists
console.log("includes('Maurya'):", name.includes("Maurya")); // ➤ true

// ✅ 6. indexOf(substring): Returns first index of substring, -1 if not found
console.log("indexOf('M'):", name.indexOf("M")); // ➤ 6

// ✅ 7. lastIndexOf(substring): Returns last occurrence index
let str = "hello world hello";
console.log("lastIndexOf('hello'):", str.lastIndexOf("hello")); // ➤ 12

// ✅ 8. slice(start, end): Extracts part of string
console.log("slice(0, 5):", name.slice(0, 5)); // ➤ 'Rohit'

// ✅ 9. substring(start, end): Similar to slice, but no negative index allowed
console.log("substring(6, 12):", name.substring(6, 12)); // ➤ 'Maurya'

// ✅ 10. substr(start, length): Extracts from start, for given length
console.log("substr(6, 3):", name.substr(6, 3)); // ➤ 'Mau'

// ✅ 11. replace(search, replacement): Replaces first match
let greet = "Hello Rohit";
console.log("replace():", greet.replace("Rohit", "Rahul")); // ➤ 'Hello Rahul'

// ✅ 12. replaceAll(search, replacement): Replaces all matches
let repeat = "Ha Ha Ha";
console.log("replaceAll('Ha', 'Ho'):", repeat.replaceAll("Ha", "Ho")); // ➤ 'Ho Ho Ho'

// ✅ 13. trim(): Removes spaces from both ends
let messy = "   Hello   ";
console.log("trim():", messy.trim()); // ➤ 'Hello'

// ✅ 14. split(separator): Converts string to array
let fruits = "apple,banana,grape";
console.log("split(','):", fruits.split(",")); // ➤ ['apple', 'banana', 'grape']

// ✅ 15. concat(): Joins two or more strings
let first = "Rohit";
let last = "Maurya";
console.log("concat():", first.concat(" ", last)); // ➤ 'Rohit Maurya'

// ✅ 16. startsWith(substring)
console.log("startsWith('Roh'):", name.startsWith("Roh")); // ➤ true

// ✅ 17. endsWith(substring)
console.log("endsWith('ya'):", name.endsWith("ya")); // ➤ true

// ✅ 18. repeat(n): Repeats the string n times
console.log("repeat(3):", "Hi ".repeat(3)); // ➤ 'Hi Hi Hi '

// ✅ 19. padStart(targetLength, padString)
console.log("padStart(5, '0'):", "7".padStart(5, "0")); // ➤ '00007'

// ✅ 20. padEnd(targetLength, padString)
console.log("padEnd(6, '*'):", "Hi".padEnd(6, "*")); // ➤ 'Hi****'

/*
| Property/Method     | Description                             |
| ------------------- | --------------------------------------- |
| `length`            | Returns number of characters            |
| `charAt(index)`     | Character at given index                |
| `toUpperCase()`     | Converts to uppercase                   |
| `toLowerCase()`     | Converts to lowercase                   |
| `includes(str)`     | Checks if str exists                    |
| `indexOf(str)`      | First index of str                      |
| `lastIndexOf(str)`  | Last index of str                       |
| `slice(start, end)` | Extracts a section                      |
| `substring()`       | Similar to slice, but no negative index |
| `substr()`          | Extracts using start + length           |
| `replace()`         | Replaces first match                    |
| `replaceAll()`      | Replaces all matches                    |
| `trim()`            | Removes spaces from both ends           |
| `split()`           | Splits string to array                  |
| `concat()`          | Combines strings                        |
| `startsWith()`      | Checks prefix                           |
| `endsWith()`        | Checks suffix                           |
| `repeat()`          | Repeats the string                      |
| `padStart()`        | Pads string from start                  |
| `padEnd()`          | Pads string from end                    |

*/