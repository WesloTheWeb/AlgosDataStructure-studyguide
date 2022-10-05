"""
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
"""

class Node:
  def __init__(self, val, next=None):
    self.val = val
    self.next = next


def findCycleNode(head):
  found = set()
  curr = head

  while curr: 
    if curr.val in found:
        return curr
    found.add(curr.val)
    curr = curr.next
  
  return -1

found = {15, 3, 9} -- integers
return a node object 

 
LL1 = Node(15, Node(3, Node(9, Node(15)))) ## 15
LL2 = Node(3, Node(2, Node(0))) ## -1
## 3 -> 2 -> 0 => -1

print(findCycleNode(LL1))
print(findCycleNode(LL2))

"""
function findCycleNode(head) {
    let map = new Map()
    let curr = head
    while (curr) { if (map.has(curr)) 
        { return curr }
        
    map.add(curr)
    curr = curr.next
}
return -1
}
"""

