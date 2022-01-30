// Just a temp spot to save code snippet will organize later!

/*▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms o`f the sequence are both 1, i.e. fib(0) = fib(1) = 1.

Examples:
Input: k = 2
Output: 2
Explanation:
fib(2) = fib(0) + fib(1) = 1 + 1 = 2

// 1, 2, 3, 5, 8, 13, 21, 34...

Approach:
Create an array storing the answers at each index. Start with [1, 1], representing that the first answers are 1, 1. Iterate from 2 to k, adding the sum of the two previous locations.


/*
  k     =    0, 1, 2, 3, 4, 5 ...
  result =   1, 1, 2, 3, 5, 8
  
  k = 2
  k = 0 or k = 1, then just return 1
  
  if k >= 2, then use this formula
  
  fib(k) = fib(k - 2) + fib(k - 1)
  
  fib(5) 
  = fib(5 - 2) + fib(5 - 1) 
  = fib(3) + fib(4)
  
  fib(3) = fib(3 - 2) + fib(3 - 1)
  = (fib(3 - 2) + fib(3 - 1)) + (fib(4 -2) + fib(4 - 1))
  
  = (fib(1) + fib(2)) + (fib(2) + fib(3))
  
  = (fib(1) + (fib(0) + fib(1)) + (fib(0) + fib(1) + fib(1) + fib(2))
  
  
  if k = 0, then fib(k) = 1
  if k = 1, then fib(k) = 1
  
              
  fib(2) = fib(2) + fib(1) = 2 + 1 = 3
  
  1. identify the base case
  2. figure out the pattern in which the function calls itself
  3. implement 2.

  base case: if k <= 1, return 1;
  
  fib(k - 2) + fib( k - 1)

*/


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
*/

// O(n) time
function fib(k) {
  if (k <= 1) return 1;

  let prev = 1;
  let cur = 1;

  for (let i = 2; i < k + 1; i++) {
    [prev, cur] = [cur, prev + cur];
  }

  return cur;
}

function fib(k) // k is initially 5, then k _changes_ to 3, then k _changes again_ to 1
{
  
  if (k <= 1) {
    return 1;
  }
  
  /*
  fib(5) 
  = fib(5 - 2) + fib(5 - 1) 
  = fib(3) + fib(4)
  
  fib(3)
  = fib(3 - 2) + fib(3 -1)
  
  fib(2)
  = fib(2 -2) + fib(2 - 1)
  */
  return fib(k - 2) + fib(k - 1);
  
  
}

console.log(fib(5));


// // Test Cases
// console.log(fib(0)) // 1
// console.log(fib(5)) // 8
// console.log(fib(11)) // 144

function binarySearch(array, target) {
  
  let targetIndex = -1;

  if (array == null || array == [])
  {
    return targetIndex;
  };
  
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right ) {
    let mid = Math.floor((left + right) / 2);
    
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    };
    
  };
  
  return targetIndex;
};


function binarySearch2(array, target) {
  
  if (array == null || array.length == 0)
  {
    return -1;
  }
  
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi)
  {
    let mid = Math.floor((lo + hi) / 2);
    
    if (array[mid] == target)
    {
      return mid;
    }
    else if (target < array[mid]) // means hi needs to become smaller
    {
      hi = mid - 1;
    }
    else // means lo needs to become bigger
    {
      lo = mid + 1;
    }
  }
  
  return -1;

};

// Do not edit the line below.
// exports.binarySearch = binarySearch;

console.log(binarySearch2([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch2([], 3)); // -1
console.log(binarySearch2(null, 10)); // -1
