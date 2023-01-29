/*################################################
PROBLEM 9:
Status: Cheesed
Q. Given a non-empty array of integers, return the maximum sum by adding up all of the integers in 
a non-empty subarray of the input array.

A subarray must only contain adjacent numbers.

Examples:

Given an array: [-2, 1] // returns 1
Given an array: [3, 4, -6, 7, 9] // returns17 (3 + 4 + (-6) + 7 + 9)
[execution time limit] 4 seconds (js)

[input] array.integer array

[output] integer

maximum sum

##################################################*/

 
/* APPROACH
 

*/

// Function:
function solution(array) {
    let max = array[0];
    let currentSum = array[0];
    
    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        max = Math.max(max, currentSum);
    };
    
    return max;
};