/*▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.

Examples:
Input: k = 2
Output: 2
Explanation:
fib(2) = fib(0) + fib(1) = 1 + 1 = 2

// 1, 2, 3, 5, 8, 13, 21, 34...

Approach:
Create an array storing the answers at each index. Start with [1, 1], representing that the first answers are 1, 1. Iterate from 2 to k, adding the sum of the two previous locations.
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

// Test Cases
console.log(fib(0)) // 1
console.log(fib(5)) // 8
console.log(fib(11)) // 144