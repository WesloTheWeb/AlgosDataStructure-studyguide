/*

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]


Input: arr = [] , k = 2 , x = 1
Output = []
-------------------------------------------
Input: arr = [1,2,3,4] , k = 0 , x = 1
Output = []
-------------------------------------------
Input: arr = [1,2,3,4,5], k = 2, x = 3
  // 1) res will be a consecutive subarray of k size
  // 2) say if we need to pick 4 elems, now we r looking at 5 elem n1, n2, n3, n4, n5
  // we need to compare two ends: diff(x, n1) and diff(x, n5), 
  // the number with bigger diff on the end will be eleminated
  //----------------------------------------------------------------//
  // lo and hi: range of all possible start of subarray with size k + 1, so we could compare both ends

*/

var findClosestElements = function(arr, k, x) {

    let low = 0, high = arr.length - k;
    while(low < high) {
        // for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
        let mid = Math.floor((low+high)/2);
        if(x-arr[mid] > arr[mid+k]-x) {
          // arr[mid] is the one further away from x, eliminate range[lo, mid]
          low = mid+1;
        } else {
            // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, elimiate them
            high = mid;
        }
    }
    return arr.slice(low, low+k);
  };
  console.log(findClosestElements([1,2,3,4,5],2,3))
  
  
  