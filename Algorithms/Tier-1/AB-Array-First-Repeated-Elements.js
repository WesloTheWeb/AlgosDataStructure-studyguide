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
/*##################################
MORE OPTIMIZED SOLUTION
###################################*/
function firstKTimes(array, k) {

    const countMap = new Map();

    if (!array) return -1;

    for (const el of array) {
        // we've seen this element before
        if (countMap.has(el)) {
            // being inside this if means we've seen this element before
            // key = el
            let existing_value = countMap.get(el);
            let new_value = existing_value + 1;
            countMap.set(el, new_value);
        }
        // we have _not_ seen this element before - this is the first time we're seeing this element.
        else {
            countMap.set(el, 1);
        }
        // check, has the current element occurred K times yet? 
        if (k === countMap.get(el)) return el;
    }
    return -1;
};

// SOLUTION
function firstKTimes(array, k) {
    const counts = new Map();

    for (const el of array) {
        const count = (counts.get(el) || 0) + 1;
        if (count === k) return el;
        counts.set(el, count);
    };

    return -1;
};

// Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)); // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)); // -1
console.log(firstKTimes([], 1)); // -1

// NOTE TO SELF: Study Dictionaries JS