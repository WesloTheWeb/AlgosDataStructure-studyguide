
/*

Given an input N representing n number of stairs, compute the number of ways to reach the n'th stair if you can climb either 1 or 2 stairs at a time.
 
EXAMPLE(S)
Input: 1
Output: 1
Explanation: There is only one way to climb one stair: (1)

Input: 2
Output: 2
Explanation: There are 2 ways to climb 2 stairs: (1,1) and (2)

Input: 4
Output: 5
Explanation: Here are the ways to climb 4 stairs: (1,1,1,1), (1,1,2), (1,2,1), (2,2), (2,1,1)
 
Input: 3
Possiblities to climb (1,1,1), (1,2), (2,1)

Input: 5
Output: 3
Possiblities to climb (1,1,1,1,1), (2,2,1), (1,2,2)

NOTES:
- climb either 1 or 2 stairs at a time
- can be various / directional (can mix steps in)

Given a integer n, can progress it via 1s or 2s.

APPROACH:
1. Graph - DFS

  EXAMPLE
  Input: 2
  Output: 2
  Explanation: There are 2 ways to climb 2 stairs: (1,1) and (2)

  1     2
   \
    1

    Divide n by 2 to get number of outputs but round up? 

2. Recursive backtracking
- base case, when we reach 0.
7

FUNCTION SIGNATURE
func numWaysToClimb(input: n) -> Int


Hints:
1.The number of ways at N is equivalent to the sum of the number of ways of previous step possibilities. This uses induction- what method can we solve problems like this? (backtracking, DP)
2.The number of ways at n is equal to numOfWays(n-1) + numOfWays(n-2). Is this similar to the Fibonacci sequence?

Input : stairs 3 

let numWaysToclimbStars =1 

(n)
if(n >=1 ){
(n - 1)  // f(3 - 1 ) , f(2- 1) , f(1 -1 ) , if f(0) ++
}

if(n >= 2 ){
(3 - 2) // f(3 - 2), f(3 - 2), f(3 - 1),
}
3 
3 - 1
3 - 2 

3 - 1 , 2- 1 1-  1 = 0 

Time: O(2^n) 
Space: O(n)
*/
// top down approach 
function numWaysToclimbStars(n) {
    let numWays = 0;
    
    const helper = (n) => {
      // BASE calls
      if (n === 0){
        return numWays++;
      } 
      
      if (n >= 1) {  
        helper(n - 1)
      }
  
      if (n >= 2) {
        helper(n - 2)
      }
    };
  
    helper(n);
    return numWays;
  }
  
  
  // Dynamic Programin Approach
  //                     5
  //            5-1                   5-2
  //      4-1.        4-2     3- 1.    3-2 
  //    3-1   3-2.    2- 1
  /*
  FAST
  F - First Solution // Recursive or backtracking
  A - Analyze the first solution,
  S -  Subproblems , look for repetitve cases
  T - Turn Around the table , use DP
  
  You will take more space , and less time  by storing the results of subproblems
  so you dont to call it twice or more 
  */ 
  // console.log(numWaysToclimbStars(1)) // 1
  // console.log(numWaysToclimbStars(2)) // 2
  // console.log(numWaysToclimbStars(3)) // 3
  
  // console.log(numWaysToclimbStars(5)) // 8
  // console.log(numWaysToclimbStars(6)) // 13
  
  
  function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
  
    const dp = new Array(n + 1);
    console.log(dp)
    dp[1] = 1;
    dp[2] = 2;
    console.log(dp)
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        console.log(dp)
    }
    return dp[n];
  }
  
  console.log(climbStairs(5)) // 5
  
  // Time  Complexity O(N)
  // Space O(N)