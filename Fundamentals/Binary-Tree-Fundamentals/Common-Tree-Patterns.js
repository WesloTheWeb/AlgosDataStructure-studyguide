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