/*#############################################
Leet Code:  https://leetcode.com/problems/missing-number/   (similar)
Q. Given an array containing distinct numbers in the range of 0 to the length of the array, return the number in the range that is missing from the array.

Input: [3,0,1]
Output: 2
There are 3 numbers, so the range covers 0 to 3 

Input: [1]
Output: 0

Input: [0]
Output: 1

Input: [0, 1]
Output: 2

##########################################
Approach 1: O(n) space, O(2n) -> O(n)
##########################################
[] -> [undefined,undefined , 2]
[3,0,1,4,5,6]
        
 0 1   3 4 5 6
[a,b,c,d,e,f,g]

##########################################
**Approach 2:  
Time: O(n) for sum
Space: O(1)
##########################################
[3,0,1,4,5,6], len = 6
0 + 1 + 2 + 3 + 4 + 5 + 6 = 6*7 / 2 = 21
sum = 19

1 + 2 + .. + n = n * (n+1) / 2
ideal_sum = n(n+1)/2

##########################################
Approach 3:
- sort and use some type of hashmap
##########################################
[3,0,1,4,5,6]

[0,1,3,4,5,6]
Output: 2

[4,0,3,2] -> 1
expectedSum = n(n+1)/2 -> 4(5)/2 = 10
sum = sum(arr) = 9
return expectedSum - sum -> 10 -9 = 1

[1] -> 

Clarifications
- min length of nums is 1
- always only one number missing

Pseudo Code  (Approach 2)
0. Initialize vars: expected_sum, actual_sum
1. set expected sum to = n(n+1)/2
3. set actual_sum to Sum of the elements in the array 
5. return  expectedSum - actual_sum

1 2 3 4 5 6 = 21
6 5 4 3 2 1
------------
7 7 7 7 7 7 = 42 / 2 = 21

######################
APPROACH: 2
Time: O(n) for sum
Space: O(1)
######################
*/
function findMissingNumber(nums) {
    // 0. Initialize vars: expected_sum, actual_sum
    // 1. set expected sum to = n(n+1)/2
    // 2. set actual_sum to Sum of the elements in the array 
    let expectedSum = (nums.length * (nums.length + 1) / 2);
    let actualSum = nums.reduce((acc, cV) => acc + cV);

    // 3. return  expectedSum - actual_sum
    return expectedSum - actualSum
};

// test cases
console.log(findMissingNumber([1]), 0); // 0
console.log(findMissingNumber([0]), 0); // 0 
console.log(findMissingNumber([1, 2, 3, 4]), 0); // 0
console.log(findMissingNumber([4, 3, 2, 1]), 0); // 0
console.log(findMissingNumber([4, 0, 3, 2]), 1); // 1
console.log(findMissingNumber([0, 1]), 2); // 2
console.log(findMissingNumber([3, 0, 1, 4, 5, 6]), 0); // 0