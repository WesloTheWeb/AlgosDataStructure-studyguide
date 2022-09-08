/*
Problem:
Given an array of positive integers and a number ‘S,’ find the length of the smallest 
contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

APPROACH: 
1. Add up elements from the beginning of the array until sum becomes greater than or equal to 'S'
2. This is what makes the sliding window since its not fixed. 
If its greater than or equal to 'S', shrink the window from left.
3. Move the window in a stepwise fashion after removal from step 2.
*/

// INITIAL ATTEMPT:
const smallest_subarray_sum = function (s, arr) {
    let minLength = Infinity;
    let windowStart = 0;
    let windowSum = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowSum >= s) {
            minLength = Math.min(windowSum)
        };
        // I am really confused here.
    };

    return 0;
};


// GROKKING SOLUTION
function SOLUTION_smallest_subarray_sum(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // add the next element

        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart]
            windowStart += 1 // sliding the window
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

console.log(`Smallest subarray length: ${SOLUTION_smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`); // 2
console.log(`Smallest subarray length: ${SOLUTION_smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`); // 3 
console.log(`Smallest subarray length: ${SOLUTION_smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`); // 2