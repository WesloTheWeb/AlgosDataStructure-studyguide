/*##############
PROBLEM: Remove Duplicates
Q. Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

Input: [0, 0, 1, 1, 1, 2, 2].

Your function should modify the list in place so the first 3 elements becomes 0, 1, 2.
*/

function removeDuplicates(arr) {
    let slow = 0;
    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1;
}

/*#####################
EXPLANATION
If we could use extra memory, we can easily solve this by going through the list once and using a hashset to record elements we have seen.
 But we are not allowed extra memory so we have to look at the conditions and see if there's anything we could use. An important condition is that the numbers 
 are sorted, which means the same numbers are next to each other. 
 
 This means as we go through the list, once we see a number A, we will see all occurrences of A together, and will not see A again after we see B. 
 Using this key observation, we can devise a fast/slow pointer solution.

Time Complexity: O(n)

We simply traverse the array once moving from left to right.
####################*/

/*##############
PROBLEM: Remove Duplicates
Q. Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. 
Do this in-place using constant auxiliary space.

Input: [1, 0, 2, 0, 0, 7]
Output: [1, 2, 7, 0, 0, 0]
*/

function moveZeros(nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        // If fast pointer is on a non-zero swap, otherwise keep going.
        if (nums[fast] != 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        };
    };
};

function twoSumSorted(arr, target) {
    arr.sort((a,z) => a - z);
    let left = 0;
    let right = arr.length - 1;
    let pair = [];
    
    while (left < right) {
//         const currentSum = 1 + Math.ceil((right - left) / 2);
//         const currentSum = left + Math.trunc((right - left) / 2);
        const currentSum = Math.floor((left + right) / 2);
        if (currentSum === target) {
            pair.push([arr[left], arr[right]])
        } else if (currentSum > target) {
           right--;
        } else if (currentSum < target) {
            left++;
        };
    };
    
    return pair;
}