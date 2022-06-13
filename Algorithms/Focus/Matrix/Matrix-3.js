/*###############################################################################################
Q. Given an NxM matrix of integers, return the smallest average value among the columns. 
Round the average values down to the nearest whole number.

1  5
8  7

Returns 4 since the average of the first column is 4.5 (round down to 4), but the 
second column's average is 6.

The matrix will be at least 1x1.

APPROACH:
 

PSEUDO CODE
 
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
    const averageArr = [];

    for (let col = 0; col < matrix[0].length; col++) {
        let runningSum = 0;
        for (let row = 0; row < matrix.length; row++ ) {
            runningSum += matrix[row][col];
        };
        averageArr.push(Math.floor(matrix[row][col] / runningSum))
    };

};

// Test Cases
const matrix1 = [
    [1,5],
    [8,7]
] // 4

const matrix2 = [
    [1],
    [2]
] // 1


console.log(solution(matrix1)); // true
