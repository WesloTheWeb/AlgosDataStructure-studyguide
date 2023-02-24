/*
'''
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.  

Write-up: https://leetcode.com/problems/subarray-sum-equals-k/
 

EXAMPLE(S)
countSubarraySum([1, 2, 3], 3) == 2 because (1,2), (3)
countSubarraySum([1, 2, 3, 4, 5, 6], 6) == 2 because (1,2,3) or (1,2,3), (6) (6)
countSubarraySum([6, 3, 2, 1, 2, 2], 9) == 2 because (6,3)

edge cases:
countSubarraySum([1, 2, 3], 8) == 0 because no integers to equal k
countSubarraySum([1, 2, 3], -1) == 0 because no integers to equal k
countSubarraySum([], 3) == 0 because no integers to equal k

negative nums in array?

APPROACHES:
1. moving sliding window as iterate the array 
  - compare each element in window sum to k

2. binary search approach, 
  - will sort (o log n)

Pseudo code:
- create count variable
- create two pointers, beginning and the other one ahead
  - iterate through the array, compare sums to k
    if arr[i] < k move the right pointer
    if arr[i] > k move the left pointer
  - increment count when we are equal to k
  - return count.

[1, 2, 3], 3
 l
    h


OPTION 1: Sldiing Window
[1, 2, 3, 4, 5, 6], 6
                l
                h

count: 2

[1, 2, 3, 4, 5, 6], 6
    l
          h


OPTION 2: Binary Search
[1, 2, 3, 4, 5, 6], 6
 l     
       m
                h
       
[1, 2, 3, 4, 5, 6], 6
l     
       m
       h
       
count: 1

[1, 2, 3, 4, 5, 6], 6
    l
          h

FUNCTION SIGNATURE
func numSubarrays(input: [Int], target: Int) -> Int
'''
*/

function countSubarraySum(nums, k) {
    let currSum = 0;
    const seenSums = {0: 1};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        count += seenSums[currSum - k] || 0;
        seenSums[currSum] = (seenSums[currSum] || 0) + 1;
    }
    return count;
  }
  
  function numSubarrays(arr, k) {
    let left = 0;
    let right = 0;
    let runningCount = 0
    let numOfContinousSubArrays = 0;
  
    while (arr[right]) {
  
       for (let i = left; i <= arr[right]; i++) {
        runningCount += arr[i];
      }
  
      if (runningCount < k) {
        left = left += 1;
      } else {
        right = right -= 1;
      }
  
    }
  
    return numOfContinousSubArrays;
  };

/*################################################################################################
FEEDBACK:
+ Good job identifying the question and examples
+ Lay down of approach and pseudo code

- Can use more practice with sliding window
- Look up Kadane algorithm

NEXT STEPS:
- See this problem through both in this example and the accompanying leetcode
- watch solution video
- chatGPT to verify.




################################################################################################


*/