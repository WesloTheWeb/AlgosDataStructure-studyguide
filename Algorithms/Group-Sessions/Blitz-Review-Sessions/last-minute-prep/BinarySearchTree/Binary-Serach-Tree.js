/*
Q. Given a binary search tree and a target integer, check if the tree contains a target.

[execution time limit] 4 seconds (js)

[input] tree.integer root

root of the tree

[input] integer target

target element's value

[output] boolean

*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root, target) {
    if (!root) return null;
    let curr = root;

    while (curr) {
        // target found
        if (curr.value === target) {
            return true;
        } else if (curr.value < target) { // else keep iterating
            curr = curr.right;
        } else {
            curr = curr.left;
        };

        return false;
    };
};

let algoBlitzTree = new TreeNode(5, new TreeNode(2, new TreeNode(1)))
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
// console.log(searchBST(null, 1)); // false
// console.log(searchBST(tree, 1)); // true
// console.log(searchBST(tree, 14)); // true
// console.log(searchBST(tree, 2)); // false
// console.log(searchBST(tree, 13)); // true
// console.log(searchBST(new TreeNode(), 0)); // 