/* #########################################
SPIRAL MATRIX SECTION 
######################################### 
QUESTION:
Write a function that traverses a matrix in a spirial fashion.

1. The matrix is a square matrix.
2. The matrix is a m * n rectangle
3. Given an integer n, create a n x n that is formed in a spiral order
4. Same as 3, but with a m * n matrix

#######################################
PROBLEM 1: The matrix is a square matrix?
[
 [1,2,3],
 [4,5,6],
 [7,8,9]
] 
 => [1,2,3,6,9,8,7,4,5]

 APPROACH
 1. keep track using top, bottom, left, right. 
 2. Iterate through each row and column individually - order: top, right, bottom, left.
 3. Increment if top or left and decrement if bottom or right.

 PSEUDO CODE:
    def spiral(matrix):
        top = 0
        bottom = len(matrix)
        left = 0
        right = len(matrix[0])
        res = []

        while left <= right:
            # top row 
            for i in range(left, right):
            res.append(matrix[top][i]
            top += 1

            # right column
            for i in range(top, bottom):
                res.append(matrix[i][right - 1]
            right -= 1

            # bottom row
            for i in range(right-1, left-1, - 1):
                res.append(matrix[bottom-1][i]
            bottom -= 1
        
            # left column
            for i in range(bottom-1, top-1, - 1):
                res.append(matrix[i][left]
            left += 1

        return res
#########################################*/

function spiralMatrix(matrix) {

  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let top = 0;
  const result = [];

  while (left <= right && top <= bottom) {
    // moving right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }

    // moving down
    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right])
    }

    // moving left
    // console.log(top, bottom)
    for (let i = right - 1; i >= left && top !== bottom; i--) {

      result.push(matrix[bottom][i]);
    }

    // moving up
    for (let i = bottom - 1; i >= top + 1 && left !== right; i--) {
      result.push(matrix[i][left])
    }
    top++;
    left++;
    right--;
    bottom--;
  };

  return result;
};

// Test cases
const testCase =
  [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ]

const testCase2 = [
  [1, 2, 3],
  [4, 5, 6]
]

const testCase3 = [
  [1, 2, 3]
]

const testCase4 = [[1]];

const testCase5 = [[1], [2], [3]]

const testCase6 = [
  [1, 2],
  [3, 4],
  [5, 6]
] // [1,2,4,6,5,3]

const testCase8 = [
  [2, 3, 1, 6],
  [9, 0, 4, 8],
  [3, 4, 9, 2],
  [3, 6, 7, 8],
  [4, 3, 2, 6]
]

const triangle = [
  [1],
  [2, 3],
  [4, 5, 6]
]; // [1, 3, 6, 5, 4, 2]

console.log(spiralMatrix(testCase)) // 3 x 3
console.log(spiralMatrix(testCase2)) // 2 x 3
console.log(spiralMatrix(testCase3)) // 1 x 3
console.log(spiralMatrix(testCase4)) // 1 x 3
console.log(spiralMatrix(testCase5)) // 1 x 1
console.log(spiralMatrix(testCase6)) // 3 x 2
console.log(spiralMatrix(testCase8)) // 3 x 2
  // check the boundaries when we completed 1 cycle.