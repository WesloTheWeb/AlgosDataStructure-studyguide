/*################################################
PROBLEM 1
Q. Given a linked list, return the kth element from the end of the list.
You may assume all elements have a positive integer value.

If K exceeds the length of the list, return -1 instead.
Examples:

Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10
Given a linked list: [13, 1, 5, 3, 7, 10], k: 3 // returns 3

APPROACH:
- LL are 1-based not 0-based, so 1 = 1 not 0 = 1, no index.

13  1  5  3  7  10,  k = 1
                 s
                    f

13  1  5  3  7  10,  k = 3
          s
                    f

- Two pointers, f is denoted by value of k to get a head start.
- keep moving slow pointer by 1 and f pointer by k.
- When f pointer falls off, whatever value at s is the

**Best to use a dummy head to not have an off by one
##################################################*/

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
    this.value = x;
    this.next = null;
  };
  
  const solution = (list, k) => {
    // Create our pointers
    let slow = list;
    let fast = list;
    let dummyHead = new ListNode(27);
  
    dummyHead.next = list;
    // console.log(dummyHead) // check if we going to our list.
  
    // To Move our fast pointer k times
    // k - 1 I think is correct because when k = 1 returns the last element => fast = slow
    // haven't handled when k is negative
    if (k <= 0) {
      return slow.value
    }
    // yeahh idk.
    // depends on how you want to handle it really. Can return -1 if it's not wrapping around or k + something then we can count from the end again. But then this would require knowing how long the linked list is.
    // need to go to bed now. Hopefully this helped
  
    for (let i = 0; i < k - 1; i++) {
      // just make fast = fast.next, then check if fast is null. That means it's out of bounds
      fast = fast.next;
      if (!fast) {
        return -1;
      }
    };
   
    // iterate through the list.
    // added check for fast.next
    while (fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
    };
    // here both fast and slow point to null after while loop
  
    return slow.value;
  };
  
  // Tests Provided
  const b = new ListNode(1);
  const c = new ListNode(5);
  const d = new ListNode(3);
  const e = new ListNode(7);
  const f = new ListNode(10);
  
  // [13, 1, 5, 3, 7, 10],
  const solutionTestLL = new ListNode(13);
  solutionTestLL.next = b; // 1
  solutionTestLL.next.next = c; // 5
  solutionTestLL.next.next.next = d; // 3 
  solutionTestLL.next.next.next.next = e; // 7
  solutionTestLL.next.next.next.next.next = f; // 10
  
  const solutionTestLL2 = [];
  
  // console.log('test case values', solutionTestLL)
  // Test Cases
  console.log(solution(solutionTestLL, 1)) // 10
  console.log(solution(solutionTestLL, 3)) // 3
  console.log(solution(solutionTestLL, 6)) // 13
  console.log(solution(solutionTestLL, -1)) // -1
  console.log(solution(solutionTestLL, 7)) // -1
  console.log(solution(solutionTestLL2, -1)) // -1
  
  /* Expected Test Cases
  
    TEST # 1
    list: [13, 1, 5, 3, 7, 10],
    k: 1
    
    Expected: 10
  
    TEST # 2
    list: [13, 1, 5, 3, 7, 10],
    k: 3
  
    Expected: 3
  
    TEST # 3
    list: [13, 1, 5, 3, 7, 10],
    k: 6
    
    Expected: 13
  
    TEST # 4
    list: [13, 1, 5, 3, 7, 10],
    k: -1
    
    Expected: null
  
    TEST #5
    list: [13, 1, 5, 3, 7, 10],
    k: 7
    
    Expected: -1
  
  const testCase6 = {
    list: [],
    k: 1
  } // -1
  
  */