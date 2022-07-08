/*########################
TYPE: BINARY TREE
Question:
Given a binary tree, return the deepest node (furthest away child).
        a
       /  \
     b    c
   /
  d

Return d

Can assume nodes have a .value, .left, and a .right field

Clarifying Questions:
- If 2 are equally far away return either one

Approach:
- dfs, recursive
- keep track of max height
- keep track of node of that max height


Time Complexity:
Space Complexity:

Pseudo Code:
1. create stack, intialize variables (max height and the deepestNode).
2. helper function takes current node
3. return deepestNode

BREAK-DOWN OF RECURSIVE CALL USED:
          a
        /   \
      b       c
      \
       d
     
     b -> returns node d with a depth 1. This means d has a depth of 2 from a 
     c -> returns node c with a depth 0. This means c has a depth of 1 from a
   
      helperFunct(Node): (depth, node) {
          if (node === null) return (0, null)
          (depth1, val1) = helperFunc(node.left)
          (depth2, val2) = helperFunc(node.right)
          if (depth1 > depth2) return (val1 +1, node.left)
          return (val2 +1, node.right)
     
      }
      [_, node] = helperFunc(root)
       return node
     
     b.left -> (0, null)
     b.right -> (0, null) and (0,null). Return (1, d) -> return (2, d)
    
     a.right -> return (1, c)


########################*/
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
};

function deepestNode(root) {
    if (!root) return root;

    function helper(node) {
        if (!node) return [0, node];
        if (!node.left && !node.right) { return [1, node] };

        const leftSubTree = helper(node.left);
        const rightSubTree = helper(node.right);

        if (leftSubTree[0] < rightSubTree[0]) {
            return [rightSubTree[0] + 1, rightSubTree[1]];
        } else {
            return [leftSubTree[0] + 1, leftSubTree[1]];
        }
    };

    return helper(root)[1];
};

// Test Cases:
let tree1 = new TreeNode('a', new TreeNode('b', new TreeNode('d')), new TreeNode('c'));
console.log(deepestNode(tree1), new TreeNode('d'));
console.log(deepestNode(null), null);
console.log(deepestNode(new TreeNode(1)), new TreeNode(1));

/* OLD SOLUTION

function deepestNode(root) {
    if (!root) return root;
    let max_height = -Infinity;
    let result = null;

    helper(root);

    function helper(tree, max = 0) {
        if (!tree) return;

        helper(tree.left, max + 1);
        helper(tree.right, max + 1);

        if (max > max_height) {
            max_height = max;
            result = tree;
        };
    };

    return result;
};
*/