// TODO: Tonight go over these problems again, specifically three pointers and edge case of 3 sum. emphasis on no duplicates.
/*
Aug. 8th, 2023 (Meta focused)
Interviewer: Fang Li
Question #1:
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

The solution set must not contain duplicate triplets.
Example

Example 1:
Input: numbers = [2,7,11,15]
Output:
[]
Explanation:
Cannot find triples such that the sum of three numbers is 0.

Example 2:
Input: numbers = [-1,0,1,2,-1,-4]
Output:
[[-1, 0, 1],[-1, -1, 2]]

Explanation:
[-1, 0, 1] and [-1, -1, 2] are the 2 eligible triples.

assumptions
- input will have at least 3 numbers
- we want to find 0s from three triplets
- returning a result array of valid triplets that equal 0, with no duplicates.

2 pointer advantage of one array.
- we can sort the input array time: o(n log n)


[-1,0,1,2,-1,-4]
        l           
              h
      i
l + i

*all pointers should be pointing different number

approach: 2 pointers
1. sort the array.
2. create our results array.
3. iterate over the array with a traditional for loop, giving us access to i-th index acts as another pointer.
4. initalize two more pointers, low (starting at i + 1) and high (end our array)
5. as iterating, calculate the running sum
5a. if sum === 0, then push the values to the results array, will qualify as a triplets
5b. keep going until low and high pointers cross then we stop iteration.
6. return results 

time: O(n^2)
space: O(n) n is the number of el's in the array
*/

function findAllTriplets(arr) {
    arr.sort((a, z) => a - z);
  
    const results = [];
  
    for (let i = 0; i < arr.length - 2; i++) {
      // duplication check
      if (i !== 0 && arr[i] === arr[i - 1]) {
        continue;
      }
      let low = i + 1;
      let high = arr.length - 1;
  
      while (low < high) {
        // calculating step
        let runningSum = arr[i] + arr[low] + arr[high];
        // 
        // [-1,0,1,2,-1,-4]
        // [-1, -1, 0, 1, 2]
        //          i  l  h  
        if (runningSum === 0) {
          results.push([arr[i], arr[low], arr[high]]);
          low++;
          high--;
        } else if (runningSum > 0) {
          high--;
        } else {
          low++;
        };
      };
    };
  
    return results;
  };
  
/* RUN-THROUGH OF CODE:
  Input: numbers = [-1,0,1,2,-1,-4]
  Output:
  [[-1, 0, 1],[-1, -1, 2]]
  
  [-1,0,1,2,-1,-4]
  [-4, -1, -1, 0, 1, 2]  (Sorted)
            i 
               l
                  h
  
  runningSum = -1 + 0 + 1 = 0
  results = [[-1, -1, 2],[-1, 0, 1]]
  
*/
  
/*
Question #2:  
There is an integer array which has the following features: The numbers in adjacent positions are different.
  1.) A[0] < A[1] && A[A.length - 2] > A[A.length - 1].
  2.) We define a position P is a peak if:
  3.) A[P] > A[P-1] && A[P] > A[P+1]
  
Find a peak element in this array. Return the index of the peak.
  
Example 1:
  Input:
  A = [1, 2, 1, 3, 4, 5, 7, 6]
  Output:
  1
  Explanation:
  Returns the index of any peak element. 6 is also correct.
  
Example 2:
  Input:
  A = [1,2,3,4,1]
  Output:
  3
  Explanation:
  return the index of peek.
  
  assumptions:
  - return index of peak doesnt matter which one
  
Approach:
  
  [1, 2, 1, 3, 4, 5, 7, 6]
      p2
  
  [1, 3, 2]
      p2
  
  checking the index, if p2 > p2 - 1 && p2 > p2 + 1, would count as a peak 
  - start at index 1
  can start comparison to check left and right, if conditions met peak return index
  
  whenever optimize o(n) 
  binary search O(log n)
*/