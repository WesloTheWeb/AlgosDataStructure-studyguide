/*
'''
❓ PROMPT
Given a binary tree, return the sum of all root-to-leaf paths.

Example(s)
     1 <--- root
  2      3
4   5  6   7
sumAllTreePaths(root) == 36

Explanation:
* The leftmost path: 1 + 2 + 4 = 7
* The left-middle path: 1 + 2 + 5 = 8
* The right-middle path: 1 + 3 + 6 = 10
* The rightmost path: 1 + 3 + 7 =  11

Aggregating the paths: 7 + 8 + 10 + 11 = 36
 

🔎 EXPLORE
List your assumptions & discoveries:
- (null case) return null;
- we go from root to leaf path and add up all the sums made.
- if leaf node then we just proceed.
- No matter how we count or direction should be the same as long as we are doing the root to leaf sum.
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursively
Time: O(n)
Space: O(n)
 - Create array of all sums.
 - Create path array
 - Use helper function to run our recursion
  -> Base case if no child, return null.
  -> add to path array, once reach leaf node push sum to sums array
  -> Pop element(?) to get the next. Need a way to get each sum path

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sumAllTreePaths(root)
def sumAllTreePaths(root: Node) -> int
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function sumAllTreePaths(root) {
    const listOfSums = [];
    const runningPath = 0;
  
    const helper = (node, runningSum) => {
      // base case
      if (!node) return null;
  
      runningPath += node.val;
      if (!node.left && !node.right) {
        runningPath.push(listOfSums);
        runningPath -= node.val;
      }l
  
      // recursive case
      helper(node.left, runningSum);
      helper(node.right, runningSum);
    };
  
    helper(ShadowRoot, runningPath);
  
    return listOfSums;
  };
  
  
  
  