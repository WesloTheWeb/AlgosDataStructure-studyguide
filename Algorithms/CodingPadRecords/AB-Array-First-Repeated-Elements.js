/*##################################################################################
TAG: Find First Element Repeated K Times - 2m
#####################################################################################

Q. Given an array of positive integers, find the first element that occurs k number of times. 
If no element occurs k times, return -1, and you may assume k is greater than 0. 

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1
*/

// O(N) time
function firstKTimes(array, k) {
    const counts = new Map();

    for (const el of array) {
        const count = (counts.get(el) || 0) + 1;
        if (count === k) return el;
        counts.set(el, count);
    };

    return -1;
};

// Completion Time: Record Time Here...
// Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)); // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)); // -1
console.log(firstKTimes([], 1)); // -1

// NOTE TO SELF: Study Dictionaries JS