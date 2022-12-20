/*
Coding drill :
Question : 
Given a binary tree and a target k, return any values in the tree that is repeated exactly k times. 
If multiple values are repeated k times, return the smaller value. If there isn't any value repeated k times, return -1.

Input:
tree:
          1 
        /    \
      2       2
     / \      / \
   3    4     4   3
k: 2
Output: 2

Edge cases/Assumptions/Observations :
- All integers are valid values
- Can be mixed

Approach : 
Version_1
1.) define key-value map where the keys are the node values present in the tree and the values are the number of occurance for each key. 
2.) traverse the tree (iteratively), and populate the key-value map in the process.
3.)traverse the key-value map to retreive the smallest key that has a value equal to k.
4.) return the value retreived in step 3.
Version_2
- dictionary: element, # occurances
- set: elements with k occurances
- stack: store the min element with k occurances
when we put an element in the set, check the top of the stack to see if its smaller than top of stack, if it's smaller than the top of the stack, push it.
HINT : 
Hint 1 : Use some manipulations (mathematical) over min element
Hint 2 : Use a tuple/pair with value and minSoFar while pushing to stack

push k values in array?
*/

//Andy
/*
def getRepeatKTimes(root, k):
    if not root:
        print("there is an error")
        return -1
    
    valueFreq = {} // use slightly more descriptive names 

    def helper(root, valueFreq, k):
        if root is None:
            return
        valueFreq[root.value] = valueFreq.get(root.value, 0) + 1
        helper(root.left, valueFreq, k)
        helper(root.right, valueFreq, k)
        return

    helper(root, valueFreq, k)
    result = float('inf')
    for val in valueFreq:
      if valueFreq[val] == k:
        result = min(result, val)
        
    if result == float('inf'):
        print("there are no valid numbers")
        return -1
    else:
        return result

Follow-up :
Min Stack : https://leetcode.com/problems/min-stack/
Print the right side view of binary tree
Print the left side view of binary tree
Print the bottom view/top view of binary tree
*/

class Node {
    constructor(value, minSoFar) {
        this.value = value;
        this.minSoFar = minSoFar;
    }
}

//Jesse
function returnSmallestKFreq(root, k) {
    if (!root) {
        console.log('empty tree')
        return -1;
    }
    let freqMap = {};
    let stack = [root];
    //traverseing the tree to populate the freqMap
    while (stack.length) {
        let node = stack.pop();
        if (!freqMap[node.value]) freqMap[node.value] = 0;
        freqMap[node.value]++;
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    };
    //traversing the freqMap to retreive the answer
    let answer = Infinity;
    let keys = Object.keys(freqMap);
    for (let key of keys) {
        if (freqMap[key] === k && freqMap[key] < answer) answer = freqMap[key];
    };
    if (answer === Infinity) return -1;
    return answer;
};

// JASMIN
function findElementWithKOccurances(root, k) {
    const counts = {}; //more descriptive name

    function traverseTree(root) {
        const stack = [];
        let curr = root;

        while (curr || stack.length) { //traversalStack 
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                counts[curr.val] = (counts[curr.val] || 0) + 1;
                if (curr.right) stack.push(curr.right);
                curr = curr.right;
            }
        }
    }

    traverseTree(root);

    let minVal = Infinity;

    for (const el in counts) {
        if (counts[el] === k) minVal = Math.min(el, minVal);
    }

    if (minVal < Infinity) return minVal;

    console.log(`no values found ${k} times`);
    return -1;
}

// WESLEY
/*
Version_1
1.) define key-value map where the keys are the node values present in the tree and the values are the number of occurance for each key. 
2.) traverse the tree (iteratively), and populate the key-value map in the process.
3.)traverse the key-value map to retreive the smallest key that has a value equal to k.
4.) return the value retreived in step 3.
*/

function findElementsOccuringKTimes(root, k) {
    // map
    const occurrences = {};
    const queue = root ? [root] : [];

    while (queue.length > 0) {
        // populate key value map in process
        if ( ) {

        }
        // traverse key-value map 

    };

    // sorry im bad with hashmaps :( 
}