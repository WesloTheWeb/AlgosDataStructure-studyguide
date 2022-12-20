/*
**Just copied from pad did not do this session
LINKED LIST MANIPULATION

function createCycle(head) - point the tail to the head.
*

function multiplyNext(head) - multiply the value in each node by the value in the next node. The tail node has no next node so multiply it by itself.


---------------------------


1. function removeEveryOther(head) - remove every other node, skipping the head. The first node to be removed should be the first node after the head.

(1)  -> (3) -> (5) -> (6) -> null
                              i 

null returns null 
(1) -> null returns itself
(1) -> (2) -> null return (1) -> null 
(1) -> (2) -> (3) -> (4)-> null 
counter = number
traversal: 
  head.next = head.next.next  (4) -> null
  // counter ? 


Edge cases:
empty LL
one LL




/*
2. function rotateValuesLeft(head) - move the values left without altering next pointers. The head's value should become the tail's new value.
**


3. function findThirdQuarterNode(head) - find the node 3/4ths length through the linked list. How can this be solved with 1 pass without a length variable?
**
*/

// 1 -> 2 -> 3

/*
  1 -> 2 -> 3
       *
*/

class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  // 4 -> null
  function removeEveryOther(head) {
    if (!head) {
      return head;
    }
  
    let curr = head;
    while (curr && curr.next){
      
      curr.next = curr.next.next;
      // 4.next = null.next 
  
      curr = curr.next;
    }
    return head;
  }
  
  // console.log(JSON.stringify(myLinkedList))
  
  const ll = new ListNode(1, new ListNode(2, new ListNode(3))); // 1 -> 2 -> 3
  const ll2 = new ListNode(1); // 1 -> null
  const lc = new ListNode(2, new ListNode(4, new ListNode(5))); // 1 -> 4 -> 5
  console.log(JSON.stringify(removeEveryOther(ll)));
  console.log(JSON.stringify(removeEveryOther(ll2)));
  console.log(JSON.stringify(removeEveryOther(lc)));
  console.log(JSON.stringify(removeEveryOther(ll)));
  
  //odd
  // ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); 
  // console.log(JSON.stringify(removeEveryOther(ll)));
  
  
  /* 3. function findThirdQuarterNode(head) - find the node 3/4ths length through the linked list. How can this be solved with 1 pass without a length variable?
  */ 
  
  // alex
  function findThirdQuarterNode(head){
    
    let curr = head;
    let halfOfHalf = current.next
    
    while( curr && curr.next){
      
      if(halfOfHalf === null) return current.next
     
      curr = curr.next
      halfOfHalf = halfOfHalf.next;
    }
    return curr
  }
  
  // callie
  /// 1 -> 2 --> 3 --> 4 -->
  function findThirdQuarterNode(head){
    
    let mid = head.next
    while(mid && mid.next){
        return mid.next
    }
    
  }
  
  
  // kalyan
  function findThirdQuarterNodeKalyan(head) {
    const middleNode = findMiddleNode(head);
    return findMiddleNode(middleNode);
  }
  
  function findMiddleNode(head) {
    let fastPtr = head;
    let slowPtr = head;
    while (fastPtr) {
      slowPtr = slowPtr.next
      fastPtr = fastPtr.next
      if (fastPtr) {
        fastPtr = fastPtr.next
      }
  
      return slowPtr
      
    }
  }
  
  llkalyan = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))))
  console.log(findThirdQuarterNodeKalyan(llkalyan.value))
  // matthew
  
  function findThirdQuarterNode(head){
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true
    }
    
  }
  }
  
  
  
  // tim
  function findThirdQuarterNode1(head){
    
    
    let pt1 = head;
    let pt2 = head;
    while (pt2 && pt2.next){
    
      pt1 = pt1.next;
      pt2 = pt2.next.next;
    
    }
    pt2 = pt1;
    while (pt2 && pt2.next){
    
      pt1 = pt1.next;
      pt2 = pt2.next.next;
    
    }
    
    return pt1;
  
  }
  