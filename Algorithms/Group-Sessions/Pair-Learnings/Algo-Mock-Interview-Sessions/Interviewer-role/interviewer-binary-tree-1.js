/*
'''
Today, you will be asking the question to complete-ify a Binary Tree.

Recall the definition of a complete tree: all levels of the tree are full except for possibly the last, lowest level. In the lowest level, all nodes are on the left.

The input is a tree that is potentially not complete. Re-arrange these nodes to make a complete tree.
 

EXAMPLE(S)
Input:
     4
    / \
   3   7
  /   / 
 2    5  
/      \
1        6 

DFS [1, 2, 3, 4, 7, 5, 6]
BFS [4, 3, 7, 2, 5, 1, 6]

Possible Output:
     6
    / \
   2   4
  / \ / \
 3  1 5  7
 

My output: 
DFS 
   6
  / \
 5   7
/ \ / \
4  3 2  1

BFS 
   6
  / \
 1   5
/ \ / \
2  7 3  4

FUNCTION SIGNATURE
func completify(node: Node) -> Node
'''
*/
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  // pseudocode: 
  // create a queue 
  // create an array (treeValues) to store tree values 
  // traverse the queue and add the elements to the treeValues array
  // concludes 1st BFS 
  // create a new tree (finalTree)
  // take elements off of treeValues by popping off the end
  // add values to finalTree using BFS
  // return finalTree
  
  
  // function completify(root) {
  //   let queue = [root];
  //   // let treeValues = [];
  //   let newTree = new TreeNode(root.value);
  
  //   while (queue.length) {
  //     let nextLevel = [];
  
  //     for (const node of queue) {
  //       console.log(newTree, "newTree");
  //       if (node.left) {
  //         nextLevel.push(node.left);
  //         newTree.left = new TreeNode(node.left.value);
  //       }
  //       if (node.right) {
  //         nextLevel.push(node.right);
  //         newTree.right = new TreeNode(node.right.value);
  //       }
        
  //     }
  //     queue = [...nextLevel];
  //   }
  //   return newTree;
  //   // console.log(treeValues, "treeValues");
  //   // let curr = treeValues.pop();
  //   // let tree = new TreeNode(curr);
  //   // let queue2 = [];
  //   // while (treeValues.length) {
  
  //   // }
  // }
  
  let tree = new TreeNode(4,
    new TreeNode(3,
      new TreeNode(2,
        new TreeNode(1))),
    new TreeNode(7,
      new TreeNode(5,
        null,
        new TreeNode(6)
      )
    )
  );
  
  let tree1 = new TreeNode(4,
    new TreeNode(3,
      null,
      new TreeNode(2,
        new TreeNode(1))),
    new TreeNode(7,
      new TreeNode(5)
    )
  );
  // [4, 3, 7, 2, 5, 1];
  
  console.log(completify(tree)
  // ,
    // new TreeNode(6,
    //   new TreeNode(1,
    //     new TreeNode(2),
    //     new TreeNode(7)),
    //   new TreeNode(5,
    //     new TreeNode(3),
    //     new TreeNode(4))
    // )
    );
  
  console.log(completify(tree1)
  // ,
  //   new TreeNode(1,
  //     new TreeNode(5,
  //       new TreeNode(7),
  //       new TreeNode(3)),
  //     new TreeNode(2,
  //       new TreeNode(4)
  //     )
  //   )
    );
  
  
  
    // solution
    function completify(root) {
      const nodes = [];
      const queue = [root];
    
      while (queue.length > 0) {
        const node = queue.shift(); // will return the shifted value
        nodes.push(node); // push the shifted value of what node is
        // en-queing process
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
  
        node.left = null;
        node.right = null;
      }
    
      const newRoot = nodes.pop();
      queue.push(newRoot);
    
      while (nodes.length > 0) {
        const parent = queue.shift();
        parent.left = nodes.pop();
        queue.push(parent.left);
    
        if (nodes.length > 0) {
          parent.right = nodes.pop();
          queue.push(parent.right);
        }
      }
      console.log(newRoot, 'new root');
      return newRoot;
    }
  
    /*
    Solution
  1. Iterate through the tree and collect all the nodes in an array. 
  2. Since the order of the output does not matter, Simply fill in the node in a BFS fashion.
  
  */
  
  // able to add new objects dot notation
  const fruit = ['Apple'];
  
  fruit.left = 7
  console.log(fruit) // ['Appe', left: 7]