/*###############################################################################################
Q. Given a matrix of integers, determine if the matrix is monotonically increasing along all rows and all columns.
This means that along every row (left to right) and column (top to bottom),
each successive value is AT LEAST as large as the previous value. For example:

1   1   1   2

1   2   3   3

3   4   5   6

satisfies the requirements.
You may assume that every row is the same length, ie, the matrix will be rectangular.

APPROACH:
- We need to account for left & right and top & bottom.
- We are able to do this by going right, bottom.
- If conditions are not meant we return false
- Account for the edge cases of undefined.

PSEUDO CODE
- iterate horizontally and vertically (double for loops)
- check the index of corresponding column or row if it is less than current element.
- If it is less than the current element then it is NOT monotonically increasing.
- If it has the same value, continue going,
- If next element is greater than current element, it IS monotonically increasing.

NOTE:
There aren't that many patterns. Basically you should be able to iterate through a 2d array in a row-major way or a column-major way. 
More advanced would be moving through the matrix along other orderings (spiral, diagonals, etc).
But at the end of the day, it's all about:

Keeping track of two indices (row and column) in an organized matter.
Deciding how to move from one location to the next.
Dealing with the edges.
Deciding what work needs to be done at each visited location.             

#######################################################################################################*/

function solution(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            // Check the right cell
            if (matrix[row][col + 1] !== undefined && matrix[row][col] > matrix[row][col + 1]) {
                return false;
            };
            // Check the bottom cell
            // matrix[row] && matrix[row][col] && ....
            if (matrix[row + 1] !== undefined && matrix[row][col] > matrix[row + 1][col]) {
                return false;
            };
        };
    };
    return true;
};

// Test Cases
const matrix1 = [
    [1, 2],
    [3, 4]
]; // true

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

console.log(solution(matrix1)); // true
console.log(solution(matrix2)); // true
console.log(solution(matrix3)); // false
console.log(solution(matrix4)); // false
console.log(solution(matrix5)); // false