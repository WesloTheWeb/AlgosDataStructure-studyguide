class LinkedNode {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    };
  };
  
  const printNodesInArray = (head) => {
    let curr = head;
    const resArr = [];
  
    while (curr) {
      resArr.push(curr.val);
      curr = curr.next;
    };
  
    return resArr;
  };
  
  
  // test cases
  const a = new LinkedNode(1);
  const b = new LinkedNode(2);
  const c = new LinkedNode(3);
  const d = new LinkedNode(4);
  a.next = b;
  b.next = c;
  c.next = d;
  
  console.log(printNodesInArray(a)) // p1, 2, 3, 4]
  
  
  // printNodes(a);
  
  
  // Trees
  
  class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value;
      this.left = leftChild;
      this.right = rightChild;
    };
  };
  
  function findTreeHeight(root) {
    if (!root) {
      return -1
    }
  
    return 1 + Math.max(findTreeHeight(root.left), findTreeHeight(root.right));
  };
  
  // Test Cases
  // console.log(findTreeHeight(null), -1);
  // console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1);
  // console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3);
  
  
  /* Prompt
  Given a binary tree and two nodes in the tree, find the lowest common ancestor of the two nodes. The lowest common ancestor of two nodes is the last node where both nodes share the same parent.
  For example, if we have the tree
  
             1
          /     \
        2         3
      /   \     /     \
    4     5   6      7
  
  the lowest common ancestor of nodes 4 and 5 is 2, and the lowest common ancestor of nodes 4 and 6 is 1.
  Function Signature
  function lowestCommonAncestorTree(root, nodeOne, nodeTwo)
  Expected Runtime
  O(n)
  Examples
  For example, if we have the tree
  
             1
          /     \
        2         3
      /   \     /   \
    4     5   6      7
  LCA of 4 and 5 is 2  
  question: why is it 2 instead of 1?
  
  LCA of 4 and 6 is 1.
  
  can be its own ancestor:
  LCA of 4 and 2 is 2,
  LCA of 5 and 5 is 5
  
  LCA of 2 and 6 is 1
  
  Root node as the lowest common ancestor
  Non-root node as the lowest common ancestor
  One of the two nodes as the lowest common ancestor
  Identical nodes
  
  
  Expected Questions
  If you were presented this question in an interview, these are some questions(s) you might want to ask:
  Q: Can the two nodes not be from the same tree?
  A: No, assume all nodes are part of the same tree.
  -------
  Q: Are there parent pointers?
  Q: No, there are no parent pointers.
  
  Approach:
  We can solve this problem using depth-first search & recursion.
  There are three cases:
  Check if the current node is either nodeOne or nodeTwo
  Check if the current node's left sub-tree contains either nodeOne or nodeTwo
  Check if the current node's right sub-tree contains either nodeOne or nodeTwo
  If two out of the three conditions are true, return the current node as the result. Otherwise, iterate on the path where the child has nodeOne/nodeTwo.
  */
  
  // class TreeNode {
  //   constructor(value = 0, left, right) {
  //     this.value = value;
  //     this.left = left;
  //     this.right = right;
  //   };
  // };
  
  function lowestCommonAncestorTree(root, nodeOne, nodeTwo) {
    //1. Lets check if node is one of the values
    if (!root) return null;
  
    if (root.value == nodeOne || root.value == nodeTwo) {
      return root.value;
    };
  
    //2. Then, let's make the recursive call to both left and right.
    const leftSubTree = lowestCommonAncestorTree(root.left, nodeOne, nodeTwo);
    const rightSubTree = lowestCommonAncestorTree(root.right, nodeOne, nodeTwo);
  
    //3. If both left and right returns something we'll return our own value
    if (leftSubTree && rightSubTree) {
      return root.value;
    } else {
      return leftSubTree || rightSubTree;
    };
  
    //4. Otherwise, return whichever has a value null otherwise.
  };
  
  // Test Cases
  const node = new TreeNode(1,
    new TreeNode(2,
      new TreeNode(3),
      new TreeNode(4)),
    new TreeNode(5,
      new TreeNode(6),
      new TreeNode(7)));
  /*
             1
          /     \
        2         3
      /   \     /   \
    4     5   6      7
  */
  
  // console.log(lowestCommonAncestorTree(node, 5, 6), 5); // 5 5
  // console.log(lowestCommonAncestorTree(node, 3, 4), 2); // 2 2
  // console.log(lowestCommonAncestorTree(node, 2, 5), 1); // 1 1
  // console.log(lowestCommonAncestorTree(node, 1, 6), 1); // 1 1
  
  
  
  /*
  leetcode: https://leetcode.com/problems/binary-tree-paths/
  
  PROMPT:
  Given the root of a binary tree, return all root-to-leaf paths in any order.
  
  A leaf is a node with no children.
  
  */
  /*
  var binaryTreePaths = function(root) {
    const allPaths = [];
  
    //helper function
    const pathFinding = (root) => {
  
      const leftSubPath = pathFinding(root.left);
      const rightSubPath = pathFinding(root.right);
  
  
    };
  
  
    return allPaths;
  };
  */