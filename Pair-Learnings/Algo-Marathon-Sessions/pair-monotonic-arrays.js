/*
Determine if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.
Source: https://leetcode.com/problems/monotonic-array/
Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false

APPROACH:
[1, 2, 2, 3]
    c 
       cn

c > cn, increasing is true

increasing = false
decreasing = false 
Iterate through the entire array
check if current is either less than or equal to the neighboring current (i + 1)
set increasing to true
if increasing is True, and current is now decreasing -> return monotonic false
set decreasing to true
if decreasing is True, and current is now increasing -> return monotonic false
at end of the loop, return True
*/

function monotonicArray(arr){
    let increasing = false;
    let decreasing = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        if (decreasing == true) {
          return false
        }
        increasing = true;
      }  
  
      if (arr[i] > arr[i + 1]) {
        if (increasing == true) {
          return false
        }
        decreasing = true;
      } 
    };
    return true
  
  };
  
  
  const arrayOne = [1,2,2,3]
  const arrayTwo = [6,5,4,4]
  const arrayThree = [1,3,2]
  console.log(monotonicArray(arrayOne)); //True
  console.log(monotonicArray(arrayTwo)); //True
  console.log(monotonicArray(arrayThree));  //False