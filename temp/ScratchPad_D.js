/*
Q. Given a sorted linked list, insert an element in the appropriate position iteratively.

Example:
- Given a linked list: **`1 -> 3 -> 4`**, target: **`2`**
 // returns **`1 -> 2 -> 3 -> 4`**
*/

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function insert(list, target) {
  // If there is no list
  if (!list) return new ListNode(target);

  // sentinel pattern, dummy first value point to head of the actual list
  let sentinel = new ListNode(0);
  sentinel.next = list;

  let head = sentinel;


  while (head) {
    if (!head.next || target < head.next.value) {
      // swap logic
      const next = head.next;
      head.next = new ListNode(target);
      head.next.next = next;
      break;
    };
    // need to keep the chain moving
    head = head.next;
  };

  return list;

}

// Problem: It's only returning target and the chain of linked list is breaking off.

// Test Cases 
// Make linked list like these:
var LL1 = new ListNode(1);
LL1.next = new ListNode(3);
LL1.next.next = new ListNode(4);

var LL2 = new ListNode(-3);
LL2.next = new ListNode(-2);
LL2.next.next = new ListNode(-1);

var LL3 = new ListNode(1);
LL3.next = new ListNode(2);
LL3.next.next = new ListNode(3);
LL3.next.next.next = new ListNode(4);


console.log(insert(LL1, 2)) // [1, 2, 3, 4]
console.log(insert(LL2, -4)) // [-4, -3, -2, -1]
console.log(insert(LL2, 0)) // [-3, -2, -1, 0]
console.log(insert(null, 1)) // [1]
console.log(insert(LL3, 2)) // [1, 2, 2, 3, 4]