/*
Q. Given a linked list and a target, remove all nodes that are NOT the target value

Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

APPROACH:
1 - 5 - 5 - 2

- iterate through list
- if node != target, remove. Else keep.
- return list
*/

function solution(list, target) {
    let node = list;
    
    while (node.value == target) {
      node = node.next;
    };
    
    while (node.next != null) {
        if (node.next.value == target) {
            node.next = node.next.next;
        }
        else {
            node = node.next;
        }
    };
    
    return node;
};
