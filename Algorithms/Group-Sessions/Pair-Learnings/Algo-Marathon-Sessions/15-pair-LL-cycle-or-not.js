/* Office Hour - Algo Marathon
Date:  Aug 12th
PARTNERS: Michael C.

QUESTION:
Given a linked list, determine if it has a cycle

Examples:
Input: 1 → 2 → 3
Output: False
 
Input:
 
head1 1 → 2 → 3  → 3 → 5
head2 4 -> 5 -> 6 -> 7 -> 8
  
1 → 2 → 3  → 3 → 5  
        ↑________↓
  
  
1 → 2 → 3  → 3 → 5  
        ↑________↓
             s
             f
  
1  -> 2
      s   
      f

      1 -> 2 -> 3  3 will point to the head back to 1
  
Output: True

Function signature:
function hasCycle(head) -> Boolean

APPROACH:
- Iterate through the list
- have some sort tracker of each value (if all unique) 
if appears as a pointer to existing value we know that its a cycle.
- then return true

PSEUDO CODE:


Time Complexity: O(n)
Space Complexity: O(n)
#########################################*/
class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

// Our attempt:
function hasCycle(head) {
    const seenNode = new Set();
    let curr = head;

    while (curr && curr.next) {
        if (seenNode.has(curr.value)) return true;
        seenNode.add(curr.value);
        curr = curr.next;
    };

    return false;
};

// Test Cases:
let ll1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
console.log(hasCycle(ll1), false);

let funnyNode = new ListNode(3, null);
let ll2 = new ListNode(1, new ListNode(2, funnyNode));
let ll3 = new ListNode(3, new ListNode(5, ll2));
funnyNode.next = ll3;

console.log(hasCycle(ll2), true);

let ll4 = null;
console.log(hasCycle(ll4), false);


/* Solution:
Here's our explanation of the solution:
Use a fast and slow pointer and iterate through the linked list, with the fast pointer going twice as fast as the slow pointer. If the fast and slow pointer ever meet, there is a cycle in the linked list.
Our solution:
def has_cycle(head):
  slow, fast = head, head
  while fast is not None and fast.next is not None:
    fast = fast.next.next
    slow = slow.next
    if slow == fast:
      return True  # found the cycle
  return False

Solution Test Cases: 

Input: null
Output: False

Input:
1 →
↑_↓
Output: True


*/