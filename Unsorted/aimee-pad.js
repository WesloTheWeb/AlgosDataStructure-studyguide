const _ = require('lodash');

/*

Input: nums = [1,2,3]

[1,2,3]
     i
     j

Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0 
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.

Input: nums = [1,3,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.


Input: nums = [4,-2,-3,4,1]
Output: 59
Explanation: The sum of all subarray ranges of nums is 59.

        total: int = 0
        for i in range(len(nums)):
            total += nums[i] - nums[i]
            for j in range(i, len(nums)):
                print(f'{nums[i]=} {nums[j]=}')
                total += max(nums[i], nums[j]) - min(nums[i], nums[j])
        return total


https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/


subsequence, 2^n-1 subsequences


[1, 2, 3]

1
1,2
1,2,3

2
2,3

3...

*/

const printSubarrays = (nums) => {
  for (let i = 0; i < nums.length; i++) {

      for (let j = i; j < nums.length; j++) {
        console.log(nums.slice(i, j+1))
      }
  }
}

const backtrack = (start, nums, seen, path, paths) => {
   if (start > nums.length) return
  paths.push(path.slice())

  for (let i = start; i < nums.length; i++) {
    if (seen.has(i)) continue
    path.push(nums[i])
    seen.add(i);
    // nums = [1, 2, 3],  [1, 2, 3] 
    backtrack(start + 1, nums, seen, path, paths)
    path.pop()
    seen.delete(i)
  }

}

const powerset = (nums) => {
  const paths = []
  const seen = new Set()
  backtrack(0, nums, seen, [], paths)
  return paths
}

const tests = [
  [1, 2, 3],
  //[1, 2, 3, 4]
]

for (const test of tests) {
//printSubarrays(test)
  console.log(powerset(test))
}

//approach to solving Sum of Subarray Ranges
var subArrayRanges = function(nums) {
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {        
      let max = nums[i];
      let min = nums[i];
      for (let j = i+1; j < nums.length; j++) {
          max = Math.max(max, nums[j]);
          min = Math.min(min, nums[j]);
          sum += max - min;
      }
  }
  return sum;
};