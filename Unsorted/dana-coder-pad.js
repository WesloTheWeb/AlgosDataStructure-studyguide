/**
 * https://leetcode.com/problems/combination-sum/
 * 
39. Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.

These are the only two combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Input: candidates = [2], target = 1
Output: []

notes:
- a candidate can be used more than once


Ignore values greater than the target; if sorted
[1, 2, 3, 4, 5], target = 2

Using the same candidate more than once

[6,3,2,7] target sum = 7
     i

dfs([2])
  dfs([2,2])
    -- done dfs([2,2,2]) => i can't add anything that gets me to or below 7... i'm done 
    -- done dfs([2,2,3]) => yeah, this meets target, add to output... i'm done
    -- not even gonna try 6 or 7 (can be evaluated before calling the recursive function)

"smarter" backtrack
base case:
  if array adds up to target sum
    push array into output 

recursive case:
  curr_sum + whatever number i'm considering > target sum?
    - if yes, don't call recursively (no point)
    - if not, then call recursively (maybe there's a chance)

"dumber" backtrack
base case:
  if array sum exceeds target:
    do nothing. return early
  if array adds up to target sum
    push array into output 

recursive case:
  call dfs(curr_sum + whatever number i'm considering)

curr_sum = 
= 2 + 2  [2,2]
  => 4 + 2 = 6 [2,2,2]
    => 6 + 2 => 8 [2,2,2,2]
    backtrack (take out the last 2)
    => 6 + 3 => 9 [2,2,2,3]
    =>
    ..
  => 4 + 3 = 7 [2,2,3] => valid state, store in output array

[6, 3, 2, 7] target = 8
       i
  => 6 + 2 => meets target, add to output array
  => 4 + 2 + 2 => 8
  => 3 + 3 + 2 => 8

  = 2 + 3
  => 







base case:
  if array adds up to target sum
    push array into output 

recursive case:
  curr_sum + whatever number i'm considering > target sum?
    - if yes, don't call recursively (no point)
    - if not, then call recursively (maybe there's a chance)

dfs([2])
  dfs([2,2])
    -- done dfs([2,2,2]) => i can't add anything that gets me to or below 7... i'm done 
    -- done dfs([2,2,3]) => yeah, this meets target, add to output... i'm done
    -- not even gonna try 6 or 7 (can be evaluated before calling the recursive function)
function combinationSum(candidates, target)

  function dfs(state):
    if state is a solution:
        output.push([...state])
        report(state) # e.g. add state to final result list
        return

    for candidate in candidates:
      if sum(state) + candidate <= target:
        state.push(candidate)
        dfs(state)
        state.pop()

        or
        dfs(state + [candidate]) // concatenating state with new candidate JUST for this recursion call


    for child in children:
        if child is a part of a potential solution:
            state.add(child) # make move
            dfs(child, state)
            state.remove(child) # backtrack


https://algo.monster/problems/dfs_with_states
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    
};
