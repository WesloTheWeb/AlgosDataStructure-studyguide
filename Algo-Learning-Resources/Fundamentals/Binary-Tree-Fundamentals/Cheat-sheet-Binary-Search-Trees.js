/* Reference for working with Binary Search Trees
Creating the following Tree:
               21
        14             28
    11     18      25      32
   5 12   15 19   23 27   30 37

*/
// Utility Class
class ListNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

let a = new ListNode(5); let b = new ListNode(12)
let c = new ListNode(15); let d = new ListNode(19)
let e = new ListNode(23); let f = new ListNode(27)
let g = new ListNode(30); let h = new ListNode(37)
let leftLeft = new ListNode(11, a, b)
let leftRight = new ListNode(18, c, d)
let rightLeft = new ListNode(25, e, f)
let rightRight = new ListNode(32, g, h)
let left = new ListNode(14, leftLeft, leftRight)
let right = new ListNode(28, rightLeft, rightRight)
let root = new ListNode(21, left, right)

/*#########
SEARCHING
Searching through a well-balanced BST has a time complexity of O(logN) because half the tree is avoided at each node 
traversal down the path from the root to a leaf node. On the other hand, searching through an unbalanced BST has a 
time complexity of O(N); 

in the worst case, each tree node has only one child, similar to a linked list.
###########*/
// Iterative Version
function iterativeSearchInBST(root, target) {
    let cur = root;

    while (cur) {
        if (target == cur.val)
            return cur;

        // less than root so go left
        else if (target < cur.val)
            cur = cur.left;

        // greater than root so go right
        else // target > cur.val
            cur = cur.right;
    };

    return null;
};

// Recursion Version
function recursiveSearchInBST(root, target) {
    // Base Case
    if (!root)
        return null;

    // When target is found
    if (target == root.val) {
        return root
    }

    // less than root so go left
    else if (target < root.val) {
        return recursiveSearchInBST(root.left, target);
    };

    // greater than root so go right
    return recursiveSearchInBST(root.right, target);
};


let target1 = 27
let target2 = 29

  //             21
  //      14             28
  //  11     18      25      32
  // 5 12   15 19   23 27   30 37

/*#########
INSERTION
Insertions use the same comparison algorithm as searching through a BST. However, BSTs typically have unique values, 
so we shouldn't insert the desired value if it already exists in the tree. 
That means exiting out of the algorithm whenever the current node equals the desired insertion value when 
traversing the path from the root to a leaf node. Some exceptions allow duplicates, 
which should consistently insert the value as a new node in the right or left subtree throughout the tree.

in the worst case, each tree node has only one child, similar to a linked list.
###########*/

var insertIntoBST = function(root, val) {
    // Base Case
    if (!root) return new TreeNode(val); // because we are inserting

    if (val > root.val) {
       root.right = insertIntoBST(root.right, val);
    };

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    };

    return root;
};

/*#########
DELETION
Deletions use the same comparison algorithm as searching through a BST. Like deletion in linked lists, 
we navigate to one node before reaching the desired node instead of directly to it so that we can null out the 
reference to the desired node. 

Then, we null out the parent's pointer to the desired node to remove the only reference to that desired node and 
let the computer garbage collect the orphaned node. The deletion algorithm would involve an additional step to 
preserve the desired node's sub-tree while maintaining the BST properties..
###########*/
var pruneTree = function(root) {
    if (!root) {
        return null;
    }
    
    let left = pruneTree(root.left);
    let right = pruneTree(root.right);
    
    if (root.val == 1) {
        return new TreeNode(1, left, right);
    }
    
    if (!(left || right)) {
        return null; 
    }
    
    return new TreeNode(0, left, right);
};