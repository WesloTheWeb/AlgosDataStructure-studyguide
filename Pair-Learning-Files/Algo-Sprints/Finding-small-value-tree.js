// 1. Find smallest positive value in BT
// 2. Find most frequent value in binary tree
// 3. Count the number of times a target value is in the BT

/*
APPROACH
= iterate left and right 
= currentSmall = 0 
- currentSmall < root.left or right, takes value fo that variable
- currentSmall > 0, check for positive value
- return the variable
*/

class Node {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }  
  }
  
  function minPositive(a, b) {
    // return min positive value. if none found, return null
    if (a > 0 && b > 0) {
      return Math.min(a,b);
    } else if (a > 0) {
      // b <= 0
      return a
    } else if (b > 0) {
      // a <= 0
      return b
    } else {
      // a <= 0 && b <= 0
      return null;
    }
  }
  
  // console.log(minPositive(-1, 0));
  // console.log(minPositive(-1, -2), null)
  // console.log(minPositive(1, null), 1)
  // console.log(minPositive(null, null), null)
  // console.log(minPositive(10, 4), 4)
  
  function findSmallest(root) {
    const queue = root ? [root] : []; // [new Node(3)]
    let smallestValue = null;
    
    while (queue.length > 0) {
      const node = queue.shift(); // node = new Node(3)
      smallestValue = minPositive(node.left.value, smallestValue);
      
      if (node.left) {
        // smallestValue = minPositive(node.left.value, smallestValue);
        queue.push(node.left);
      }
      
      if (node.right) {
        // smallestValue = minPositive(node.left.value, smallestValue);
        queue.push(node.right);
      }
    }
    
    return smallestValue;
  }
  
  
  // console.log(findSmallest(null), null); // 0 nodes
  
  console.log(findSmallest(new Node(3)), 3); // 
  // console.log(findSmallest(new Node(-1)), null);