/*
Q. Given a linked list, return the kth element from the end of the list.
   If the k exceedes the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 0 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 6 // returns -1
#####################################*/
/* Approach:

13 1 5 4 k = 9
         f         
s


*/
// List Node Data Structure:
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}


function kthFromLast(head, k) {
  let fast = head;
  let slow = head;

  if (!head) return -1;

  for (let i = 0; i < k; i++) {
    if (fast.next) {  // important to check fast.next is null return -1 !!
      fast = fast.next;
    } else {
      return -1;
    }
  };

  /*
  This can change depending on if line 27 is head.next or not.  
  - If fast is at head, then our while loop condition is fast.next
  - If fast is at head.next then our while loop is at fast.
  */
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.value;

};

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10)))))) // 13 1 5 3 7 10

console.log(kthFromLast(LL1, 0)) // 10
console.log(kthFromLast(LL1, 1)) // 7
console.log(kthFromLast(LL1, 2)) // 3 
console.log(kthFromLast(LL1, 5)) // 13
console.log(kthFromLast(LL1, 6)) // -1

var LL2 = new ListNode(2, new ListNode(3)); // 2 -> 3

console.log('linked list #2:', (kthFromLast(LL2, 1))) // 2
/*
2  3
 f
s
*/