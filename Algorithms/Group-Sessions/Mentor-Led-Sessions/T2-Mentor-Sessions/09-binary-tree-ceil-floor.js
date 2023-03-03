/*########################
TYPE: BINARY TREE
Question:
Given a binary search tree of interger values, and a target number
find the floor and ceil of this number in the tree

Example:
floor(t) = largest number n such that n <= t
ceil(t)  = smallest number n such that n >= t

Clarfication:
- at least one number in tree
- can have negatives
- no duplicates
- return null if not found
- if target number is a node then return target number as floor and ceil

Approach:

if balanced bst - o log n

 t = 3
 [2, 4]

t = 3
[2, 4]

target = 3
curr = 7
  target < curr
   left: [6, 7]
  
target = 3
curr = 6
  target < curr
  left: [2, 6]

if (target > state[0] && target < state[1]) return state

target = 9

        10
      /   \
     5     15
    / \ 
   2    7


        7
      / \
     6     10
    /  
   2   
    

    2           2
  /  \         /  \
1     4       1    3
floor = 2      
ceil = 4

t = 10

   5
  / \
1    9

target = 12

          8
      /     \       floor: 8 ceil: infinity
     5       15 
    / \     /      floor: 8 ceil : 15
   2    7  11       floor: 8 ceil: 11


Time Complexity:
Space Complexity:

Pseudo Code:
1. instantiate our variables for current pointer

2. traverse through BST
    if root value < target
      floor = root.val
      update current pointer to root.right
    else if root value > target
      ceil = root.val
      update curr pointer to root.left
    else
      root.value
########################*/

// Test Cases:
console.log();
console.log();
console.log();