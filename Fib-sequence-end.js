// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


// /* 
// Your previous Python 3 content is preserved below:


// # 
// # Your previous JavaScript content is preserved below:
// # 
// # /*
// # 0a. Code the original fibonacci sequence with an array. 
// # 
// # [0, 1, 1, 2]
// # 
// # fib(6) -> [n , n, n, n, n]
// #           [0, 1,  1, 2, 3, 5]
// #    fib(n -1) + fib(n - 2) = fib(n)
// # 
// # 1. Iterative
// # 2. Recursive
// # */
// # 
// # function fib(n) {
// #   let results = [0,1]
// #   // let prev = 1;
// #   // let cur = 1;
// #   
// #   for (let i = 2; i < n; i++) {
// #        let sum = results[i - 2] + results[i - 1] //
// #        results[i] = sum
// #   }
// #   
// #   return results;
// # }
// # console.log(fib(5)) // [0, 1,  1, 2, 3];
// # console.log(fib(3)) //
// # console.log(fib(10)) //



// '''
// 0b. Code the original fibonacci sequence with three variables that are replaced as you go. 
// (go over space complexity differences)


// // Taking no more space that we start with
// // let a, b, c 


// fib(5)
// n-2 = 1 
// n-1 = 2
// n= 3
// '''
// '''
// def fib(n):
//     n2=0
//     n1=1
//     print(n2, n1)
//     for i in range(2,n):
//         current=n2+n1
//         print(current)
//         n2=n1
//         n1=current

// ## fib(5) ## [0, 1,  1, 2, 3];
// fib(10)
// '''

// '''
// Return the kth number of an alternative sequence that starts with 1, 1, 1 and each subsequent number is the sum of the previous THREE elements. (1, 1, 1, 3, 5, 9, 17...)

// k = 1 [1,1,1] -> 1 (first element)
// k = 4 [1,1,1,3,5,9] -> 3

// [1,1,1]
// - Three variables
// n1 = 1
// n2 = 1
// n3 = 1

// sumOfPreviousThreeNums = n1 + n2 + n3
// print(sumOfPreviousThreeNums) // 3
// n1 = n2   // 1
// n2 = n3   // 1
// n3 = sumOfPreviousThreeNums // 3

// k = 7

// '''

// def kthElementOfAlternativeSequence(k):
//     n1=1
//     n2=1
//     n3=1
//     if k<4:
//         return 1
//     for i in range(3,k):
//         sumOfPreviousThreeNums=n1+n2+n3
//         n1=n2
//         n2=n3
//         n3=sumOfPreviousThreeNums
//     return sumOfPreviousThreeNums

// print(kthElementOfAlternativeSequence(3)) ## [1,1,1] -> 1
// print(kthElementOfAlternativeSequence(4)) ## [1,1,1, 3, 5] -> 3
// print(kthElementOfAlternativeSequence(7)) ## 1, 1, 1, 3, 5, 9, 17 -> 17



/*
Delayed Fibonacci Sequence. This sequence starts with 1, 1, 1, and then each subsequent number is the sum of the element 2 before and 3 before it (skipping the element right before it).
/, 3, 4, 5, 7, 9, 12, 16...


Even Fibonacci Sequence. In this sequence, round each element to an even number without effecting the overall sequence.
2, 2, 2, 4, 6, 8, 14, 22...
Notice that the first two elements get rounded to 2, but the following element is based on the original value, not the rounded values.


*/

function delayedFib(k) {
    let n1 = 1
    let n2 = 1
    let n3 = 1
    console.log(n1, n2, n3)
    for (let i = 3; i < k; i++) {
      let sum = n2 + n1
      console.log(sum)
      n1 = n2
      n2 = n3
      n3 = sum
    }
  }
  //console.log(delayedFib(5))  // 1, 1, 1, 2, 2
  delayedFib(10) // 1, 1, 1, 2, 2, 3, 4, 5, 7, 9