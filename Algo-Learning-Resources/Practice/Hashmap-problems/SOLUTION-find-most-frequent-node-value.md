# Explanation of solution:
## Solution 1 - hashmap via object
    function recursiveSolution(treeRoot) {
        let freqMap = {};
        let mostFreq = 0;
        let mostFreqVal = 0;

        const dfs = (root) => {
            if (root) {
                if (freqMap[root.val]) {
                    freqMap[root.val] += 1
                }
                else {
                    freqMap[root.val] = 1
                }

                if (freqMap[root.val] > mostFreq) {
                    mostFreq = freqMap[root.val];
                    mostFreqVal = root.val;
                };

                dfs(root.left);
                dfs(root.right);
            };
        };

        dfs(treeRoot);
        return mostFreqVal;
    };




1. The `recursiveSolution` function takes in a binary tree represented as a root node and returns the most frequent node value. It initializes the following variables:
    - `freqMap`: an object to store the frequency of each node value
    - `mostFreq`: a variable to store the current highest frequency
    - `mostFreqVal`: a variable to store the value of the node with the current highest frequency

2. It defines a inner function called `dfs` (short for depth-first search) which takes in a root node and returns nothing. It has a base case where it returns if the root is `null`.

3. For each non-null root node, it updates the `freqMap` by either incrementing the existing frequency value for the root's value if it already exists in the map, or adding a new entry to the map with a frequency of `1` if it does not yet exist in the map.

4. It compares the frequency of the root's value to `mostFreq` and updates mostFreq and `mostFreqVal` if the frequency is higher.

5. It recursively calls `dfs` on the root's left and right children.

6. After `dfs` has completed traversing the tree, the `recursiveSolution` function returns `mostFreqVal`.

This solution is similar to the one I provided earlier, but it uses an object instead of a Map to store the frequency of each node value and a depth-first search (DFS) instead of a separate helper function to traverse the tree.

## Solution 2 - hashmap via JavaScript's Map & Set
    function findMostFrequentNodeValue(root) {
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
        for (const [value, frequency] of valueFrequencyMap.entries()) {
            if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentValue = value;
            }
        }

        return mostFrequentValue;
        }

        function traverseTree(node, valueFrequencyMap) {
        // Base case: if the node is null, return
        if (!node) {
            return;
        }

        // Update the frequency map for the current node
        if (valueFrequencyMap.has(node.value)) {
            valueFrequencyMap.set(node.value, valueFrequencyMap.get(node.value) + 1);
        } else {
            valueFrequencyMap.set(node.value, 1);
        }

        // Recursively traverse the left and right subtrees
        traverseTree(node.left, valueFrequencyMap);
        traverseTree(node.right, valueFrequencyMap);
    }

1. The `findMostFrequentNodeValue` function takes in a binary tree represented as a root node and returns the most frequent node value. It first handles the edge case where the tree is `empty` and returns `null`.

2. It creates a `Map` object called `valueFrequencyMap` to store the frequency of each node `value`.

3. It calls the helper function traverseTree to traverse the binary tree in a depth-first manner and update the `valueFrequencyMap`. The `traverseTree` function takes in a node and the `valueFrequencyMap` and returns nothing. It has a base case where it returns if the node is null.

4. For each non-null node, it updates the frequency map by either incrementing the existing frequency value for the node's value if it already exists in the map, or adding a new entry to the map with a frequency of `1` if it does not yet exist in the map.

5. After `traverseTree` has completed traversing the tree, the `findMostFrequentNodeValue` function iterates through the valueFrequencyMap to find the node value with the highest frequency. It initializes a variable maxFrequency to 0 and a variable mostFrequentValue to null. For each entry in the valueFrequencyMap, it compares the frequency to maxFrequency and updates maxFrequency and mostFrequentValue if the frequency is higher.

6. Finally, the `findMostFrequentNodeValue` function returns the mostFrequentValue.