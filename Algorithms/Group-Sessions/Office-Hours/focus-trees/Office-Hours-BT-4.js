/* Office Hour - Algo Marathon
Date:  
TOPIC: BINARY TREES
Contains:
- Add one row to a binary tree
#########################################*/

/*#############################
QUESTION 1: Add a row to a binary tree
Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
   
Note that the root node is at depth 1.
   
The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val 
as cur's left subtree root and right subtree root. 
  cur's original left subtree should be the left subtree of the new left subtree root.
  cur's original right subtree should be the right subtree of the new right subtree root.
  If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.

https://leetcode.com/problems/add-one-row-to-tree/
################################

 KNOWLEDGE CHECK:
  Who thinks:
  - BFS is easier to code ***********
  - DFS is easier to code *******
*/

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

function addOneRow(root, val, depth) {

    if (!root) return null;

    if (depth === 1) { // insert @ the root
        const newRoot = new Node(val, root);
        return newRoot;
    }

    let read = [root];
    let write = [];
    let writeDepth = 2; // if depth=2: dont enter loop (insert @ the root's children)
    // Collect the nodes at depth - 1 using BFS
    while (writeDepth < depth - 1) { // SAME AS while (writeDepth <= depth) {
        for (const node of read) {
            if (node.left) {
                write.push(node.left);
            }
            if (node.right) {
                write.push(node.right);
            };
        };

        read = write;
        write = [];
        writeDepth++;
    };

    // Iterate over the collected node and perform the required operations
    for (const node of read) {
        const newLeft = new Node(val, node.left);
        const newRight = new Node(val, null, node.right);
        node.left = newLeft;
        node.right = newRight;
    };

    return root;
};