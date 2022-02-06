/*##################################################################################
TAG: Find Kth Element in the Fibonacci Sequence - 2m
CATEGORY: Dynamic Programming
#####################################################################################

 Q. Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a 
 sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, 
 the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.

Examples:
    Input: k = 2
    Output: 2
    Explanation:
    fib(2) = fib(0) + fib(1) = 1 + 1 = 2
 */

/*############################
Iterative Solution
############################*/
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

/*############################
Recursive Solution
############################*/

function fibRecursive(k) {
    if (k < 2) return 1;

    return fibRecursive(k - 2) + fibRecursive(k - 1);
};

// Test Cases
console.log(fibRecursive(0)) // 1
console.log(fibRecursive(5)) // 8
console.log(fibRecursive(11)) // 144