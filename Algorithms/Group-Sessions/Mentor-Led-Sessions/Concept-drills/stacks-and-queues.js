// TODO: 
/*
CONCEPT: STACK
 Stack - last-in, first-out LIFO/FILO
  * push - add to the top (front)
  * pop - removing from the top (latest)
  * peek - looking at the top (latest)
  
JavaScript methods:
    push/pop
    shift/unshift

Python
  Deque class (DoublyLinkedList)
  append/pop - treating right side as the "top"
  appendLeft/popLeft - treating the left side as the "top"

CONCEPT: QUEUE
Queue - first-in, first-out FIFO/LILO
  * enqueue - add to the back
  * dequeue - remove from the front (oldest)
  * peek - looking at the front (oldest)
  
  JavaScript
  push/unshift
  pop/shift
  
  Python
  Deque class (DoublyLinkedList)
  append/popLeft - treating left side as the "front"
  appendLeft/pop - treating the right side as the "front"
  
  
*/



  

  
  

  
class Node {
    constructor(val, next=null){
      this.val = val
      this.next = next
    }
  }
   // Reverse a linked list using a stack
   /*
  INPUT
  2 -> 4 -> 6 -> 8 -> 9 ->
  
  TOP OF STACK
  9
  8
  6
  4
  2
  BOTTOM OF STACK
  
  TOP OF STACK
  9
  8
  6
  4
  2
  BOTTOM OF STACK
  
  9 -> 8 -> 6 -> 4 -> 2 
  
  PLAN
  1. Iterate through linked list and add each node to a stack via .push()
  2. Create sentinel for new linked list and a pointer for it 
  3. Pop node from the stack, to be a new Linked list Node that will point to the 
  next off the stack.
  4. Keep going until reach the bottom
  
  OUTPUT
  9 -> 8 -> 6 -> 4 -> 2 ->
  
  
   */
  function reverseLLWithStack(head) {
    let stack = []
    if(!head){
      return head
    }
    while(head){
      stack.push(head.val)
      head = head.next
    }
    
    let newNode = new Node(stack.pop());
    let sentinel = newNode;
    while (stack.length) {
      let node = new Node(stack.pop());
      sentinel.next = node;
      sentinel = node; // sentinel = sentinel.next
    }
    
    return newNode;
  }
  
  /*
  TOP OF STACK
  
  6
  4
  2
  BOTTOM OF STACK
  
  n  s
     N
  9->8->
  
  */
  
  function toString(head) {
    let theString = ""
    while(head) {
      theString += head.val + "->"
      head = head.next
    }
    return theString + "null"
  }
  
  let original = new Node(2, new Node(4, new Node(6, new Node(8, new Node(9)))))
  // console.log("actual  : " + toString(reverseLLWithStack(original)), "\nexpected: 9->8->6->4->2->null")
  
  
  //Rotate string with a queue
  
  /*
  
  abcde, 1 -> bcdea
  abcde, 2 -> cdeab
  abcde, 5 -> abcde abcde, 0 -> abcde abcde, 10 -> abcde
  
  Time Complexity
  O(N)
  O(k)
  
  APPROACH 1:
  PLAN
  if k > string length modulus it with the string length
  starting at index position k we
  insert elements using
  k to end of string, then 0 to k
  
  
  APPROACH 2:
  if k > string length modulus it with the string length
  string.split('')
  while k > 0
    shift from front and push to end
    k--
  return newString.join('')
  
  
  "abcde"
  [a b c d e]
  [b c d e] a
  [b c d e a]
  */
  function rotateStringWithQueue(str, k) {
    let newStr = str.split('');
  
    if (k > newStr.length) {
      k = k % newStr.length 
    }
  
    while (k > 0) {
      let char = newStr.shift()
      newStr.push(char)
  
      k--;
      // console.log(k);
    }
  
    return newStr.join('');
  }
  
  // console.table([
    console.log("actual  : " + rotateStringWithQueue("abcde", 1), "\nexpected: bcdea")
    console.log("actual  : " + rotateStringWithQueue("abcde", 2), "\nexpected: cdeab")
    console.log("actual  : " + rotateStringWithQueue("abcde", 3), "\nexpected: deabc")
    console.log("actual  : " + rotateStringWithQueue("abcde", 4), "\nexpected: eabcd")
    console.log("actual  : " + rotateStringWithQueue("abcde", 5), "\nexpected: abcde")
    console.log("actual  : " + rotateStringWithQueue("abcde", 0), "\nexpected: abcde")
    console.log("actual  : " + rotateStringWithQueue("abcde",10), "\nexpected: abcde")
  // ])
  
  /*  
       5
   10    15
  20 25 30 40
  
  in-order traverval
  visit(node.left)
  visit current node
  visit(node.right)
  
  
  d
  c
  b
  a
            
  a b c [d] e [d] g h i j
  
  pre-order traversal
  visit current node
  visit(node.left)
  visit(node.right)
  
  
  post-order traversal
  visit(node.left)
  visit(node.right)
  visit current node
  
  20 25 10 5 30 40 15 DFS depth first search (STACK)
  
  
  
  5
  
  [10 15]
  
  10
  
  [15 20 25]
  
  15
  
  [20 25 30 40]
  
  20
  25
  30
  40
  
  10 15 20 25 30 40 BFS breadth first search (QUEUE)
  
  
  */
  
  
  // Previous code (top-left button resets code):
  // 
  // 
  // 
 