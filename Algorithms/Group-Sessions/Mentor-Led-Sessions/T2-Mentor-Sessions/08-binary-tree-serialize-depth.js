/*########################
TYPE: BINARY TREE
Question:
You are given a binary tree that is represented by a string. Nodes have no value. 
A 0 represents null and a (00) represents a leaf node. ((00)0) would represent a tree where the root has one left node 
and no right node. ((00)(00)) represents a tree with one left and one right node.

Given this representation of the tree, return an Int representing the depth of the tree.


Approach:
Example:

(((00)0)0) represents this tree:
       0
     /
   0
  /
0

This would return 2.

       R
     /  \
   x     y
 /  \     \
 0  0      0

 (((00)(00))(0(00)))

x = ((00)(00))

y = (0(00))


 (((00)0(00)) (0(00)))




 ((00)(00))
    0
   /  \
  0    0


((00)0)
    0
  /
0

A 0 represents null and a (00) represents a leaf node.
                        n
              n                   n
                               n     n
                            n

                ((00)(((00)0)(00)))

                x = (((00)0)(00))

                y = ((00)0)




Time Complexity:
Space Complexity:

Pseudo Code:
1. iterate through the input string, keep the max and current count of depth of the open parenthesis.
2. when u encounter a (, increase the current count, compare with the max count. when encounter a ), decrease the current count
3 return max count

intialize maxDepth and currentOpenParens variables
iterate through string
  increment or decrement parens depending on open or close
  update maxDepth if openParens is greater
return maxDepth
########################*/

const getDepth = (input) => {
    let maxDepth = 0,
        currentOpenParens = 0;

    for (const char of input) {

        if (char === '(') {
            currentOpenParens++;
        } else if (char === ')') {
            currentOpenParens--;
        };

        maxDepth = Math.max(maxDepth, currentOpenParens);
    };

    return maxDepth - 1;
};


// Test Cases:
console.log(getDepth('(((00)0)0)')); // 2
console.log(getDepth('((00)0)')); // 1
console.log(getDepth('((00)(00))')); // 1
console.log(getDepth('(00)')); // 0
console.log(getDepth('(((00)(00))(0(00)))')); // 2
console.log(getDepth('((00)(((00)0)(00)))')); // 3

/*
MISC.
Other Problems similar:
given a grid of 0s and 1s, where 1s represent land and 0s represent water, return a list of all of the areas of any islands in the grid, an island is any group of contiguous 1s (diagonal, horizontal, vertical)

[0, 0, 0, 1]
[1, 0, 0, 1]
[1, 1, 0, 0] => [2, 3]

- iterate through until we find a 1
- do a dfs to find the entire island, add that island area to result
  - mark all visited cells to avoid repeating

const getAreaOfIslands = () => {
  const result = [];
  const visited = {};
  for (let i = 0
    for ...
      if 1
        result.push(findAreaOfIsland(x, y, visited));
}

const findAreaOfIsland = () => {

}
*/