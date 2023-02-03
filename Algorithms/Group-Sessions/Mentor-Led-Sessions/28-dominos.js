/*########################
TYPE: ARRAY
February 2, 2023
KEY TAKE-AWAY:
- Sub problems, break into components like how we segmented a "piece" of operations.
- Pre-processing to where your cases are.
- Only difference between the two approaches is how we find our cases.
- 2 pointer solution in which the action separates it from the skeleton.
TODO: See how 2 pointer skeleton and 2 pointer sliding window are the same. Whats my condition to stop? Whats my action when stop?
- understand base algorithm and base skeleton, what are the components? and then how to modify them depending on the question?
QUESTION:
You're given an array containing either '.', 'L', or 'R' values. These values represent a starting state of a row 
of dominoes. L means the domino has been pushed to the left. R means the domino has been pushed to the right. 
All elements to the left  of an L get pushed to the left and all elements to the right of an R get pushed to the right. 
If a domino is pushed in both directions simultaneously, it stays up.


** Consisentecny improtant than intensity 
Given the starting state array, return the updated array representing the final state of the dominos. 
All dominos should be L, R or . if it stays standing upright.
 
EXAMPLE(S)
[., L, ., R, .] -> [L, L, ., R, R]
[., R, ., ., L, .] -> [., R, R, L, L, .]
[., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
[., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]

. R . . L .
. R R L L .
| / / \ \ |

. R . . . L .
. R R . L L .
| / / | \ \ |
 

[., R, ., ., L] -> [., R, R, L, L]

[., L, ., R, .]
from left going right -> [., L, ., R, R]
from right going left -> [ L   L  .   R   .]
[L, L, ., R, R]


[., R, ., ., L, .] ->

 . R R . L .
  .  . .  L  L  .
  . R R 
 [., R, R, L, L, .]





Approach:




Time Complexity:
Space Complexity:

Pseudo Code:




########################*/



// Test Cases:

const test1 = ['.', 'L', '.', 'R', '.']; 
// [L, L, ., R, R]
const test2 = [".", "R", ".", ".", "L", "."]; 
// [., R, R, L, L, .]
const test3 = [".", "R", ".", ".", ".", "L", "."];
 // [., R, R, .,  L, L, .]
const test4 = [".", "R", ".", "L", ".", "L", ".", "R", "."]; 
// [., R, ., L, L, L, ., R,R]


console.log();
console.log();
console.log();