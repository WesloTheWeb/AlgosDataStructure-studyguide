/* Office Hour - Algo Marathon
Date: 08/172022
PARTNERS:

QUESTION:
Given an array of length n, create an output value that is created by doing the following:
Create an array of length n-1 by summing all adjacent values.
Repeating step 1 until the array is of length 1.

For example, let's say the input is [1, 2, 3, 4, 5]. 
The next array would be [1 + 2, 2 + 3, 3 + 4, 4 + 5] which is [3, 5, 7, 9]
The next array would be [8, 12, 16]
The next array would be [20, 28]
The final array would be [48], so return 48.

Function Signature: 
function reduceSum(input)

APPROACH:
- making reduce but recursively 
- n + previous number to get the sum

PSEUDO CODE:

Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:
function reduceSum(input) {
    let sum = [];
    // base case
    if (!input || !input.length) return 0;
    if (input.length === 1) return input[0];
  
    // for (0..input.length - 2)
    for (let i = 0; i <= input.length - 2; i++) {
      sum.push(input[i] + input[i + 1]);
      // console.log(sum);
    }
  
  
    // input.forEach((num, index) => {
    //   sum.push(num + input[index + 1])
    //   console.log(sum);
    // });
  
    return reduceSum(sum)
  };
  
  // Test Cases:
  console.log(reduceSum([5])); // [5] => 5
  console.log(reduceSum([])); // [] => 0
  console.log(reduceSum([1, 3, 5])); // [1, 3, 5] => 12



// Test Cases:



// Solution: 



// Solution Test Cases: