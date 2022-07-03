/**
 * Q. Construct a zigzag tree from an array (alternating right and left child), starting with right.
 * Example:
  Input: [1, 2, 3, 4, 5]
  Output:
          1
            \
              2
             /
          3
            \
              4
             /
          5

Approach:
- create a root node with first value
- loop through the input
  - check flag to fill in right or left

  Constraint:
  - minimum length of nums = 1
 */

function TreeNode2(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
};

function zigzag(nums) {
    let len = nums.length; // 3
    if (len === 1) return new TreeNode2(nums[0]); // * skip
    let root = new TreeNode2(nums[0]); // node(1)
    let curr = root; // node(1)
    let goRight = true;
    let counter = 1;

    while (counter < len) { // 1 < 3
        const newNode = new TreeNode2(nums[counter]) // node(2)
        if (goRight) { // true
            curr.right = newNode; /// node(1) R-> node(2)
        } else {
            curr.left = newNode;
        }
        curr = newNode; // update the current node 

        counter++; // increments thru the array // changes 2
        goRight = !goRight; // flips the flag // false
    };
    return root;
};

console.log(zigzag([1, 2, 3, 4, 5]))

/**
 *    A
    /   \
  B       C
 
Node A has two children nodes: Node B and Node C. If we start from Node B and traverse through its descendent nodes (e.g., Node B's children and their children) can we possibly reach a node that is a descendent node of Node C?
 */