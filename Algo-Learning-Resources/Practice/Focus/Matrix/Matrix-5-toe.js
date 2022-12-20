/*#######################################################
Q. A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. 
Given a matrix, return true if it is a Toeplitz matrix and false otherwise.
 
Examples
This is a Toeplitz matrix:

1  2  3  4
5  1  2  3
6  5  1  2
7  6  5  1

This is not a Toeplitz matrix:

1  2  3. 1
2  2  3. 1
1. 2. 2. 1
3. 2. 3. 1

Function Signature
func isToeplitz(input)

APPROACH
 1  2  3  4

 5  1  2  3  
 
 6  5  1  2
 
 7  6  5  1

 boundaries - break and go to next
search all diagonals
  if any diagonal has mismatches values
  return false

matrix = [ [...], [...], [...], [...] ]
matrix[4][0]
undefined[0]

return true

PSEUDO CODE
- outer for loop and then inner for loop
- upperbound length of array outer, innerbound will length within subarray
- within our inner for loop we want to check for matching values
- if mismatch, return false. if matching return true
- we want to down 1, right 1

 isToeplitz
  establish  upperrow/col bounds
  iterate over row
  .  hasEqualValues
  iterate over col
    hasEqualValues
hasEqualValues
  establish upper row/col bounds
  iterate over diagonal
/*#######################################################*/

function isToeplitz(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let row = 0; row < m; row++) {
        if (!hasEqualValues(matrix, row, 0)) return false;
    };

    for (let col = 1; col < n; col++) {
        if (!hasEqualValues(matrix, 0, col)) return false;
    };

    return true;
};


function hasEqualValues(matrix, row, col) {
    const m = matrix.length;
    const n = matrix[0].length;
    const value = matrix[row][col];

    while (row < m && col < n) {
        if (matrix[row][col] != value) return false;

        row = row + 1;
        col = col + 1;
    }

    return true;
}

const toeplitzMatrix = [[1, 2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]];
const nonTopeplitzMatrix = [[1, 2], [2, 2]];

console.log(isToeplitz(toeplitzMatrix), ' is true')
console.log(isToeplitz(nonTopeplitzMatrix), ' is false')