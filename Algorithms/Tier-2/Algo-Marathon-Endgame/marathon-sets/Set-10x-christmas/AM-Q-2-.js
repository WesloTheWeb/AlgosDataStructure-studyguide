/*################################################
PROBLEM 2:
Status: 
Q. Given an unsorted linked list with unique values, insert an element before the target element

If target cannot be found in the list, do nothing.
Example:

Given a linked list: 3 -> -1 -> 2 -> 5, element (to be inserted): 0, target: 2
// returns: 3 -> -1 -> 0 -> 2 -> 5
[execution time limit] 4 seconds (js)

[input] linkedlist.integer head

head of the list

[input] integer target

vale of the target node

[input] integer value

value of the node to be inserted before the target node

[output] linkedlist.integer

head of the updated list



##################################################*/

 
/* APPROACH
 

*/

// Function:
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/*approach
- iterate through list
- if curr.next = target, insert element to be new next
- reroute

*/

function solution(head, target, value) {
    const dummyHead = new ListNode(27, head)
    let curr = dummyHead.next;
    
    while (curr && curr.next) {
        if (curr.next == target) {
            curr.next = value;
        }
        
        curr = curr.next;
    }
    
    return head;
}
