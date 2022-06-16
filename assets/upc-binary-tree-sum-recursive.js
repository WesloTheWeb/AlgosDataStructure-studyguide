// Q. Given a binary tree, sum all elements recursively.

function solution(root) {
    // base case
    if (root === 0) return null;
    
    solution(root + root)
}
