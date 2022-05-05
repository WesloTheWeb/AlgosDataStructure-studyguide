/*
Problem Statement#
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

Input: [4, 0, 3, 1]

0  1  2  3  4  5  6  7
1, 2, 3, 4, 5, 6, 0, 8
                     i


swap numbers until they're in the right spot
if num is 0 you can keep it pushing
iterate again until you find 0 then return i + 1
*/

function swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  
  function missingNumbers(nums) {
    let i = 0
    while (i < nums.length) {
      const correctPosition = nums[i] - 1
      if (i === correctPosition || correctPosition < 0) {
        i += 1
      } else {
        swap(nums, i, correctPosition)
      }
    }
  
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] === 0) return j + 1
    }
  }
  
  console.log(missingNumbers([4, 0, 3, 1]))
  console.log(missingNumbers([8, 3, 5, 2, 4, 6, 0, 1]))
  // console.log(missingNumbers())
  
  function cyclicSort(nums) {
    let i = 0
    while (i < nums.length) {
      const whereItShouldBe = nums[i] - 1
      if (i === whereItShouldBe) {
        i += 1
      } else {
        swap(nums, i, whereItShouldBe)
      }
    }
    return nums
  }
  
  // console.log(cyclicSort([3, 1, 5, 4, 2]))
  // console.log(cyclicSort([2, 6, 4, 3, 1, 5]))
  // console.log(cyclicSort([1, 5, 6, 4, 3, 2]))