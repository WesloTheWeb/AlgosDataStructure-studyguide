/* 1.
Q. Given a shifted sorted array of distinct integers and a target integer, determine if the array contains a target value by returning its index. Otherwise, return -1.

Elements in the array are shifted by some amount (left or right).
Examples:

Given an array: [6, 7, 1, 2, 3, 4, 5], target: 1 // returns: 2
Given an array: [9, 15, 30, -33, 3, 7], target: 0 // returns: -1
[execution time limit] 4 seconds (js)

[input] array.integer array

shifted and sorted array of integers

[input] integer target

[output] integer

index of the target value if exists 

*/

function solution(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;    
    };
    
    return -1;
}


/* 2.\
 Q. Given a non-empty array of integers, return the maximum sum by adding up all of the integers in a non-empty subarray of the input array.

A subarray must only contain adjacent numbers.
Examples:

Given an array: [-2, 1] // returns 1
Given an array: [3, 4, -6, 7, 9] // returns17 (3 + 4 + (-6) + 7 + 9)
[execution time limit] 4 seconds (js)

[input] array.integer array

[output] integer

maximum sum 

*/

function solution(array) {
    let sum = 0;
    
    sum = (array.reduce((acc, cV) => (acc) + cV));
    
    return sum;
};



/* 3.  Q. Given two sorted arrays of integers with possibly different sizes, return the median of the two sorted arrays.

You may assume there are no duplicate elements.
Examples:

Given array1: [1, 3], array2: [2] // returns 2
Given array1: [1, 3], array2: [2, 4] // returns 2.5
Given array1: [], array2: [0] // returns 0
[execution time limit] 4 seconds (js)

[input] array.integer array1

[input] array.integer array2

[output] float

median
*/

function solution(array1, array2) {
    
    let medianArr1 = array1.reduce((acc, cV) => acc + cV) / array1.length;
    
    let medianArr2 = array2.reduce((acc, cV) => acc + cV) / array2.length;

    let median = medianArr1 + medianArr2;
    
    return median;
};