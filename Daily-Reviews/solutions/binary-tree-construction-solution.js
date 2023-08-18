class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

class BinarySearchTree {
    constructor(value) {
        this.root = new TreeNode(value);
        this.count = 1;
    };

    size() {
        return this.count;
    };

    insert(value) {
        // increment the count of nodes
        this.count++;

        // variable of our new node with a value:
        let newNode = new TreeNode(value);

        // recursive function:
        const searchTree = (node) => {
            if (value < node.value) {  // if value < node.value, go left
                if (!node.left) {
                    // if empty value on node left, then value will take the empty spot.
                    node.left = newNode;
                } else { // if left child, look left again.
                    searchTree(node.left);
                };
            }
            // if value > node.value, go right
            else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                };
            };
        };

        searchTree(this.root); // do not forget to call the recursive function.
    };


    min() {
        // we want to recursively go left until we cannot go left anymore.
        const helper = node => {
            if (!node.left) {
                return node.value;
            }
            return helper(node.left);
        };

        return helper(this.root);

        // * OR
        // let curr = this.root;

        // while (curr.left) {
        //     curr = curr.left;
        // };

        // return curr.value;
    };

    max() {
        let curr = this.root;

        while (curr.right) {
            curr = curr.right;
        };

        return curr.value;
    };

    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            };

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            };
        };

        return false;
    };

    // depth first search - branch by branch, uses a stack

    // in-order (Left, Root, Right)
    // * output: 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() {
        let results = [];

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left);
            // capture root node value
            results.push(node.value);
            // if right child exists, go right again
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return results;
    };

    // pre-order (Root, Left, Right)
    // * output: 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        let results = [];

        const traverse = node => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return results;
    };

    // post-order (Left, Right, Root)
    // * output: 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        let results = [];

        const traverse = node => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        };

        traverse(this.root);
        return results;
    };

    // breadth first search - level by level, uses a queue
    bfs() {
        let queue = [];
        let results = [];

        queue.push(this.root);

        while (queue.length > 0) {
            const curr = queue.shift();
            results.push(curr.value);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        };

        return results;
    };
};

/*
          15
       /     \
      3      36
    /  \    /  \
   2   12  28  39

Binary Search Tree

*/


const bst = new BinarySearchTree(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

// console.log(bst);

console.log(bst.size()); // 7
console.log(bst.min()); // 2
console.log(bst.max()); // 39
console.log(bst.contains(2)); // true
console.log(bst.contains(69)); // false

// search method checks
// * in-order output: 2, 3, 12, 15, 28, 36, 39
// * pre-order output: 15, 3, 2, 12, 36, 28, 39
// * post-order output:  2, 12, 3, 28, 39, 36, 15
console.log('in-order:', bst.dfsInOrder()); // ? [2, 3, 12, 15, 27, 36, 39]
console.log('pre-order:', bst.dfsPreOrder()); // ? [15, 3, 2, 12, 36, 28, 39]
console.log('post-order:', bst.dfsPostOrder()); // ? [2, 12, 3, 28, 39, 36, 15]

// * breadth-first-search output: 15, 3, 36, 2, 12, 28, 39
console.log('bfs:', bst.bfs()); // ? [15, 3, 36, 2, 12, 28, 39]