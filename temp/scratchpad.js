class treeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

// Binary Tree Practice

class BST {
    constructor(value) {
        this.root = new treeNode(value);
        this.count = 0; // keeps tracks of how many nodes are in the tree.
    };

    // Finding the size
    size() {
        return this.count;
    };

    // Inserting a node
    insert(value) {
        this.count += 1;
        // step 1: create a variable that contains our new node with the targeted value
        let newNode = new treeNode(value);

        // step 2: have our value check against the nodes in the tree. Start with root. We make a helper function: searchTree
        const searchTree = (node) => {
            // if value < node.value, go to the left 
            if (value < node.value) {
                // If look to the left and no node there, we will append that value there
                if (!node.left) {
                    node.left = newNode;
                }
                // If there is a left child, we call searchTree again to look to left (recursive)
                else {
                    searchTree(node.left);
                };
            }

            // if value > node.value, go to the right 
            else if (value > node.value) {
                // If look to the right and no node there, we will append that value there
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                };
            };
        };
        // Still inside our insert method, we want to now call searchTree on our rootNode:
        searchTree(this.root);
    };

    // Finding Minimum
    // Approach: We want to go left and left until there are no more child nodes (This is a BST rememeber so its sorted)
    min() {
        let currentNode = this.root;

        while (currentNode.left) {
           currentNode = currentNode.left;
        }; // It is a BST so just keep going left and set the currentNode to currentNode.left until reach end.

        return currentNode.value;
    };

    // Finding Max
    max() {
        let currentNode = this.root;

        while(currentNode.right) {
            cuirrentNode = currentNode.right;
        };

        return currentNode.value;
    };

    // If it contains
    contains(value) {
        let currentNode = this.root;

        while(currentNode) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;

    };

    //Searching Algorithms

    // in order
    dfsInOrder() {

    };

    dfsPreOrder() {

    };

    dfsPostOrder() {

    };

    //breadthFirstSearch 
    bfs() {

    };

}