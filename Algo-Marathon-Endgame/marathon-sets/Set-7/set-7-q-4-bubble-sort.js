/*################################################
PROBLEM 4
Status: Good
Q. Given an unsorted array, perform bubble sort in ascending order.

Examples:

Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
Given an array: [1] // returns [1]

##################################################*/

 
/* APPROACH
 

*/

// Base: 
function solution() {

}


// ATTEMPT:
function solution(array) {
    const length = array.length - 1;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]    // swap logic destructuring ES6           
        }
      }
    };
  
    return array;
  }
  