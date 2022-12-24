/*######################################################################################
QUESTION:
Given a binary tree with node values represented as integers, find and return the most frequent node value.
You can assume there will always be a most frequent node and that there are no ties.

APPROACH:
- We can use a hashmap to key in the values and count.
- As we iterate through the binary tree.
- If node exists add to counter, if not add to map.
- Iterate through the hashmap to return the node with the highest frequent count.

##########
EXAMPLES
##########

root = Node(5)
print(findMostFrequentNodeValue(root) == 5)
#    5
# 10   5
root = Node(5,
  Node(10),
  Node(5))

print(findMostFrequentNodeValue(root) == 5)
#    6
#  6   6
# 6 6

root = Node(6,
  Node(6,
    Node(6),
    Node(6)),
  Node(6))

print(findMostFrequentNodeValue(root) == 6)

#################
Expected Runtime
##################
Time: O(N) to traverse the tree with N nodes
Space: O(N) to store up to N nodes 

######################################################################################*/

/*###############
HELPER FUNCTIONS
################*/

// Binary Trees  
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

/*###############
TEST CASES
- 1-node tree
- all nodes have same value
- all unique except 1 node
- a sparse tree
################*/


/*############
INITIAL ATTEMPT
##############*/

function findMostFrequentNodeValue(root) {
    let frequentValue = 0;
    let nodeFrequencies = new Map();

    while (root.length > 0) {
        // If key does not exist add, if key does exist + 1 iterate it.
        if (nodeFrequencies.has(root.val)) {
            nodeFrequencies.set(root) + 1;
        } else {
            nodeFrequencies.set(root.val);
        };
    };

    // iterate through hashmap to find frequencyes
    for (let count of nodeFrequencies) {
        if (count > frequentValue) {
            frequentValue = count;
        };
    };

    return frequentValue;
};

/*########
SOLUTION
1. The findMostFrequentNodeValue function takes in a binary tree represented as a root node and 
returns the most frequent node value. It first handles the edge case where the tree is empty and returns null.

2. It creates a Map object called valueFrequencyMap to store the frequency of each node value.

3. It calls the helper function traverseTree to traverse the binary tree in a depth-first manner and 
update the valueFrequencyMap. The traverseTree function takes in a node and the valueFrequencyMap and returns nothing.
It has a base case where it returns if the node is null.

4. For each non-null node, it updates the frequency map by either incrementing the existing frequency value for 
the node's value if it already exists in the map, or adding a new entry to the map with a frequency of 1 if it 
does not yet exist in the map.

5. After traverseTree has completed traversing the tree, the findMostFrequentNodeValue function iterates through the 
valueFrequencyMap to find the node value with the highest frequency. 
t initializes a variable maxFrequency to 0 and a variable mostFrequentValue to null. 

For each entry in the valueFrequencyMap, it compares the frequency to maxFrequency and updates maxFrequency and 
mostFrequentValue if the frequency is higher.

Finally, the findMostFrequentNodeValue function returns the mostFrequentValue.
##########*/
// Solution 1 - DFS with helper method
function solution(root) {
    // Edge case: if the tree is empty, return null
    if (!root) {
        return null;
    }

    // Create a map to store the frequency of each node value
    const valueFrequencyMap = new Map();

    // Traverse the tree and update the frequency map
    traverseTree(root, valueFrequencyMap);

    // Find the node value with the highest frequency
    let maxFrequency = 0;
    let mostFrequentValue = null;

    // Iterate through the hashmap that has just been created:
    for (const [value, frequency] of valueFrequencyMap.entries()) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentValue = value;
        };
    };

    return mostFrequentValue;
};

// Helper Function:
const traverseTree = (node, valueFrequencyMap) => {
    // Base case: if the node is null, return
    if (!node) {
        return;
    };

    // Update the frequency map for the current node
    if (valueFrequencyMap.has(node.value)) {
        valueFrequencyMap.set(node.value, valueFrequencyMap.get(node.value) + 1);
    } else {
        valueFrequencyMap.set(node.value, 1);
    };

    // Recursively traverse the left and right subtrees
    traverseTree(node.left, valueFrequencyMap);
    traverseTree(node.right, valueFrequencyMap);
};

// Formation's Recursive DFS
function recursiveSolution(treeRoot) {
    let freqMap = {};
    let mostFreq = 0;
    let mostFreqVal = 0;

    const dfs = (root) => {
        if (root) {
            // Hashmap construction if found +1, If not create 1.
            if (freqMap[root.val]) {
                freqMap[root.val] += 1
            }
            else {
                freqMap[root.val] = 1
            }

            // If value at key greater than most freq, mostFreq takes value
            if (freqMap[root.val] > mostFreq) {
                mostFreq = freqMap[root.val];
                mostFreqVal = root.val;
            };

            // Traversing the tree to cover all nodes.
            dfs(root.left);
            dfs(root.right);
        };
    };

    dfs(treeRoot);
    return mostFreqVal;
};

