/*################################################
PROBLEM 1
Status: good
Q. Given a linked list, sum all elements in the list iteratively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 6
Given a linked list:   (empty list) // returns 0
[execution time limit] 4 seconds (js)

[input] linkedlist.integer list

head of the list

[output] integer

sum all all elements in the list
##################################################*/

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
    this.value = x;
    this.next = null;
}
 
/* APPROACH
- Take the value of each node and add them up.
- Create a sum variable that gets added on.
- Needs to stop at the end.
- Note the function signature.
*/
function solution(list) {
    let sum = 0;
    let curr = list;
    
    while (curr) {
        sum += curr.value;
        curr = curr.next;
    }
    
    return sum;
};
