/*###############################################################################################
Q. Given a two dimensional array of integers, fold this array over a vertical axis, adding the numbers that meet.
This means that in each row:
-  the first and last numbers are added to become the first element in the output, and
-  the second and second to last become the second element, etc.

3  7  2  4
8  1  9  5

becomes...

 7   9
13  10

satisfies the requirements.
You may assume that every row is the same length, ie, the matrix will be rectangular.

APPROACH:
 [
  [3,  7,  2,  4],
  [8,  1,  9,  5]
 ]
  becomes...
 [
  [ 7 ,  9], 
  [13  10]
 ]

 essentially... 3 + 4 = 7, 5 + 8 = 13 columns

PSEUDO CODE
 

#######################################################################################################*/


function solution(matrix) {
    const result = []
  
    for (let r = 0; r < matrix.length; r++) {
      if (r % 2 === 0) {
        // forwards
        for (let c = 0; c < matrix[r].length; c++) {
          result.push(matrix[r][c])
        }
      } else {
        for (let k = matrix[r].length - 1; k >= 0; k--) {
          result.push(matrix[r][k])
  
        };
      };
    };
  
    return result;
  }
  
  // Test Cases
  const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ];
  
  
  // console.log(solution(matrix)); // true
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > 6) {
      break;Q
    } else {
      console.log(arr[i + 1]) // expect out of bounds error
    }
  
  }