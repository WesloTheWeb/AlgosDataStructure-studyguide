/*#######################################################################################################
Q. Given a matrix of integers, determine if the matrix is monotonically increasing along all rows and all columns.
This means that along every row (left to right) and column (top to bottom),
each successive value is AT LEAST as large as the previous value. For example:

1 1 1 2
1 2 3 3
3 4 5 6
satisfies the requirements.

You may assume that every row is the same length, ie, the matrix will be rectangular.

APPROACH:
- We need to account for left & right and top & bottom.
- Could use something along the line of [x1, y1], and [x2, y2].
- it can account for more than 2 elements i.e [a1, b1, c1, d1, e1] = [a2, b2, c2, d2, e2]
- If x1 < x2 then it is NOT monotonalically increasing

PSEUDO CODE
- iterate horizontally and vertically (double for loops)
- check the index of corresponding column or row if it is less than current element.
- If it is less than the current element then it is NOT monotonically increasing.
- If it has the same value, continue going,
- If next element is greater than current element, it IS monotonically increasing.


NOTE:
There aren't that many patterns. Basically you should be able to iterate through a 2d array in a row-major way or a column-major way. More advanced would be moving through the matrix along other orderings (spiral, diagonals, etc).

7:53 PM
But at the end of the day, it's all about:

Keeping track of two indices (row and column) in an organized matter.
Deciding how to move from one location to the next.
Dealing with the edges.
Deciding what work needs to be done at each visited location.



#######################################################################################################*/

function solution(matrix) {
    for (let col = 0; col < matrix.length; col++) {
        if (matrix[col] < matrix[col + 1]) {
            return false;
        } else {
            true;
        }
        for (let row = 0; row < matrix.length; row++) {

        };
    };
};

// Test Cases
const matrix1 = [
    [1, 2],
    [3, 4]
]; // true
/*
  1  2
  3  4
*/
const matrix2 = [
    [1, 1, 1, 2],
    [1, 2, 3, 3],
    [3, 4, 5, 6]
]; // true

const matrix3 = [
    [1, 2],
    [3, 1]
]; // false

const matrix4 = [
    [5, 2],
    [3, 4]
]; // false
const matrix5 = [
    [5, 2],
    [3, 4]
]; // false

solution(matrix1); // true
solution(matrix2); // true
solution(matrix3); // false
solution(matrix4); // false
solution(matrix5); // false