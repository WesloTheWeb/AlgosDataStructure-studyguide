/*


Example 1: Interviewer: "Given an array, return the first unique number. 
For example, given [2, 1, 2, 3] return 1"

[2, 1, 2, 3]
          ^
 ^

- input not always ordered


*/


class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
  }
  
  function inOrderTraversal(root) {
    const res = [];
  
    // make an empty array
    const helper = (node) => {
      // set conditional
      if (node) {
        helper(node.left);
        res.push(node.val);
        helper(node.right);
      }
    };
  
    helper(root);
    // return empoty array 
    return res;
  };
  
  
  function maxPair(arr) {
    if (arr.length < 2) {
        return [];
    };
  
    let maxSum = -Infinity;
    let maxPairIndices = [];
    let pairMap = new Map();
  
    for (let i = 0; i < arr.length - 1; i++) {
        let currentSum = arr[i] + arr[i + 1];
  
        if (!pairMap.has(currentSum) || pairMap.get(currentSum) > i) {
            pairMap.set(currentSum, i);
        };
  
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxPairIndices = [i, i + 1];
        };
    };
  
    return maxPairIndices;
  };
  
  const testCase1 = [0, 4, 3, 1, 2, 3, 4, 0];
  const testCase2 = [0, 5, 5, 5, 10, 27];
  
  console.log(maxPair(testCase1)); // Expected Output: [1, 2]
  console.log(maxPair(testCase2)); // Expected Output: [4, 5]