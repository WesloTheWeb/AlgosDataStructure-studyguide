/*
Q. Reverse a given linked list.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
• Given a linked list: 1 // returns 1

    13 1 5 3
        p  c  n

- save the next 
- set curr.next to prev
- prev becomes curr
- set curr to next
*/

//   13 1 5 3
//          p c n


.
/  |  \
|  |  |
3->5->1->13

class ListNode {
constructor(value = 0, next = null) {
    this.value = value
    this.next = next
}
}

function arrayify(head) {
let ptr = head
var array = []
while (ptr != null) {
    array.push(ptr.value)
    ptr = ptr.next
}
return array
}

function reverse(head) {

let curr = head;
let prev = null;

while (curr) {
let temp = curr.next;
curr.next = prev;
prev = curr;
curr = temp;
}

return prev;

}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]