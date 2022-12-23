/*################################################
PROBLEM 1:
Status: 
Q. Given a sorted linked list, insert an element in the appropriate position iteratively.

Example:
Given a linked list: 1 -> 3 -> 4, target: 2 // returns 1 -> 2 -> 3 -> 4

[execution time limit] 4 seconds (js)

[input] linkedlist.integer list

head of the list

[input] integer target

target value to be inserted

[output] linkedlist.integer

head of the updated linked list



##################################################*/

 
/* APPROACH
 

*/

// Function:
function solution(list, target) {
    let curr = list;
    // const node = new ListNode(n);
    
    while (curr) {
        if (curr.next == target) {
            curr.next = new ListNode(target);
        }
        // move pointer
        curr = curr.next;
    }
    
    return curr;
}
