/*
PROBLEM:
Q. Given an unsorted array, perform merge sort in ascending order.

Examples:

Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
Given an array: [1] // returns [1]
[execution time limit] 4 seconds (js)

[input] array.integer array

unsorted array of integers

[output] array.integer

sorted array of integers
*/

function solution(array) {
    if (array.length <= 1) {
        return array;
    };

    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2);
    let sortedLeft = solution(left);
    let sortedRight = solution(right);

    return helper(sortedLeft, sortedRight);
};

const helper = (arr1, arr2) => {
    let res = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            res.push(arr1[i1])
            i1 += 1;
        } else {
            res.push(arr2[i2])
            i2 += 1;
        };
    };

    // Use of spread operator as copies
    return [...res, ...arr1.slice(i1), ...arr2.slice(i2)];
};

