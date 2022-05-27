// leetcode problem: https://leetcode.com/problems/toeplitz-matrix/
/* 
Q. Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
          col
       0  1  2  3
    0  1  2  3  4

row 1  5  1  2  3

    2  9  5  1  2
               
visited = set((0, 0), (1, 1), ....)

Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Input: matrix = [[1,2],[2,2]]

1  2

2  2

Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

APPROACH

          col
       0  1  2  3
    0  1  2  3  4

row 1  5  1  2  3

    2  9  5  1  2

       F  F  F  F
       F  F  F  F
       F  F  F  F
*/

function isToeplitz(matrix) {
  let visited = new Array(matrix.length).fill(new Array(matrix[0].length).fill(false))
  // console.log(
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // starting top left row
      let topLeft = matrix[row][col]
      let r = row
      let c = col
      // increment row by 1 and col by 1 to get to the next bottom right - making sure we're within bounds of the matrix row and col
      // also want to check if we already evaluated that cell, only enter cell if we have not visited yet
      while (r < matrix.length && c < matrix[0].length) {
        // this is the "next" bottom right cell
        let nextDiag = matrix[r][c]
        // found value where the immediately previous top left value is different, is not Toeplitz
        if (topLeft != nextDiag) {
          return false;
        }
        // mark this one as visited
        // visited[r][c] = true
        // now this becomes the "current" top left
        topLeft = nextDiag

        r += 1
        c += 1
      }
      /*
      true,true,true,false,false,false,false,
      true,true,true,false,false,false,false,
      true,true,true,false,false,false,false
      */

    }
  }

  return true
}

// function isToeplitz(matrix) {
//   const auxArr = [];
//   for (let row = 0; row < matrix.length - 1; row++) {
//     while() {
//           // do our checks
//           /*
//           while row and col are still valid
//             is matrix[row + 1][col + 1] == matrix[0][0]
//               - if not, return false
//             row = row + 1
//             col = col + 1 
//           */
//           let isEqual = hasEqualValues(matrix, row, col);
//           let isItStillEqual = isStillEqual(auxArr, matrix, row);
//           if (isEqual && isItStillEqual) {
//               auxArr.push(col);
//           } else {
//               return false;
//           }
//       };
//   };
//   return true;
// };

// const hasEqualValues = (matrix, row, col) => {
//   let nextNumberOfCols = matrix[row + 1] ? matrix[row + 1].length : undefined;
//   let first = matrix[row][col];
//   let next = col + 1 >= nextNumberOfCols ? undefined : matrix[row + 1][col + 1];
//   if (first || next) {
//       if (first === next) {
//           return true;
//       } else {
//           return false;
//       }
//   } else {
//       return true;
//   }
// };

// const isStillEqual = (auxArray, matrix, row) => {
//   let first = matrix[row][auxArray[auxArray.length - 1]];
//   let next = matrix[row + 1][auxArray[auxArray.length - 1] + 1];
//   if (first === next) {
//       return true;
//   } else {
//       return false;
//   }
// }

console.log(isToeplitz(
  [
    [36, 59, 71, 15, 26, 82, 87],
    [56, 36, 59, 71, 15, 26, 82],
    [15, 0, 36, 59, 71, 15, 26]
  ])); // false

console.log(isToeplitz([[11, 74, 0, 93], [40, 11, 74, 7]])); // false
console.log(isToeplitz([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); // true
console.log(isToeplitz([[1, 2], [2, 2]])); // false

/*
11  74  0  93
40  11  74  7
*/