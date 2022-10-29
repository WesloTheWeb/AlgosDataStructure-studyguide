/*
Swapping Nodes in a Linked List


You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).


Input: head = [1,2,3,4,5], k = 4
Output: [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]


check if head is null
  return null if head is null

define slow pointer and fast pointer, set values to head 
for i in range(k):
  fast pointer = fast pointer.next 

kth_node = fast_pointer 

while fast pointer is not null 
  fast pointer = fast pointer next 
  slow pointer = slow pointer next
** slow pointer should be at kth end of the list 

temp_val = slow pointer.value 
slow pointer.value = kth_node.value 
kth_node.value = temp_val 

return head 
*/

class ListNode {
    constructor(val, next = null){
      this.val = val
      this.next = next
    }
  }
  
  function swapKthNodeFromStartAndEnd(head, k){
    if(head === null){
      return null
    }
  
    let fastPtr = head
    for(let i = 0; i < (k - 1); i++){
      fastPtr = fastPtr.next
    }
    
    let kthNode = fastPtr
  
    let slowPtr = head
    while(fastPtr.next) {
      slowPtr = slowPtr.next
      fastPtr = fastPtr.next
    }
  
    let temp_val = slowPtr.val
    slowPtr.val = kthNode.val
    kthNode.val = temp_val
    
    return head  
  }
  
  // 1, 2, 3, 4, 5
  const ex1 = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))))
  // [7,9,6,6,7,8,3,0,9,5]
  const ex2 = new ListNode(7,new ListNode(9,new ListNode(6,new ListNode(6,new ListNode(7,new ListNode(8,new ListNode(3,new ListNode(0,new ListNode(9,new ListNode(5)))))))))) 
  const oneNodeTest = new ListNode(1)
  /*
  [1,2,3,4,5] k=2
       ^   ^
  
  */
  const h1 = swapKthNodeFromStartAndEnd(ex1, 1)
  // printLL(h1) // Output: [1,4,3,2,5]
  const h2 = swapKthNodeFromStartAndEnd(ex2, 5)
  // printLL(h2) // Output: [7,9,6,6,8,7,3,0,9,5]
  const h3 = swapKthNodeFromStartAndEnd(oneNodeTest, 1)
  printLL(h3) // Output: [1]
  
  function printLL(head){
    while(head) {
      console.log(head.val)
      head = head.next
    }
  }