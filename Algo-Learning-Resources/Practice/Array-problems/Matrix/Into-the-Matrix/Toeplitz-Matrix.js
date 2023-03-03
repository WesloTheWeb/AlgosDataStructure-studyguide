/**
QUESTION:
A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. 
Given a matrix, return true if it is a Toeplitz matrix and false otherwise.

EXAMPLE(S)
This is a Toeplitz matrix:
1  2  3  4
5  1  2  3
6  5  1  2
7  6  5  1

let col, row
 for 
  checkdiagonals on row +1, 0
  checkdiagonals on col 0, +1

diagonals

level-by-level, shifted
1  2  3 ignore last
ignore first 1  2  3 

1. define a function to get the diag of any coordinate (within bounds)
2. start at the top left corner
3. keep getting the diagonals until you hit the bound and check equality
  3a. return false if they're not equal
4. repeat for all elements of the first row until and not including the last

 */

// target: 20m
function isToeplitz(matrix) {
    // row
    for (let i = 0; i < matrix[0].length; i++) {
      if (!checkDiagonals(0, i)) return false
    };
  
    // cols
    for (let i = 1; i < matrix.length; i++) {
      if (!checkDiagonals(i, 0)) return false
    };
  
    return true;
  
    // recursively check diagonals
    // O(d) for diagonal stack
    function checkDiagonals(x, y) {
      const nextVal = matrix[x + 1]?.[y + 1]
      // if not in bounds, we made it
      if (nextVal === undefined) return true
      if (nextVal !== matrix[x][y]) return false
      
      return checkDiagonals(x + 1, y + 1)
    };
  };
  
  console.log(isToeplitz([
    [1, 2, 3, 4],
    [5, 1, 2, 3,],
    [6, 5, 1, 2,],
    [7, 6, 5, 1,]
  ])); // -> true

  console.log(isToeplitz([
    [1, 2, 3, 4],
    [5, 1, 2, 3,],
    [6, 5, 1, 2,],
    [7, 6, 5, 4,]
  ])); // -> false
  
  console.log(isToeplitz([
    [1, 2, 3, 4]
  ])); // -> true