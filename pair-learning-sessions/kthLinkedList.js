class ListNode {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

/*
  1  2  3  4  5
  i1
  i2
  
  k = 2
*/

function kthFromLast(head, k) {
  let fast = head;
  let slow = head;

  console.log(fast);

  // Moving the first pointer by K 
  for (let i = 0; i < k; i++) {
    fast = fast.next
  };

  if (fast == null) return null;

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 0)) // 10
console.log(kthFromLast(LL1, 2)) // 3 
console.log(kthFromLast(LL1, 5)) // 13
console.log(kthFromLast(LL1, 6)) // -1