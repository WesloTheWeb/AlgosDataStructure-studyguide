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
 

PSEUDO CODE
 

#######################################################################################################*/

function solution(matrix) {
    let foldedMatrix = [];

    for (let row = 0; row < matrix.length; row++) {
        let innerColumns = [];
        let left = 0;
        let right = matrix[0].length - 1;

        while (left <= right) {
            if (left === right) {
                innerColumns.push(matrix[row][left]);
            }
            else {
                innerColumns.push(matrix[row][left] + matrix[row][right]);
            }
            left += 1;
            right -= 1;
        };
        foldedMatrix.push(innerColumns)
    };

    return foldedMatrix;
};

// Test Cases
const matrix1 = [
    [1], [2]
]; // [[1], [2]]

const matrix2 = [
    [3, 7, 2, 4], [8, 1, 9, 5]
]; // [[1], [2]]

console.log(solution(matrix1)); // true
console.log(solution(matrix2)); // true