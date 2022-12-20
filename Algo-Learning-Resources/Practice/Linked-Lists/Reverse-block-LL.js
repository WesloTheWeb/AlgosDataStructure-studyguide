/**
 Prompt
Given a linked list and a positive number, k, reverse k items in the list at a time as well as reverse the remaining fragment, if any.

Expected Runtime
Time: O(N) to iterate through the list of length N
Space: O(1) to manage a constant number of pointers or O(k) to recursively grow the call stack
 

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 3")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 3)) == "3 -> 2 -> 1 -> 6 -> 5 -> 4")


1 -> 2 -> 3

CASES:
if k is null, display list.
if k is greater than # of nodes

empty list
1 node list
odd length list
even length list
k = 1
k == list length
k == half list length
k > list length


 **/

class Node {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  }
  
  function toString(head) {
    if (!head)
      return "<empty>"
  
    let parts = []
    while (head) {
      parts.push(head.val)
      head = head.next
    }
  
    return parts.join(" -> ")
  
  }
  
  let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))));
  // console.log(JSON.stringify(list, null, 2))
  
  function reverseBlocks(head, k) {
    let dummyHead = new Node(27, head);
    let prev = 0;
  
  
    if (k === 0) return head;
    if (!head || !head.next) return head;
  
    // TODO: calculate length of list
    let counter = 0;
    let curr = dummyHead.next;
    while (curr) {
      counter++
      curr = curr.next;
    }
  
    // TODO: when to reverse K times after a fragment.
    
    // TODO: Reverse logic
    let temp = curr.next;
    curr.next.next = curr;
    curr.next = temp;
  
  }
  reverseBlocks(list) 
  
  /***
   * Solution
   // Recursive version
  function reverseBlocks(head, k) {
    // 0 and 1 length lists do not require reversing, no matter what k is.
    if (!head || !head.next || k === 1) return head;
  
    let prev = head;
    let curr = prev.next;
    prev.next = null;
  
    let last = prev;
    let count = 1;
    while (curr && count < k) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
      count++;
    }
  
    if (curr) {
      last.next = reverseBlocks(curr, k);
    }
  
    return prev;
  }
  
  // Iterative version
  function reverseBlocks(head, k) {
    function reverseOneBlock(head, k) {
      // 0 and 1 length lists do not require reversing, no matter what k is.
      if (!head || !head.next) return [head, head, null];
  
      let a = head;
      let b = head.next;
      a.next = null;
      let last = a;
      let count = 1;
      while (b && count < k) {
        const temp = b.next;
        b.next = a;
        a = b;
        b = temp;
        count++;
      }
  
      // first, last, remainder
      return [a, last, b];
    }
  
    if (k === 1) return head;
  
    const dummy = new Node();
    let last = dummy;
    let remainder = head;
  
    while (remainder) {
      const [f, l, r] = reverseOneBlock(remainder, k);
      last.next = f;
      last = l;
      remainder = r;
    }
  
    return dummy.next;
  }
   * 
  */
  
  