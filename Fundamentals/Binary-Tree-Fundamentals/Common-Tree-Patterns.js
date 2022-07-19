/*########################################################################
Common Binary Tree Problems

1. Level order style pattern
- Level order traversal print by level
- Level order find the averages at each level.
##########################################################################*/

// Data dependency:
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

//####################################
// One of the best ways to do this
//####################################
var levelOrder = function (root) {
    // instantiate and create our variables
    let queue = root ? [root] : [];
    let result = [];

    // standard while loop of queue
    while (queue.length > 0) {
        // create two arrays for current level and next level
        let currLvl = [];
        let nextLvl = [];

        // This is the inner for loop we need to use to differentiate between current level and next level
        queue.forEach((node) => {
            currLvl.push(node.val);
            // enque the children of current node value
            if (node.left) nextLvl.push(node.left);
            if (node.right) nextLvl.push(node.right);
        });

        // queue is the nextlvl and we push our current levels into result array.
        queue = nextLvl;
        result.push(currLvl);
    };

    return result;
};

//############################################
// Algo Monster way of doing this traversal:
//#############################################
function levelOrderTraversal(root) {
    let res = [];
    let queue = [root];  // at least one element in the queue to kick start bfs
    while (queue.length > 0) {  // as long as there is element in the queue
        const n = queue.length;  // number of nodes in current level, see explanation above
        let new_level = [];
        for (let i = 0; i < n; i++) {  // dequeue each node in the current level
            const node = queue.shift();
            new_level.push(node.val);
            // enqueue non-null children
            for (const child of [node.left, node.right]) {
                if (child) queue.push(child);
            };
        };

        res.push(new_level);
    };

    return res;
};

/*############
1. 
Question:
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.

Examples
tree1:
    1
  2   3

tree2:
      1
  2  4  5 3

tree3:
       1
  2  4  9  5
 8  9
  
#########*/

// BFS Iteratively
function findLevelAverages(root) {
    const queue = root ? [root] : [];
    const values = [];

    while (queue.length) {
        let len = queue.length;
        values.push(getAverage(queue));

        while (len--) {
            const cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        };
    };

    return values;
};

const getAverage = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.val, 0) / arr.length;
};

// Test Cases:
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
//    1   [1]
// 2    3 [2,3]
//3 5  6 8 [3,5,6,8]
// [[1], [2,3]

console.log(findLevelAverages(tree1));
console.log(findLevelAverages(tree2));
console.log(findLevelAverages(tree3));

// Recursive way to do this:
function solution2(root) {
    const values = [];

    function dfs(root, level = 0) {
        if (!root) return;
        if (values.length === level) {
            values[level] = [root.val];
        } else {
            values[level].push(root.val);
        }

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    };

    dfs(root);
    return values.map(fetchAverage);
};

function fetchAverage(arr) {
    return arr.reduce((acc, cV) => acc + cV) / arr.length;
};

console.log(solution2(tree1));
console.log(solution2(tree2));
console.log(solution2(tree3));

/*############
2. 
Question:
Given a binary tree, return its level order traversal but in alternate left to right order.
1. Instantiate and create our variables
2. create two arrays for currLvl  and nextLvl
3. make a forEach loop on the queue. 
4. Push the current value into currLvl and enque children push left and right to nextLvl array
5. the queue is now the nextLvl array
6. push whats in currLvl into result array
#########*/

function zigZagTraversal(root) {
    let queue = root ? [root] : [];
    const res = [];
    let flip_it = true; // flag needed for reversing direction.

    while (queue.length) {
        let currLvl = [];
        let nextLvl = [];

        queue.forEach((node) => {
            currLvl.push(node.val);
            if (node.left) nextLvl.push(node.left);
            if (node.right) nextLvl.push(node.right);
        });

        if (!flip_it) {
            currLvl.reverse();  // reverse current level
        };

        queue = nextLvl;
        res.push(currLvl);
        flip_it = !flip_it;
    };

    return res;
};

// Test Case:
const zigzagtree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const zigzagtree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5, new TreeNode(6, new TreeNode(7), new TreeNode(8)))));

// console.log(zigZagTraversal(zigzagtree1));  // 1 3 2
console.log(zigZagTraversal(zigzagtree2)); // 1 3 2 4 5 6 8 7