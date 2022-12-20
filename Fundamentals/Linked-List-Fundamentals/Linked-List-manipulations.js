/*

Question : 

Given a linked list, remove the head and tail of the list and return the new list.
input : 1->2->3->4->5
output: 2->3->4

Edge cases/Observations/Assumptions
1. Can be null/single node
2. You are given head pointer 

Approach: 
1. keep track of prev, so can assign tail 
value

1->2->3->4->5->null
   p
         c
    

Q: Remove every kth node in a linked list, where k >= 2.

input : 1->2->3->4->5 , k=2
output:  1->3->5

Edge cases/Observations/Assumptions:
1. List is going to be a valid list

Approach
1) Iterate through the linked list
  // if the current position % k === 0
    // delete that node
2) return the list

Q 3 : Remove the center node of LinkedList

Assumptions:
1.





Approach : 
1.

Follow-up 
Complete question 3
Reverse linked list in groups of k 

input: 1->2->3->4->5->6->7->8
output: 2->1->4->3->6->5->8->7



*/
class ListNode {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function removeHeadAndTail(head) {
    if (!head) return null;  // 0 nodes
    if (!head.next) return null;  // 1 node
    if (!head.next.next) return null;  // 2 nodes
    head = head.next;  //deleting head
    let curr = head;
    let prev = new ListNode(0, curr);
  
    while (curr) {
      if (curr.next === null) {
        prev.next = null;   //deleting tail
      }
      prev = curr;
      curr = curr.next;
  
    }
    return head;
  }
  
  let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  let list2 = new ListNode(1, new ListNode(2));
  let list3 = new ListNode(1)
  
  // console.log(removeHeadAndTail(list1))
  // console.log(removeHeadAndTail(list2))
  // console.log(removeHeadAndTail(list3))
  
  function removeKthNode(head, k) {
    let counter = 0;
    let curr = head;
    // 1->2->3->4->5
    // p
    // c
    let prev = new ListNode(0, head);
  
    while (curr) {
      counter++;
      if (counter === k) {
        prev.next = curr.next;
        counter = 0;
      }
      else {
        prev = curr;
      }
      curr = curr.next;
    }
  
    return head;
  }
  
  console.log(removeKthNode(list1, 2))