/*##################################################################################
TAG: Insert Element into a Binary Search Tree - 1m
##################################################################################

Q. Given a binary search tree and a target element's value, insert the target in the appropriate position.

Examples:
• Given a binary search tree:
              
              6
            /   \
           3     8
          / \ 
         2   4

• For target: 7 // returns:
              
              6
            /   \
           3     8
          / \    /
         2   4  7
        /     \
       1       5

• For target: 1 // returns:
              
              6
            /   \
           3     8
          / \
         2   4
        /
       1
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] };
    var queue = [];
    var array = [];
    queue.push(root);
    while (queue.length !== 0) {
        var node = queue.shift();
        array.push(node.value);
        if (node.left) { queue.push(node.left) };
        if (node.right) { queue.push(node.right) };
    };
    return array;
};

// O(logN) time
function insertBST(root, val) {

    /*########################
    Formation Solution 
    - comparison are inversed!
    ##########################*/
    // let cur = root;

    // if (!root) return new TreeNode(val);

    // while (cur) {
    //     // cur.value = 5 and val is 8
    //     if (cur.value < val) {
    //         if (cur.right) {  // if existing right node
    //             cur = cur.right;
    //         } else {
    //             cur.right = new TreeNode(val);
    //             // return;
    //         };
    //     } else {
    //         if (cur.left) {  // if existing left node
    //             cur = cur.left;
    //         } else {
    //             cur.left = new TreeNode(val);
    //             // return;
    //         };
    //     };
    // };

    // // return root;

    /*########################
       Altered Solution 
       - comparison more intuitive
       - variable for new node
    ##########################*/
    let curr = root;  // our pointer;
    let node = new TreeNode(val);

    if (!root) return node;  // null case check.

    while (curr) {
        if (val < curr.value) {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = node;
                break;
            };
        };

        if (val > curr.value) {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = node;
                break;
            };
        };
    };

    return root;
};

// Test Cases
var tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))

insertBST(tree, 7)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7]) // [6, 3, 8, 2, 4, 7]
insertBST(tree, 5)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5]) // [6, 3, 8, 2, 4, 7, 5]
insertBST(tree, 1)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5]) // [6, 3, 8, 2, 4, 7, 1, 5]
var tree2 = insertBST(null, 1)
console.log(tree2.value, 1) // 1

// Final tree:
//              6
//            /   \
//           3     8
//          / \    /
//         2   4  7
//        /     \
//       1       5

// alternatvie solution
/*
/*
Q. Given a binary search tree and a target integer, check if the tree contains a target.

[execution time limit] 4 seconds (js)

[input] tree.integer root

root of the tree

[input] integer target

target element's value

[output] boolean

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
  };
  
  function arrayifyTree(root) {
    if (!root) { return [] };
    var queue = [];
    var array = [];
  
    queue.push(root);
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
  
    return array;
  };
  
  function insertBST(root, target) {
    if (!root) new TreeNode(target);
    
    let node = new TreeNode(target);
    let curr = root;
  
    while(curr) {
      if (target <= curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = node;
          break;
        }
      }
      else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = node;
          break;
        }
      }
    }
  
    return root;
  };
  
  var root = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8));
  // root = insertBST(root, 1);
  insertBST(root, 7);
  console.log(arrayifyTree(root), [6, 3, 8, 2, 4, 7]);
  insertBST(root, 5);
  console.log(arrayifyTree(root), [6, 3, 8, 2, 4, 7, 5]);
  insertBST(root, 1);
  console.log(arrayifyTree(root), [6, 3, 8, 2, 4, 7, 5]);
  console.log(root.value, 1);
  
*/