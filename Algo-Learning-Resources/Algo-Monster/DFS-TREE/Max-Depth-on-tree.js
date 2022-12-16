// Max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth.

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// SOLUTION 
function treeMaxDepth(root) {
    // Null node adds no depth
    if (root === null) return 0;
    // Depth of current node's subtree = max depth of the two subtrees + 1 provided by current node
    return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}

// ACTUAL FUNCTION HERE [MY ATTEM[T]]
function treeMaxDepth(root, depth = 0) {
    // Base case
    if (!root) return 0;

    // recursive case
    return 1 + Math.max(treeMaxDepth(root.left, depth + 1), treeMaxDepth(root.right, depth + 1))
}

// this function build a tree from input
// learn more about how trees are encoded in https://algo.monster/problems/serializing_tree
function buildTree(nodes, f) {
    const val = nodes.next().value;
    if (val === 'x') return null;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new Node(f(val), left, right);
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

function* main() {
    const root = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
    const res = treeMaxDepth(root);
    console.log(res);
}

class EOFError extends Error { }
{
    const gen = main();
    const next = (line) => gen.next(line).done && process.exit();
    let buf = '';
    next();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        const lines = (buf + data).split('\n');
        buf = lines.pop();
        lines.forEach(next);
    });
    process.stdin.on('end', () => {
        buf && next(buf);
        gen.throw(new EOFError());
    });
}
