// unattended session:

// Given a binary tree and an integer K. Find the number of paths in the tree which have their sum equal to K.
// A path may start from any node and end at any node in the downward direction.

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

function findCount(node, target) {
    let count = 0;

    function dfs(root, existing_possibilities) {
        if (!root) return;
        existing_possibilities = buildPossibilities(root, existing_possibilities);
        for (let arr of existing_possibilities) {
            if (arr.reduce((a, b) => a + b) === target) count++;
        }
        dfs(root.left, [...existing_possibilities]);
        dfs(root.right, [...existing_possibilities]);
    }

    dfs(node, []);
    return count;
}

function buildPossibilities(root, existing_possibilities) {
    for (let arr of existing_possibilities) {
        arr.push(root.val);
    }
    existing_possibilities.push([root.val]);
    return existing_possibilities;
}

const t1 = new Node(1, new Node(2), new Node(3));
console.log(findCount(t1, 5), 0);