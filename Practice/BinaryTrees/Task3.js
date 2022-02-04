/*

Q. Given a binary tree, count the number of non-leaf nodes (leaf nodes do not have any children).

Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
*/
// A solution via geeks for geeks: Recursively done;

function solution(root) {
    
    if (root == null || (root.left == null && root.right == null)) {
        return 0;
    }

    return 1 + solution(root.left) + solution(root.right);
};
