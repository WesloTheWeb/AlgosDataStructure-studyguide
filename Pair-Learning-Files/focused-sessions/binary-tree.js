/* 
Your previous Python 3 content is preserved below:

FIRST TREE for BFS 
      10   1st level
     /    \
    8      12   2nd level
             \
             13  3rd level 
  
                        

SECOND TREE for DFS - last function iteratively
       10   1st level
     /    \
    8      12   2nd level
  /  \      / \
 7   9    11  13  3rd level 
  
                           13
                          12
                         11
                        10
                       8
 */
class TreeNode {
    constructor(value, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild;
        this.right = rightChild;
    };
};

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}


let tree = new TreeNode(10, new TreeNode(8, new TreeNode(7), new TreeNode(9)), new TreeNode(12, new TreeNode(11), new TreeNode(13)))

// console.log(tree)

function dfs(head) {
    head.left && dfs(head.left);
    console.log(head.value);
    head.right && dfs(head.right);
}

// In-order
// dfs(tree) // 8, 10, 11, 12, 13



function bfs(root) {
    const queue = root ? [root] : [];

    while (queue.length) {
        let node = queue.shift();

        console.log(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    };
};


// bfs(tree) // 10 8 12 7 9 11 13

// pre order
function dfsIterative(head) {
    const stack = head ? [head] : [];

    console.log('before while loop:', arrayifyTree(head));

    while (stack.length) {
        // p l r
        const node = stack.pop();
        console.log(node.value);

        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    };

    console.log('after while loop:', stack);

};

dfsIterative(tree);

// (10 (8 (7) (9)) (12 (11) (13)))

// 10 8  (12)