/*#####################################################################################
Q. Given a two dimensional matrix (NxM), a size A such that A is less than both N and M, and an offset X, Y, 
return a new matrix that is the sub-matrix of the original. The size of the new matrix is AxA (square) and 
the values should be those in the original matrix starting at position indicated by the offset (X, Y). 

For example for an input matrix:

1 2 3
4 5 6
7 8 9
Size is 2 and offset is (0, 1), the expected output is:

2 3
5 5
Because the output is size 2x2 and is taken from a submatrix whose top left corner is at (0, 1) in the original.

Return an empty array if a square of the required size is not possible at starting at the given offset. The input matrix can be assumed to be a consistent rectangle (all rows are the same length).
##########################################################################################

/* THOUGHT PROCESS
Matrix of (NxM) size A, less than both N & M

new matrix size is A x A (square) values same of original starting at position by offset

matrix = [1,2,3,4,5,6,7,8,9] size = 3 x = 0, y = 0
1   2   3
    x
    
4   5   6


7   8   9

Size is 2 and offset is (0, 1), the expected output is:

2   3
5   5

matrix, size, x, y  where "x" and "y" is the offset.

cutting the size of the matrix via offset

APPROACH:
- Offset (x) and (y) will be the number we land on in the array
- how write function to do this?*****
*/

function solution(matrix, size, x, y) {
    let newMatrix = [];


    return newMatrix;
}

// test matrices
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]


// Test Cases matrix(matrix, a, x, y)
console.log(solution(matrix, 2, 1, 1)); // [[5,6],[8,9]]
console.log(solution(matrix, 2, 0, 1)); // [[2,3],[5,6]]
console.log(solution(matrix, 3, 0, 0)); // [[2,3],[5,6]]
console.log(solution(matrix2, 3, 1, 0)); 
// [[5,6,7], 
// [9,10,11], 
// [13,14,15]]
