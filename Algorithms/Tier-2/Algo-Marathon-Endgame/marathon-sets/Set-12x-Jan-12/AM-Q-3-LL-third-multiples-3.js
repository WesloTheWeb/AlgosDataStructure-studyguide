/*################################################
PROBLEM 3:
Status: Good
Q. Given a linked list, return the value of the element that is at the 1/3 position from the head.

You may assume the total number of elements is multiples of 3 (e.g. 3, 6, 9, 12 ...).

Examples:

Given a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 // returns 2
Given a linked list: 1 -> 2 -> 3 // returns 1
[execution time limit] 4 seconds (js)

[input] linkedlist.integer head

head of the list

[output] integer

one third element's value in the list

##################################################*/


/* APPROACH
 - We know multiples of 3 each time... 3, 6, 9, 12.
    - multiples of 3 divide by 3...
    
    1 - 2 - 3
    return 1. Because 3 / 3 is 1. So that is our 1/3
- we might can use one pointer going by 1/3 in for loop to find 1/3 node
- can use a count to divide by 3. Going to need to get the total number of nodes in first loop.

*/

// Function:
function solution(head) {
    let curr = head;
    let count = 0;
    
    // Get the total number of nodes in list
    while (curr) {
        count++;
        curr = curr.next;
    }
    
    curr = head; // reset curr to head
    
    // Iterate again dividing total number by a third
    for (let i = 1; i < count / 3; i++) {
        curr = curr.next; // moves pointer
    }
    return curr.value;
};