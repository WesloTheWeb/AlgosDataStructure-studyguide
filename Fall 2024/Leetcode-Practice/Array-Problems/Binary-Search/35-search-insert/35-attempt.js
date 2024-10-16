/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        // found case
        if (nums[i] === target) return i;

        // not found case in between
        if (target < nums[i + 1] && target > nums[i]) {
            return i + 1
        };

        // greater than last element
        if (target > nums[nums.length - 1]) {
            return nums.length;
        };

        // zero case if less than first element
        if (target < nums[0]) return 0;
    };
};

/*
1. iterate over the input array
2. constantly check our target
3. if target is found return the index
4. if target is not found we can use a intermediate check against the target and neighboring elements.
	4a. if it is 2, and is greater than the prev element (1) but less than the next element (2) we can actually insert there because it must be a sorted array, we can return the index of where it would be.
	4b. Same concept if it lies greater than the last element.

time: O(n) n is length of the array
space: O(1) constant because not using any additional data structure.

TODO: This should be a binary search, give away time complexity is O(log n)
*/
