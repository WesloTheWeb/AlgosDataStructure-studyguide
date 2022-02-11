/*
  1  2  3  4  == 10
        i
  
  - base case the LL is null
  - recursive case add node value each time we recall the function to the current node
  */
  
  class ListNode {
      constructor(value = 0, next = null) {
          this.value = value
          this.next = next
      }
  }
  
  function sum(node) {
      if (!node) return 0;
    
      return node.value + sum(node.next);
  };
  
  
  // Test Cases
  var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  console.log(sum(null)) // 0
  console.log(sum(LL1)) // 10
  console.log(sum(new ListNode(1))) // 1
   
