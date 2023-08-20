/*
'''
Given a matrix, return an array representing the traversal of the matrix in spiral order. Starting in the top left, move right, then down, then left, then up and the progress inward.

Some problem are \"tricky\" ones where you have to notice something clever. Sometimes, however, problems are all about demonstrating mastery of your language and being able to manipulate basic data structures. This problem is all about mastering basic counting loops and strategically moving around a two dimensional matrix.
 

EXAMPLE(S)
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 
let matrix6 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]
[1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]


let matrix4 = [
 [1, 2],
 [3, 4],
 [5, 6],
 [7, 8]
]

[1, 2, 4, 6, 8, 7, 5, 3]


Findings:
- always clockwise direction
- when we reach an edge we change directions
- keep traversing until processed all elements in the matrix.
- traverse by row  then column, row, column, row
- do not code same cycle, matrix shrinking (i.e cover outer boundary wont cover same boundary again)

Appoaches:                          
 outer loop: row
   inner loop:  col

- since clockwise always starting at m[r][c] up to m[r][m[c.length -1] (first row)  r = 0, c = 0
- (last column) m[r + 1][c.length - 1] 
- (next: row will change, column same)
[        v
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 
FUNCTION SIGNATURE
function spiralOrder(matrix) { // returns a 1D array
def spiralOrder(matrix: list[list[int]]) -> list[int]:
'''

Time: O(n x m) n = # rows, m = # cols
Space: O(n x m) n = # rows, m = # cols
*/

function spiralOrder(matrix) { // returns a 1D array
    let results = [];
    // outer loop
    // 
    // t.c => 
    // [     v
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9]
    // ]
    // Four pointers
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    
    while (left <= right && top <= bottom) {
      // print the first row
      for (let i = left; i <= right; i++) {
        results.push(matrix[top][i]);
      }
      top++;
  
      // print the last column
      for (let i = top; i <= bottom; i++) {
        results.push(matrix[i][right])
      }
      right--;
  
      // print the last row
      for (let i = right; i >= left; i--) {
        results.push(matrix[bottom][i])
      };
  
      bottom--;
      // print the first column
      for (let i = bottom; i >= top; i--) {
        results.push(matrix[i][left]);
      }
      left++;
    }
  
    return results;
  }
  
  console.log(JSON.stringify(spiralOrder([[1]]))
    === JSON.stringify([1]))
  
  let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  console.log(JSON.stringify(spiralOrder(matrix1))
    === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]))
  let matrix2 = [
    [1, 2],
    [3, 4]
  ]
  console.log(JSON.stringify(spiralOrder(matrix2))
    === JSON.stringify([1, 2, 4, 3]))
  
  let matrix3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ]
  console.log(JSON.stringify(spiralOrder(matrix3))
    === JSON.stringify([1, 2, 3, 4, 8, 7, 6, 5]))
  
  let matrix4 = [
   [1, 2],
   [3, 4],
   [5, 6],
   [7, 8]
  ]
  console.log(JSON.stringify(spiralOrder(matrix4))
    === JSON.stringify([1, 2, 4, 6, 8, 7, 5, 3]))
  
  let matrix5 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
  ]
  console.log(JSON.stringify(spiralOrder(matrix5))
    === JSON.stringify([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]))
  
  let matrix6 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  console.log(JSON.stringify(spiralOrder(matrix6))
    === JSON.stringify([1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]))
    
  let matrix7 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  console.log(JSON.stringify(spiralOrder(matrix7)))