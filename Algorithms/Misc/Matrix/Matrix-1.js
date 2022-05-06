/*#######################################################################################################
Q. Given a matrix of integers, determine if the matrix is monotonically increasing along all rows and all columns.
This means that along every row (left to right) and column (top to bottom),
each successive value is AT LEAST as large as the previous value. For example:

1 1 1 2
1 2 3 3
3 4 5 6
satisfies the requirements.

You may assume that every row is the same length, ie, the matrix will be rectangular.
#######################################################################################################*/

function solution(matrix) {

};

// Test Cases
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[1, 1, 1, 2],
[1, 2, 3, 3],
[3, 4, 5, 6]]

const matrix3 = [[1, 2], [3, 1]];
const matrix4 = [[5, 2], [3, 4]];
const matrix5 = [[5, 2], [3, 4]];

solution(matrix1); // true
solution(matrix2); // true
solution(matrix3); // false
solution(matrix4); // false
solution(matrix5); // false