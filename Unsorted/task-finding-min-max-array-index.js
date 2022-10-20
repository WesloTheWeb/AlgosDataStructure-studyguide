// Do this later from 10-13-2022

/*
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.


EXAMPLES:
print(findMinIndex([12, 1234, 45, 67, 1]) == 4)
print(findMinIndex([10, 20, 30]) == 0)
print(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)

print(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
print(findMaxIndex([10, 20, 30]) == 2)
print(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)

APPROACH:
MINIMUM (Recursive)
- Iterate through array
- have a comparison variable, if find lower number that is new variable.
- return the index of that minimum value
*/

const findMinIndex = (nums) => {
    let MIN_VAL = Infinity;
  
    const helper = (num) => {
      if (num <= MIN_VAL) {
        MIN_VAL = num;
        return indexOf(num);
      } else {
        // How to iterate array recursively?
      }
    }
  
    helper(nums);
  
  }
  