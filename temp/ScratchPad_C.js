/*

Given the head of a linked list with a cycle, return the node that causes the cycle (where it begins).
If the list doesn't have any cycles, return -1.
You may not modify/change the list structure. You can assume that the node values in the list are unique.

Function Signature: 
function findCycleNode(head)

Target runtime and space complexity:
O(n)

Examples:
3 -> 2 -> 0 -> 5 -> (2...) => Node(2)
3 -> 2 -> 0 => -1
5 -> 19 -> 3 -> 4 -> (5...) => Node(5)

APPROACH:
- LLs are subsequentail with a value node and pointer 

OPTION 1: Use of 2 pointers
X -> 3 -> 2 -> 0 -> 5 -> (2...) => Node(2)
                s
                f

X -> 5 -> 19 -> 3 -> 4 -> (5...)
                      s
                      f
            
  - Iterate through list, if the fast pointer is equal to the slower pointer we know its a cycle

Approach 1. Using a set to spot repeated values 

- Create a set to store node values 
- Loop through LL. At each node:  [O(n) operation]
  - If the node's value is in the set [O(1) operation]
    - return the value (it's the one causing the cycle)
  - Otherwise, add the value to the set [O(1) operation]
- Return -1 (by now, no value has repeated)

Time: O(n) 
Space: O(n)

found = {15, 3, 9}
*/

class Node {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
  }
  
  function findCycleNode(head) {
    let found = new Map();
    let curr = head;
  
    while (curr) {
      if (found.has(curr.val)) {
        return curr.val
      } else {
        //found.set(curr.value, curr.value);
        found.add(curr.val);
      }
      console.log(found);
  
      curr = curr.next;
    }
  
    return -1;
  }
  
  const LL1 = new Node(15, new Node(3, new Node(9, new Node(15))))
  const LL2 = new Node(3, new Node(2, new Node(0)))
  // 3 -> 2 -> 0 => -1
  
  console.log(findCycleNode(LL1))
  console.log(findCycleNode(LL2))