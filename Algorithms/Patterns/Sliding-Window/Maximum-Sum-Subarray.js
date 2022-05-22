/*#########################
Question:
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2: 
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

###########################*/

const max_sub_array_of_size_k = function (k, arr) {
    let result = [];
    let windowEnd = 0
    let windowSum = 0;

    // Moving our window
    for (let windowStart = 0; windowStart - k < arr.length; windowStart++) {
        // check 
        if (arr[windowStart] >= k - 1) {
            windowSum = (arr[windowStart] / k);
            result.push(windowSum);
            // moves the pointer
            windowEnd += 1;
            windowStart -= 1;
        };
    };
    return result;
};



// Brute Force Approach

const brute_force_max_sub_array_of_size_k = (k, arr) => {
    // Set up max sum and current sum
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < arr.length - k + 1; i++) {
        windowSum = 0;
        for (let j = i; j < i + k; j++) {
            windowSum += arr[j];
        }
        // take the greatest of the two:
        maxSum = Math.max(maxSum, windowSum);
    };
    return maxSum;
};