/*################################################
PROBLEM 2:
Status: Perfecto
Q. Given a linked list, determine if it is monotonically increasing.
 Monotonically increasing means always increasing or remaining constant.
##################################################*/

 
/* APPROACH
 - Iterate through the list 
- We need to check if the curr node is less than or equal to the next node.
    - if it is not, return false
    - if it is keep going til end of the list.
- if no head, return false.
- if 1 element, return true.

*/

// Function:
function solution(head) {
    if (!head) return false;  // base case
    
    let current = head.value;
    head = head.next;
    
    while (head) {
      if (head.value < current) return false;
      current = head.value;
      head = head.next;
    }
    return true;
  }