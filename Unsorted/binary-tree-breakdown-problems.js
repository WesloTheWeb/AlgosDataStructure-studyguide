/*
rec(count = 0) ** count = 0
  rec(count + 1) count = 1
    rec(count+1) count = 2

    1 return current + previous from left and right
  3   5 +1

Count odd nodes in a binary tree


Count negative nodes in a binary tree

Find maximum sum from root to leaf
    1
  2.  3.  return max(value + right, value + left)
     2  1  if !node return 0

Number of unique elements

Number of leaf nodes

Given a binary search tree that has up to one violating node, return the value of the violating node.

                4.  (-inf, +inf)
   (-inf, 4)  3.  8 (4, +inf)
   (-inf, 3) 1 100 (3, 4)

        1
    2       3
4     5  8     5

find(binaryTree, value = 1, lefts, rights) => true, then it's not unique
  counter = 1 its unique
  counter > 1 its not unique

*/

// bfs
function bfsNumOdds(root) {
    let queue = root ? [root] : [];
    let countOdd = 0;
  
    while (queue.length > 0) {
      const node = queue.shift();
  
      // if odd, add +1 to countOdd
      if (node.value < 0) {
        countOdd += 1;
      }
  
      // if left and right, enque push
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    return countOdd;
  
  } 
  
  function dfsNumOdds(node) {
    if (!node) return 0;
    return +(node.value < 0) + dfsNumOdds(node.left) + dfsNumOdds(node.right);
  }
  
  /*
  
  null => base
        1
      2   3 
  null n n  null
  */
  
  function dfsMaxSum(node) {
    if (!node) return 0;
    return node.value + Math.max(dfsMaxSum(node.left), dfsMaxSum(node.right));
  }
  
  
  function getMaxSum(node) {
    let currMax = -Infinity
    
    function helper(node, total) {
      // if leaf, get max(total, currMax)
      if (!node) {
        currMax = Math.max(total, currMax)
        return
      }
  
      total += node.value
      helper(node.left, total)
      helper(node.right, total)
  
    }
  
    helper(node, 0)
    return currMax
  }
  
  /*
  
                  4.  (-inf, +inf)
     (-inf, 4)  3.  8 (4, +inf)
     (-inf, 3) 1 100 (3, 4)
  
      8
        20
       *
  */
  
  
  function dfsGetViolatingNode(node) { 
    function helper(node, min, max) {
      if(!node) return null;
      // catch the violating node
      if(node.value < min || node.value > max) return node.value;
      return helper(node.left, min, node.value) || helper(node.right, node.value, max);
    }
    return helper(node, -Infinity, Infinity);
  }