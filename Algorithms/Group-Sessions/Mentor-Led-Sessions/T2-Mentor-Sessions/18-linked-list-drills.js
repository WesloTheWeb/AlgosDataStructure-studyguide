/*
1. Is LL monotonically increasing.  
2. Sum two linked lists
3. Find one third node in LL **
4. Copy LL starting from kth position ***
5. Find minimum node In LL 
6. Insert before target In LL ****

Node:
  val: Int
  next: None/ Node
  
Insert before target In LL:

input : 1 -> 3 -> 4    target 3 , node = 6
output : 1 
->6 ->3 ->4 

input 1 3 4  target = 5  node = 6
output: 1 3 4 

check if head exists
if target not found, return input list 

"dumyy" 1 3 4 

approach 1 :
 create dummy node
 attach it to the head
 check the "next" node

*/

class Node {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
    toString() {
      return this.val + "->" + this.next
    }
  }
  /*
  "dumyy" 1 3 4  , target 3 
          ^
  "dumyy" 1 3 4-> null , target 6
                  i
  */
  function insertBeforeTarget(head, target, int) {
    if (!head) return null;
  
    let dummy = new Node("dumyy", head)
    let p1 = dummy
  
    while (p1.next !== null && p1.next.val !== target) {
      p1 = p1.next
    }
    if (p1.next === null) return head.toString()
    p1.next = new Node(int, p1.next)
    return dummy.next.toString()
  }
  
  
  // test cases
  const LL1 = new Node(1, new Node(3, new Node(4))); // 1 - 3 - 4
  
  // console.log(insertBeforeTarget(LL1, 3, 6)); // 1 6 3 4
  // console.log(insertBeforeTarget(LL1, 5, 6)); // 1 3 4 
  
  /*
  time  O(n)
  space O(1)
  */
  
  // 4. Copy LL starting from kth position ***
  /*
  pos:    1    2    3 
  input : 1 -> 3 -> 4 
  
  input: None
  out : None
  
  if there is no head return null
  initialize the result List
  traverse  throught the linked list when at kth postion start copying the rest of list
  
  
  
  
  input : 1 -> 3 -> 4 -> 5, 2
          ^
  
  1 -> 3 -> 4    k = 0
       ^
  
  
  
  */
  
  function kthPosition(input, k) {
    if (!input) return input
  
    let dummy = new Node("foo");
    let dummyHead = dummy
    let curr = input
  
    while (curr) {
      if (k - 1 === 0) {
        dummy.next = new Node(curr.val)
        dummy = dummy.next
      } else {
        k -= 1
      }
  
      curr = curr.next;
    }
  
    return dummyHead.next.toString();
  }
  
  function copyLL(start){
    if (!start) return null
    return new Node(start.val, copyLL(start.next))
  }
  
  function kthPosition(input, k) {
  
   let  curr = input
  //  let  dummy = new Node("foo")
  //  let dummyptr = dummy
  
  /*
  
  
  */
  
    for (let i = 0; i<k; i++){
  
  
        curr = curr.next // out of bounds
  
    }
    
    return copyLL(curr)
    
  }
  
  const test1 = new Node(1, new Node(2, new Node(3, new Node(4))))
  const test2 = new Node(1)
  console.log(kthPosition(test1, 1))
  console.log(kthPosition(test1, 2))
  console.log(kthPosition(test1, 3))
  console.log(kthPosition(test1, 4))
  console.log(kthPosition(test2, 1))
  console.log(kthPosition(null))