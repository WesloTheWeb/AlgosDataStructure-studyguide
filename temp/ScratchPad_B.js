/*################################################################
https://javascript.plainenglish.io/how-to-traverse-a-matrix-largest-elements-in-their-rows-columns-e48621ce1f6e

Q. You are given a two-dimensional list of integers matrix containing 1s and 0s. Return the number of elements in matrix such that:

matrix[r][c] = 1
matrix[r][j] = 0 for every j ≠ c and matrix[i][c] = 0 for every i ≠ r

Before we dive in, let’s do a little pseudocode & see how our code might look in plain English:

1. Instantiate a variable called count. This will be our output at the end of our function

2. Set up a outer for loop that will iterate the length of the matrix, or in other words, the number of sub-arrays in our array

3. Set up a inner for loop that will iterate the length of a sub-array (remember, all of our sub-arrays have the same length)

4. If matrix[i][j] is equal to 1, we will need to count the total number of 1’s in that sub-array. We will store the frequency counter in a hash called rowFreq.

5. If rowFreq[1] (that is, the total frequency of 1 in that row) is equal to 1, we will need to count the total number of 1’s in that index of each sub-array. We will store the frequency counter in a hash called columnFreq.

6. If our columnFreq[1] is equal to 1, we can conclude that it’s the only 1 in its row & in its column, and increase our count by 1.

#################################################################*/

// const solution = (matrix) => {

//   let count = 0;

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < col[row].length; col++) {
//       if (matrix[row][col] == 1) {
//         count++;
//         // incorporate hash map
//       }
//     };
//   };
// };

// function matrixElements(matrix) {
//   let count = 0;
//   const rowLength = matrix[0].length;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < rowLength; j++) {
//       if (matrix[i][j] === 1) {
//         const rowFreq = {};
//         // adding to our hashmap
//         matrix[i].forEach(num => {
//           rowFreq[num] ? rowFreq[num] += 1 : rowFreq[num] = 1;
//         });

//         if (rowFreq[1] === 1) {
//           const columnFreq = {};
//           matrix.forEach(row => {
//             columnFreq[row[j]] ? columnFreq[row[j]] += 1 : columnFreq[row[j]] = 1;
//           })

//           if (columnFreq[1] === 1) {
//             count += 1;
//           };
//         };
//       };
//     };
//   };

//   return count;
// }


/*##############################################################
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in vertical zigzag order (see examples below) starting from the top left element

Examples:
Input1:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Output1:
[1, 4, 7, 8, 5, 2, 3, 6, 9]
Input2:
[
[1, 2, 3],
[4, 5, 6]
]
Output2: [1, 4, 5, 2, 3, 6]
##############################################################*/

function solution(matrix) {
    const result = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
          result.push(matrix[i][j]);
        } else
        result.push(matrix[j][i]);
  
      }
    }
  
    return result;
  }
  
  // console.log(solution(matrix));
  
  // test cases
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  console.log(solution(input));
  // [1, 4, 7, 8, 5, 2, 3, 6, 9]
  