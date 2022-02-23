// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      let sums = [];
      calculateBranchSums(root, 0, sums);
      return sums;
  };
  
  const calculateBranchSums = (node, runningSum, sums) => {
      if (!node) return null;
  
      let newRunningSum = runningSum + node.value;
      // base case
      if (!node.left && !node.right) {
          return sums.push(newRunningSum);
      };
      
      calculateBranchSums(node.left, runningSum, sums)
      calculateBranchSums(node.right, runningSum, sums)
  
  };
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  