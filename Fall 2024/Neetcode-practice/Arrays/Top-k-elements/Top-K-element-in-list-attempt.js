class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        const results = [];

        for (let num of nums) {
            if (countMap.has(num)) {
                countMap.set(num, countMap.get(num) + 1)
            } else {
                countMap.set(num, 1);
            }
        };

        const sortedArr = Array.from(countMap.values()).sort((a, b) => b - a);

        for (let i = 0; i < k; i++) {
            results.push(sortedArr[i]);
        };

        return results;
    };
};

// APPROACH:
// 1. Create a countMap as we iterate over the array and result array
// 2. record number of times element appears
// 3. create a counted array that is sorted (o(n log n)) greatest - least
//     3a run for loop of K times to push into results array from sorted.
// 4. push the number of elements (k) into result array
// */


/*
- k tells us the number to return in output, k is most frequent.
if it was k = 2, our output expects an array of 2 numbers.

Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

null case returns 0 or empty array if not valid.

edge case: [1,2,3,4,5,6,7], k = 1
return 

return in any order. May or may not be sorted. 
but num value doesnt matter

APPROACH:
1. Create a countMap as we iterate over the array and result array
2. record number of times element appears
3. create a counted array that is sorted (o(n log n)) greatest - least
    3a run for loop of K times to push into results array from sorted.
4. push the number of elements (k) into result array
*/
