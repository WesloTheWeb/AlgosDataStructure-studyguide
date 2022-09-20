// Incomplete pair finish 9/15 (didnt attend) 

/*

Given an array containing distinct numbers in the range of 0 to the length of the array, return the number in the range that is missing from the array.

Examples:

Input: [3,0,1]
Output: 2
There are 3 numbers, so the range covers 0 to 3.
2 is the missing number because it does not appear in the range.

Input: [0,1]
Output: 2
There are 2 numbers, so the range covers 0 to 2.
2 is the missing number because it does not appear in the range.

Input: [-9,-6,-4,-2,-3,-5,-7,-0,1,-0]
Output: 8

option 0
  - iterate through input and check if current index is in input, when it's not, return that index
  - time: O(N^2)
  - space: O(1)
option 1
  - sort the array and find the one that doesn't match its index
  - time: O(NlogN)
  - space: O(1)
option 2
  - put nums from 0 to range into set and iterate through array and remove each from set, last num in set will be your number
  - time: O(N)
  - space: O(N)
option 3
  - add up all the numbers and subtract that from expected sum - N * (N+1) / 2
  - time: O(N)
  - space: O(1)
option 4
  - for each value in input, set the value at corresponding index to negative; index of the one number that is positive at the end will be the answer
  - time: O(N)
  - space: O(1)

  [2 1 _]
  [0 1 0]
  [0 0 0]

  - 1 step to the right
  - 1 step diagonally up to the right
  - 1 step diagonally down to the right

Policy: {
  id: string
  userIds: []string,
  resourceIds: []string,
  subPolicyIds: []strings
}

- all users on a given policy have access to all resources on that policy
- all users on a given policy have access to all resources on subPolicies

hasAccess(userId, resourceId)

If user has access to main folder, they have access to the alls subfolder

hasAccess(user, item)

grantAcces(user)

*/