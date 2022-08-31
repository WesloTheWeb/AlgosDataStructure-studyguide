/* Office Hour - Algo Marathon
Date: 08/30/2022
PARTNERS: Kathy P.

QUESTION:
Given an array of integers, return maximum subarray sum. A subarray is any contiguous set of numbers. 
If the input array has at least one element, then the shortest subarray should include at least one element.

APPROACH:
- Two pointers / sliding window
- have a variable for the running sum, we want the maximum sum. 
runningSum and a maxSum and if the runningSum > maxSum then becoems the new maxSum

[1, 2, 3]
p
         p2

1 + 2 + 3 = 6
2 + 3 = 5
3 = 3

Math.max(runningSum, maxSum)


PSEUDO CODE:


Time Complexity: O(n)
Space Complexity: O(1)
#########################################*/

// Our attempt:
function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
  
    // let pointer1 = 0;
    // let pointer2 = pointer1 + 1;
  
    for (let i = 1; i < nums.length; i++) {
      // currentSum = nums[i] + nums[i + 1]
      currentSum = Math.max(nums[i], currentSum + nums[i])
      // console.log(currentSum)
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
  
    };
    // console.log(maxSum, currentSum)
  
    return maxSum;
  };

// Test Cases:
// [] => 0
// [1, 2, 3] => 6
// [-1, -2, -3] => -1
// [2, 2, -3, 6, -10, 4] => 7 // [2, 2, -3, 6]


// Solution: 
function FormationMaxSubarraySum(nums)  {
  if (nums.length === 0) {
    return 0;
  }
  let currentSum = 0;
  let globalSum = nums[0];
  
  for (const num of nums) {
    currentSum = Math.max(num, currentSum + num);
    globalSum = Math.max(globalSum, currentSum);
  }
  
  return globalSum;
};


// Solution Test Cases:

console.log(maxSubarraySum([])); // 0
console.log(maxSubarraySum([1, 2, 3])); // 6
console.log(maxSubarraySum([-1, -2, -3])); // -1