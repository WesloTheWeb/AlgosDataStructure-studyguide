/* Office Hour - Algo Marathon untitled
TOPIC: Binary Trees
Contains:
- Password Generator
- Height of Tree
- Sum of Tree
- Convert binary tree to sorted doubly linked list
#########################################
Question:  Password Generator
abc, 2
aa
ab
ba
bb
bc
cc
ca
cb
#########################################*/

function passwordGenerator(letters, length) {
  const stack = [];
  let partialPassword = "";
  const passwords = [];

  function addOneLetter() {
    // base case
    if (stack.length === length) {
      passwords.push(stack.join(''));
      return;
    };

    // traverse all branches
    for (let i = 0; i < letters.length; i++) {
      stack.push(letters[i]); // O(1)
      partialPassword += letters[i]; // O(l)
      addOneLetter();
      //slice
      stack.pop(); // O(1);
    };
  };

  addOneLetter();

  return passwords;
};

console.log(passwordGenerator("abc", 2));
console.log(passwordGenerator("abc", 7));

/*#########################################
Question: Height of a tree + Sum of a tree
These type of problems are very similar and good recursion practice.
#########################################
*/

function heightOfTree(root) {
  // base case
  if (!root) return 0;

  const leftHeight = heightOfTree(root.left);
  const rightHeight = heightOfTree(root.right);

  // finding the max between two values
  const heightAtThisNode = Math.max(leftHeight, rightHeight) + 1;

  // recursive case
  return heightAtThisNode;
};

function sumOfTreeValues(root) {
  // base case
  if (!root) return 0;

  const leftSum = sumOfTreeValues(root.left);
  const rightSum = sumOfTreeValues(root.right);

  // recursive case
  return leftSum + rightSum + root.value;
};

/*################################################
Question: Convert Binary Tree to Sorted Doubly Linked List
           5
        3     9
      1   4      13
               10   15
 
LeftSubTreeAsList 5 RightSubTreeAsList
     1 3 4              9 10 13 15
#################################################*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  };
};

function tree2list(root, listTail = null) {
  if (!root) return listTail;

  // First, we're looking for the last node, so we're going
  // as far right as we can.
  if (root.right) {
    listTail = tree2list(root.right, listTail);
  };

  // If there is no right node, then this is the last one
  // in the in-order traversal, so prepend that to the tail
  // of the list and that node is now the head.
  let listHead = root;
  listHead.right = listTail;
  if (listTail) {
    listTail.left = listHead;
  };

  // Now look at the left subtree and pass in the list
  // we've created so far.
  if (root.left) {
    listHead = tree2list(root.left, listHead);
  };

  // Return the list as we've built it up to this point.
  return listHead;
};  