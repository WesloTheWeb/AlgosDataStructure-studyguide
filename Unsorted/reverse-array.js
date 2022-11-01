// Wesley's coderpad
/* 
Prompt
Given an array, reverse every sub-array formed by consecutive k elements.

 Expected Runtime

Examples
Input: 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3
Output: 
[3, 2, 1, 6, 5, 4, 9, 8, 7]
Input: 
arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 5
Output: 
[5, 4, 3, 2, 1, 8, 7, 6]
Input: 
arr = [1, 2, 3, 4, 5, 6], k = 1
Output: 
[1, 2, 3, 4, 5, 6]
Input: 
arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 10
Output: 
[8, 7, 6, 5, 4, 3, 2, 1]

Time: O(N) to traverse the length N array
Space: O(1) to reverse the array in place

Expected Questions
If you were presented with this question in an interview, these are some questions(s) you might want to ask:
Q: What if K is larger than the size of the array?
A: Reverse the entire array
Q: What if the length of the array is not divisible by K?
A: Reverse every group of K elements, and then reverse the final group even if its length is < K.
Q: Should the reversal be done in place?
A: Yes.
Q: Will k be zero or negative?
A: For simplicity, no.

APPROACH:
1. Create an index variable i and set it to 0.
2. While i < n where n is the length of the array, set left = i, right = min(i + k, n) - 1 (to handle the last group if n is not divisible by k. Then reverse all the elements within the left and right bounds, swapping left and right and then moving towards the middle.
3. After each block reversal, increment i by k until the while loop exits.
*/
 
function reverse(arr, k) {

};

// solution
/*
def reverse(arr: list[int], k: int) -> None:
  if not arr or len(arr) <= 1 or k < 1:
    return

  def swap(arr: list[int], start: int, end: int) -> None:
    while start < end:
      tmp = arr[start]
      arr[start] = arr[end]
      arr[end] = tmp

      start += 1
      end -= 1

  i = 0
  while i < len(arr):
    end = min(i+k, len(arr)) - 1
    swap(arr, i, end)
    i = end + 1
*/