// session with sunny 
// todo: go over this and review

/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000


Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
since k is 2, we switch 2 at a time

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
since k is 3, we switch 3 at a time, remainder isn't 3 so they stay as is.

Example 3:
input: head = [1, 2], k = 2
Output: [2, 1]

Approach:
- we want to swap out number of nodes, multiples of k.
- as we iterate the linked list, we can have counter that counts each time we pass a node that will go up to k.
   - when we reach k we want to switch
- keep a prev node to backtrack

Input: head = [1,2,3,4,5], k = 2

k is 2
head -> 1 -> 2 -> 3 -> 4 -> 5 -> null    
d   
                  prev 
                      curr

d.next = curr
curr.next = prev
prev = curr.next.next

head -> 2 -> 1 -> 3 -> 4 -> 5 -> null    

*reset k after swap
** move our pointers


Output: [2,1,4,3,5]



*/

function reverseKGroup(head, k) {
    let count = 0;
    let dummyHead = new Node(0, head);
    let prev = null;
  
    const helper = (curr, prev, kcount) => {
      // base case
      if (!curr) return;
  
      if (kcount === k) {
        // we want swap
        prev = curr;
        curr = curr.next.next;
  
        // reset count
        count = 0;
      }
  
      // increase
      count++;
      helper(curr.next, prev, count);
    };
    
    helper(dummyHead.next, prev, count);
    return head;
  };
  
  
  class Node {
    constructor(value, next = null) {
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
  
  console.log(arrayify(
    reverseKGroup(new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))), 2)
    )) // [2,1,4,3,5]
  
  console.log(arrayify(
    reverseKGroup(new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))), 3)
    )) // [3,2,1,4,5]