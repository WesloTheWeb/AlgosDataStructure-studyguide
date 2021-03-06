/* Office Hour - Algo Marathon
Date: 07/05/2022
PARTNERS:
Eric Lee
Highlights: 
- This problem uses a hashmap / dictionary with a binary tree
QUESTION:
Given a binary tree with node values represented as integers, find and return the least occurring  tree node value (eg: 3).

Examples:
[1, 2, null, 2, null] => 1
[1, 1, 1, 1, 1, 1] => 1
[9] => 9
[1, 5, 3, 7, 5, 3, 1, null] => 7

APPROACH:

      1
    5    3 
  7  5  3  1

Find the least occuring integer / node:
  hashmap or dictionary to keep track of each integer
  DFS to travere the nodes
  
  Leass Occurance potential sol
  Filter?
  Math.min - on the object values

PSEUDO CODE:
  1. Create a stack
  2. create the hashmap
  3. DFS in a preorder fashion
  4. Math.min our hashmap values
  
  object.Keys() or object.values 
  keys occurrences
  5:     1
  4:     2 

Target runtime and space complexity:
 O(n), where n = # of nodes in tree

 Formation's Pseudocode:
1. Create a hashmap to store frequencies (key = node value, value = frequency).
2. DFS or BFS through your tree using a helper function, incrementing frequencies in your hashmap as you go.
3. After you're done recording frequencies - iterate through your hashmap to find node value with the smallest frequency 
and return that node value (key).

#########################################*/
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
};

// Our attempt:

function findLeastFrequentNodeValue(root) {
    // 1. Create a stack
    const stack = root ? [root] : [];

    // 2. create the hashmap
    const occurences = new Map();
    // 3. DFS in a preorder fashion

    //Object.values(stack).map([key, value] => {
    // occurences.set(value, (occurences(value) || 0) + 1)
    // })
    // 4. Math.min our hashmap values
    while (stack.length) {
        const node = stack.pop();

        if (node.left) {
            // add to hash map
            // if (!node.val) add to map if does add to count
            stack.push(node.left)
            // console.log(stack)
            // console.log("-----------------")
            stack.forEach(x => {
                occurences.set(x, (occurences.get(x.val) || 0) + 1);
            })
            console.log(occurences) //1
            findLeastFrequentNodeValue(root.left);
        };

        if (node.right) {
            stack.push(node.right)
            // console.log(stack)
            stack.forEach(x => {
                occurences.set(x, (occurences.get(x.val) || 0) + 1);
            })
            findLeastFrequentNodeValue(root.right);
        };
    };

    return null;
};


// Test Cases:
const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));

console.log(findLeastFrequentNodeValue(tree1))


// Solution:



// Solution Test Cases:

