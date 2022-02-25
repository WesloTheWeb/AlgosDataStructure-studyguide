/*##################################################################################
TAG: Reverse a Linked List - 3m
##################################################################################

Q. Reverse a given linked list.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
• Given a linked list: 1 // returns 1

*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  };
};

function arrayify(head) {
  let ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.value);
    ptr = ptr.next;
  }
  return array;
}

// O(N) time
function reverse(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    [cur.next, cur, prev] = [prev, cur.next, cur];
  };

  return prev;
};

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))));
// [13, 1, 5, 3, 7, 10]
var LL2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// [1, 2, 3, 4]
console.log(arrayify(reverse(new ListNode(1)))) // [1];
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))); // [2, 1]
console.log(arrayify(reverse(LL1))); // [10, 7, 3, 5, 1, 13]
console.log(arrayify(reverse(LL2))); // [4, 3, 2, 1]
console.log(arrayify(reverse(null))); // []; null case

