/*################################################
PROBLEM 6:
Status: 
Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ 
by more than 1.
In the case of an even-length array with not a clear "middle", pick the smaller number between the two to 
create the next child node. See the examples below.
Examples:

Given an array: [6,9,11,15,19,25]

Returns:

                11
               /  \    
              6    19 
               \   / \
                9 15  25

1. According to the rule, you choose the smaller value, 11, between 11 and 15.
2. For left child node of 11, you have to select between 6 and 9. According to the rule, select 6. There is only 1 node remaining which is greater than 6 so 9 becomes the right child of 6.
3. For the right child node of 11, you must choose 19. Subsequently 15 is the left child and 25 is the right child of 19.

##################################################*/

 
/* APPROACH
 

*/

// Function:

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/*


*/
function solution(array) {
    if (array.length == 0) {
        return null;
    }
    
    const mid = Math.floor(array.length / 2); // middle point
    const node = new Tree(array[mid]);
    node.left = solution(array.slice(0, mid));
    node.right = solution(array.slice(mid + 1));
    return node;
}
