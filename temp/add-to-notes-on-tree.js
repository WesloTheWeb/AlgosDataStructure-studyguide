function howHigh(root) {
    if (!root) return -1;
  
    const leftTreeHeight = howHigh(root.left);
    const rightTreeHeight = howHigh(root.right);
  
    return 1 + Math.max(leftTreeHeight, rightTreeHeight);
  };
  
  console.log(howHigh())
  
  
  
  /*PSEUDO CODE:
  1. Instantiate and create our variablers
  2. create two arrays for currLvl  and nextLvl
  3. make a forEach loop on the queue. 
  4. Push the current value into currLvl and enque children push left and right to nextLvl array
  5. the queue is now the nextLvl array
  6. push whats in currLvl into result array
  */
  
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  const queueDrill = (root) => {
    const queue = root ? [root] : [];
    const res = [];
  
    while (queue.length) {
      let currLvl = [];
      let nextLvl = [];
  
      queue.forEach((node) => {
        currLvl.push(node.val);
        if (node.left) nextLvl.push(node.left);
        if (node.right) nextLvl.push(node.right);
      });
  
      queue = nextLvl;
      // res = currLvl; wrong!
      res.push(currLvl);
    };
  
    return res;
  };
  
  // function zigZagTraversal(root) {
  //   let queue = root ? [root] : [];
  //   const res = [];
  //   let flip_it = true; // flag needed for reversing direction.
  
  //   while (queue.length) {
  //     let currLvl = [];
  //     let nextLvl = [];
  
  //     queue.forEach((node) => {
  //       currLvl.push(node.val);
  //       if (node.left) nextLvl.push(node.left);
  //       if (node.right) nextLvl.push(node.right);
  
  //     });
  
  //     if (!flip_it) {
  //       currLvl.reverse();  // reverse current level
  //     };
  
  //     queue = nextLvl;
  //     res.push(currLvl);
  //     flip_it = !flip_it;
  //   };
  
  //   return res;
  // };
  
  // // Test Case:
  // const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  // const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5, new TreeNode(6, new TreeNode(7), new TreeNode(8)))));
  
  // // console.log(zigZagTraversal(tree1));  // 1 3 2
  // console.log(zigZagTraversal(tree2)); // 1 3 2 4 5 6 8 7
  // /*
  // 1
  // 3 2
  // 4 5 6
  // 8 7
  // */
  
  // var rightSideView = function(root) {
  //   const queue = root ? [root] : [];
  //   const rightSide = [];
    
  //   while (queue.length) {
  //       const n = q.length;
  
  //       for (let i < 0; i < n; i++) {
  //           rightSide.push()
            
            
  //       };
  //   };
    
    
    
  //   return rightSide;
  // };