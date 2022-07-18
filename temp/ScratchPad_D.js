/* Q: Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

APPROACH:
- BFS
*/

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function solution(root) {
    const queue = [root];
    const values = [];
    
    while (queue.length) {
      let len = queue.length;
      values.push(getAverage(queue));
  
      while (len--) {
        const cur = queue.shift();
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
    }
    return values;
  };
  
  function getAverage(arr) {
    
    return arr.reduce((acc, curr) => acc + curr.val, 0) / arr.length;
  }
  
  
  function solution2(root) {
    const values = [];
    
    function dfs(root, level = 0) {
      if (!root) return;
      if (values.length === level) { 
        values[level] = [root.val];
      } else {
        values[level].push(root.val);
      }
  
      dfs(root.left, level + 1);
      dfs(root.right, level + 1);
    }
  
    dfs(root);
    return values.map(fetchAverage);
  }
  
  function fetchAverage(arr) {
    return arr.reduce((acc, cV) => acc + cV) / arr.length;
  }
  
  //    1   [1]
  // 2    3 [2,3]
  //3 5  6 8 [3,5,6,8]
  // [[1], [2,3]
  
  // test cases
  var tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  var tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
  var tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
  
  
  console.log(solution(tree1))
  console.log(solution(tree2))
  console.log(solution(tree3))
  console.log(solution2(tree1))
  console.log(solution2(tree2))
  console.log(solution2(tree3))