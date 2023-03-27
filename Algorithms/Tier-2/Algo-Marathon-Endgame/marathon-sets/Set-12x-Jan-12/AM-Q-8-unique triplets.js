/*################################################
PROBLEM 8:
Status: 
Q. Given an array of integers, find all unique triplets (a, b, c) 
in the array such that their sum equals zero (a + b + c = 0).

For test purposes, you must return one sorted triplet with the smallest overall value

Examples:

Given an array: [1, 2, 0] returns: []
Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
Note: actual return output: [-1,0,1] since there is only one triplet
Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]
Note: actual return output: [-5,1,4] since -5 is the smallest overall value
[execution time limit] 4 seconds (js)

[input] array.integer array

array of integers

[output] array.integer

unique triplet with the lowest overall value




##################################################*/

 
/* APPROACH
 

*/

// Function:


/* inital attempt

// Use 3 sum approach.
function solution(array) {
   var triplets = [];
    array.sort((a, z) => a - z);
    for (var i = 0; i < array.length - 2; i++) {
        if (i > 0 && array[i] === array[i - 1]) {
        continue;
        }
        var j = i + 1;
        var k = array.length - 1;
        while (j < k) {
        var sum = array[i] + array[j] + array[k];
        if (sum === 0) {
            triplets.push([array[i], array[j], array[k]]);
            j++;
            k--;
            while (j < k && array[j] === array[j - 1]) {
            j++;
            }
            while (j < k && array[k] === array[k + 1]) {
            k--;
            }
        } else if (sum < 0) {
            j++;
        } else {
            k--;
        }
        }
    }
    
    return triplets
}
*/

// SOLUTION
// Use 3 sum approach.
function solution(array) {
    array.sort((a, b) => a - b);
    var triplets = [];
    for (var i = 0; i < array.length - 2; i++) {
      if (i > 0 && array[i] === array[i - 1]) {
        continue;
      }
      var j = i + 1;
      var k = array.length - 1;
      while (j < k) {
        var sum = array[i] + array[j] + array[k];
        if (sum === 0) {
          triplets.push([array[i], array[j], array[k]]);
          j++;
          k--;
          while (j < k && array[j] === array[j - 1]) {
            j++;
          }
          while (j < k && array[k] === array[k + 1]) {
            k--;
          }
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
    if (triplets.length === 0) return [];
    triplets.sort((a, b) => a[0] - b[0]);
    return triplets[0];
  }