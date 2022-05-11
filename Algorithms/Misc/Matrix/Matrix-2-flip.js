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

};

// Test Cases
const matrix1 = [
    [1], [2]
]; // [[1], [2]]


console.log(solution(matrix1)); // true
