/* Q: Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

APPROACH:
- BFS
*/

function solution(root) {
    const queue = [root];
    const values = [];
    
    while (queue.length) {
      let len = queue.length;
      values.push(getAverage(arr));
  
      while (len--) {
        const cur = queue.shift();
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
    }
  
  };
  
  function getAverage(arr) {
    
    return arr.reduce((acc, curr) => acc + curr.value, 0) / arr.length;
  }
  
  // 1 [1]
  //2 3 [2,3]
  //3 5 6 8 [3,5,6,8]
  