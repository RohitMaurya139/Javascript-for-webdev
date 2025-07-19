// ! MULTIDIMENSIONAL ARRAYS IN JAVASCRIPT
// * A multidimensional array is simply an array of arrays.
// * Most common is a 2D array: array[row][column]

/*
  Example: Matrix (2D Array)
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
*/

// ? Declaring a 2D array (3 rows, 3 columns)
const matrix = [
  [1, 2, 3], // Row 0
  [4, 5, 6], // Row 1
  [7, 8, 9], // Row 2
];

console.log(matrix); // * Prints the entire matrix
console.log(matrix[0]); // * Access row 0 → Output: [1, 2, 3]
console.log(matrix[0][1]); // * Access element at row 0, column 1 → Output: 2

// ? Iterating through a 2D array using nested for loop
for (let i = 0; i < matrix.length; i++) {
  // * Outer loop - goes through each row
  for (let j = 0; j < matrix[i].length; j++) {
    // * Inner loop - goes through each column in current row
    console.log(`Element at [${i}][${j}] =`, matrix[i][j]);
  }
}

// TODO: Try changing values inside matrix
matrix[1][1] = 99; // * Replaces 5 with 99
console.log(matrix);

// ? You can also push new rows or columns
matrix.push([10, 11, 12]); // * Add a new row at the end
console.log(matrix);

// @note: JavaScript does not enforce fixed sizes for multidimensional arrays.
// * Each row can have different lengths (jagged arrays)

// ? Jagged array example
const jaggedArray = [[1, 2], [3, 4, 5], [6]];

console.log(jaggedArray);
