// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root, target) {
    let curr = root;  // our pointer;
    // let node = new Tree(target);

    if (!root) return new Tree(target);  // null case check.

    while (curr) {
        if (target > curr.value) {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = new Tree(target);
                return;
            };
        };

        if (target < curr.value) {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = new Tree(target);
                return;
            };
        };
    };

    return root;
}
