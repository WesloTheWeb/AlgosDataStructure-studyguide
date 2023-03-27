/* PROBLEM
Status: good standing
Q. Given a linked list, sum all elements in the list recursively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 6
Given a linked list:   (empty list) // returns 0
[execution time limit] 4 seconds (js)

[input] linkedlist.integer list

head of the list

[output] integer

sum all all elements in the list

*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//


/* PSEUDO CODE / APPROACH
 Recursively do it similar to last problem
- Define base case
- Define recursive case
- Create a sum variable or a way that adds the value as iterating.
*/

function solution(list) {
    let sum = 0;
    // base case
    if (!list) return 0;
    
    // recursive case
    return (list.value + solution(list.next))
}
