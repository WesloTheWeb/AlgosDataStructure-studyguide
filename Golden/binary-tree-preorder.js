// Return the preorder traversal of nodes values but do not use recursion.

function preOrderTraversal(root) {
    const stack = root ? [root] : [];
    const results = [];

    while (stack.length) {
        const curr = stack.pop();

        result.push(curr.value);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    };

    return results;
};