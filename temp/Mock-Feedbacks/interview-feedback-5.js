/*
Q1:

Given an integer array with repeated elements, the task is to find sum of all distinct elements in array
Examples: 
Input  : arr[] = {12, 10, 9, 45, 2, 10, 10, 45, 10};
Output : 78

Input: arr[] = {1, 2, 3, 4}} 
Output: 10


Here we take 12, 10, 9, 45, 2 for sum
because it's distinct elements 
Input : arr[] = {1, 10, 9, 4, 2, 10, 10, 45 , 4};
Output : 71

findings: 
- can be negative
- no input return 0.
- can be sorted, no guaruanteed

Approaches:
- (naive) iterate through the input array plug them to the set
- hash Set to track distinct elements
- from the hash set just add all elements
Time: O(n) n length array
Space: O(m) m length hash set


{12, 10, 9, 45, 2, 10, 10, 45, 10};
left 
                              right

  sort the input array
  [1, 1, 1, 2, 3, 4, 4, 5]
                         i        
              
if left and ri

ght distinct add
left + left + 1

-compare to the one before, unique 
*/

function uniqueSums(arr) {
    let sum = 0;
    const newArr = arr.sort((a,z) => (a - z));
  
    for (let i = 0; i < newArr.length; i++) {
      // beginning
      if (i == 0) {
        sum += newArr[0]
      }
      // as we move
      if (newArr[i] !== newArr[i - 1]) {
        sum += newArr[i]
      }
  
    }
  
    return sum;
  };
  
  /*{12, 10, 9, 45, 2, 10, 10, 45, 10};
  
  [2, 9, 10, 10, 10, 10, 12, 45, 45]
                                  i
                             i -1
  i = 5
  sum: 78
  
  */
  
  /*
  Q2:
  
  Given an array of integers, find a contiguous subarray which has the largest sum.
  The subarray should contain at least one number.
  
  Example
  Example 1:
  Input:
  nums = [−2,2,−3,4,−1,2,1,−5,3]
  Output:
  6
  Explanation:
  the contiguous subarray [4,−1,2,1] has the largest sum = 6.
  
  Example 2:
  Input:
  nums = [1,2,3,4]
  Output:
  10
  Explanation:
  the contiguous subarray [1,2,3,4] has the largest sum = 10.
  
  
  Findings
  - find largest subarray sum
  - can be sorted or not sorted noi guaruanteed
  - can have repeatable numbers
  - null case 0
  -*prefix sum
  - keep record current min. number 
  -deduct min. number
  Approach
  brute force:
  - taking every number iterating each one and comparing the sum
  
  Sliding window 
  [−2, 2, −3, 4, −1, 2, 1, −5, 3]
    s  
          e
  [-2, 0, -3, 1, 0, 2, 3, -2, 1]
          i 
  maxSum = math.max(maxSum, preefix[i]- minV)  
  minV = math.min(minV, prefix[i])
  
  */