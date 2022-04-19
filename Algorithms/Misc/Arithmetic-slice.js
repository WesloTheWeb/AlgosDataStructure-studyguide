/**
 * @param {number[]} nums
 * @return {number}
 */
/*APPROACH:
- Iterate over array, check each element to see if difference between two elements is the same.
- Return the number of sub-arrays that are arithmetic

How to find difference between each element? Need to check.

*/
var numberOfArithmeticSlices = function (nums) {
    let count = 0, cur = 0;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            cur += 1;
            count += cur;
        } else {
            cur = 0;
        };
    };
    return count;
};