// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given a binary tree, determine if it is a valid binary search tree (BST).

// Examples:
// • Given a binary tree:
//         2
//        / \
//       1   3
// // returns True

// • Given a binary tree:
//         1
//        / \
//       2   3
// // returns False

var isValidBST = function (root) {

    return dfs(root, -infinity, infinity);
}

function dfs(node, min, max) {

    if (!node) {
        return true;
    }

    if (node.val < min || node.val > max) {
        return false;
    }

    return dfs(node.left, min, node.val) && dfs(node.right, node.val);
}
