/*

1 2 3
4 5 6
7 8 9 = 25

1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7

length = 5
length - 1 - i = 5 - 1 - 2 

1 2
3 4 = 10
      c
   0 1 2 3   
0  1 2 3 4
1  5 6 7 8
2  1 2 3 4
3  5 6 7 8 = 36

i = 0, [0][0] and [3][0]

Given a square matrix `mat`, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

function diagonalSum(matrix) {
    let sum = 0;
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
      sum += matrix[i][i];
      if (i !== length - 1 - i) {
        sum += matrix[length - 1 - i][i];
      }
    }
  
    return sum;
  }
  
  console.log(diagonalSum([[1, 2], [3, 4]]), 10);
  console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 25);
  
  
  // Test cases
  const mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  const mat2 = [
    [1, 2],
    [3, 4]
  ]
  
  const mat3 = [
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ]
  
  const mat4 = [];
  
  const tests = [
    [mat1, 25],
    [mat2, 10],
    [mat3, 36],
    [mat4, 0],
  ]
  
  for (const test of tests) {
    const [mat, expected] = test;
    const actual = diagonalSum(mat);
    if (actual !== expected) {
      console.log(`Test failed for matrix: ${mat}. Expected ${expected}, got ${actual}`);
    } else {
      console.log("Test passed!");
    }
  }