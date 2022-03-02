/*##################################################################################
TAG: Find Kth Element from the End a Linked List in One Pass - 3m
#####################################################################################▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

Q. Given a linked list, return the kth element from the end of the list.
   If the k exceedes the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 0 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 6 // returns -1
#####################################*/
/*
  1  2  3  4  5
              f
           s
  k = 2
*/
// List Node Data Structure:
class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  };
};

function kthFromLast(head, k) {
  // Write your code here.
  return -1
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1