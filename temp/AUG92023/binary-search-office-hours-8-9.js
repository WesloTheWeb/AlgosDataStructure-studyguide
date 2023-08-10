// TODO: Clean up the code, really understand the binary search and then re-try problem. Add to Notion list if not already on.

/*########################################################################
QUESTION: 
https://leetcode.com/problems/find-peak-element/

There is an integer array which has the following features:
  1) The numbers in adjacent positions are different.
  2) A[0] < A[1]
  3) A[A.length - 2] > A[A.length - 1]
  
  Definition:
  We define a position P is a peak if:
  A[P] > A[P-1] && A[P] > A[P+1]
  
  Find a peak element in this array. Return the index of the peak.
  
  Example 1:
  Input: A = [1, 2, 1, 3, 4, 5, 7, 6]
  Output: 1
  Explanation:
  Returns the index of any peak element. 6 is also correct.
  
  Example 2:
  Input: A = [1,2,3,4,1]
  Output: 3
  Explanation:
  return the index of peek.

   Do Binary Search o(log n)

/*
EXAMPLE / DETAILS 

[..., 1, 5, 1, ...]
         ^
        middle
That's awesome, we catch that on line 55 and return the `middle` index

[..., 1, 5, 7, ...]
         ^
        middle
* At the current `middle` index, we're increasing
* BUT we also know, the array is decreasing at the very end (from point 3)
* So, we know there must be a peak in the array AFTER our current `middle`

[..., 7, 5, 1, ...]
         ^
        middle
* At the current `middle` index, we're DECREASING
* BUT we also know, the array is INCREASING at the very beginning (from point 2)
* So, we know there must be a peak in the array BEFORE our current `middle`

[..., 7, 5, 7, ...]
         ^
        middle
* At the current `middle` index, we're at a valley
* This is basically a combination of the both the increasing and decreasing cases
* We can choose to go either to the left or to the right - it doesn't matter, there is a peak in both directions

########################################################################*/

function findPeak(arr) {
  let peakFound = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) {
      // finding the peak.
      peakFound = middle
      break;
    };

    // comparison
    if (arr[middle] < arr[middle + 1] && arr[middle] > arr[middle - 1]) {
      // search right
      left = middle + 1;
    } else {
      // search left
      right = middle - 1;
    }
  };

  return peakFound;
};


const testCase1 = [1, 2, 1, 3, 4, 5, 7, 6];
const testCase2 = [1, 2, 3, 4, 1];
console.log(findPeak(testCase1)) //  1 , Returns the index of any peak element. 6 is also correct.
console.log(findPeak(testCase2)); //3 index

  // 2nd element start, middle,