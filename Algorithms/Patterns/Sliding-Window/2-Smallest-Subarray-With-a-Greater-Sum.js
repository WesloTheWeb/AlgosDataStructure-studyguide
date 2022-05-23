/*#########################
Question:
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray 
whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2

Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7
Output: 1

Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8
Output: 3

Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].
###########################*/

//############
//SOLUTION
//############
function smallest_subarray_sum(s, arr) {
    let minLength = Infinity;

    for (let windowStart = 0; windowStart < arr.length; windowStart++) {
        let windowSum = 0;
        let windowEnd = windowStart;

        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (windowEnd < arr.length) {
            windowSum += arr[windowEnd]; // add the next element
            if (windowSum >= s) {
                minLength = Math.min(minLength, windowEnd - windowStart + 1);
                break;
            };
            windowEnd += 1;    // sliding the window
        };
    };

    if (minLength === Infinity) {
        return 0;
    };
    return minLength;
};

console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(167, [84, -37, 32, 40, 95])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);

/*#########################################
EXPLANATION
Time Complexity
The time complexity of the above algorithm will be O(N).
The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)
O(N+N), which is asymptotically equivalent to O(N).

Space Complexity#
The algorithm runs in constant space O(1).
###########################################*/