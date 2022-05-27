/*####################
PROBLEM: Toeplitz matrix (ATTEMPT)

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


 APPROACH
 1  2  3  4

 5  1  2  3  
 
 6  5  1  2
 
 7  6  5  1
            *
 search all diagonals
  if any diagonal has mismatches values
  return false

  PSEUDO CODE
- outer for loop and then inner for loop
- upperbound length of array outer, innerbound will length within subarray
- within our inner for loop we want to check for matching values
- if mismatch, return false. if matching return true
- we want to down 1, right 1
*/

// isToeplitz
// establish  upperrow/col bounds
// iterate over row
//.  hasEqualValues
// iterate over col
//   hasEqualValues
// hasEqualValues
// establish upper row/col bounds
// iterate over diagonal

function isToeplitz(input) {
    //outer
    for (let col = 0; col < input.length; col++) {
      // inner
      for (let row = 0; row < input[col].length; row++) {
        // checks
        hasEqualValues(input, col, 0);
        hasEqualValues(input, 0, row);
      };
    };
  
    return true;
  };
  
  const hasEqualValues = (matrix, col, row) => {
    // get upper col index of matrix - matrix.length
    // get upper row index of matrix - matrix[0].length
    // get the value to check against, e.g. matrix[row][col]
    // 
    // while (row < matrix[0].length && col < matrix.length)
    while (row < matrix[0].length && col < matrix.length) {
      if (matrix[col][row] !== matrix[col + 1][row + 1]) {
        return false;
      };
    };
  
  };