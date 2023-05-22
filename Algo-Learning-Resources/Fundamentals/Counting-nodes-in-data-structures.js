// A way to count nodes in various data strucutres. 
// Use as Reference
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    };
};

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
};

class GraphNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    };

    addChild(child) {
        this.children.push(child);
    };
};

// LINKED LIST
const LL1 = new Node(1, new Node(2, new Node(3, new Node(4))));

function countLinkedList(node) {
    // base case
    if (!node) return 0;

    // recursive case
    return node.val + countLinkedList(node.next);
};

console.log('Linked List total nodes:', countLinkedList(LL1)); // 10

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(4)));
/*
       1
    2    3
           4
*/

// BINARY TREE
function countTree(node) {
    // Base case
    if (!node) return null;

    // recursive case
    return 1 + countTree(node.left) + countTree(node.right);
};

console.log('Binary Tree count:', countTree(tree1));

function countLevels(node) {
    // base case
    if (!node) return 0;

    // recursive case
    return 1 + Math.max(countLevels(node.left), countLevels(node.right));
}

const trie = {
    'a': {
        'p': {
            'p': {
                'l': {
                    'e': {
                        '$': {}
                    }
                },
                'y': {
                    '$': {}
                }
            }
        }
    },
    'b': {
        'a': {
            'n': {
                'a': {
                    'n': {
                        'a': {
                            '$': {}
                        }
                    }
                }
            }
        }
    }
};

console.log('num of Tries', countTrie(trie)); // Output: 16

// Trie 0 to N children
function countTrie(node) {
    if (!node) return 0;

    const children = Object.values(node);
    return 1 + children
        .map(child => countTrie(child))
        .reduce((a, b) => a + b, 0);
};

// Graph: 0 to N children with loops
function countGraph(node, seen = new Set()) {
    if (!node || seen.has(node)) return 0;
    seen.add(node);

    return 1 + node.children
        .map(child => countGraph(child, seen))
        .reduce((a, b) => a + b, 0);
};

// Create nodes
const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
const nodeC = new GraphNode("C");
const nodeD = new GraphNode("D");

// Create the graph (with a cycle)
nodeA.addChild(nodeB);
nodeB.addChild(nodeC);
nodeB.addChild(nodeD);
nodeD.addChild(nodeA);

// Use the function countGraph to count unique nodes
const count = countGraph(nodeA);
console.log('Count Graph Nodes:', count); // Output: 4