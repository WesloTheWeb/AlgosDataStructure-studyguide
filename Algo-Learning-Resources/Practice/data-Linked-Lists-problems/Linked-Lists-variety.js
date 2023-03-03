// Look into this later
/* VARIETY OF LINKED LISTS PROBLEMS
TODO: Organize this into its own thing. 

Prompt
Given a linked list of numbers, return the first missing value. The list doesn't have to start at 1.
From where ever it starts expect each successive number to be one greater.

Function Signature
function findMissing(head)

Expected Runtime
O(n)

Examples
1 => 2
1, 2 => 3
1, 3 => 2

Test Cases
-1 => 0
-3, -1 => -2
45, 47 => 46
*/

// function findMissing(head) {
//   let curr = head;
//   let remainderNum = 0;

//   while (curr && curr.next) {
//     if (curr.next.next != curr.next + 1) {
//       remainderNum = curr.next + 1;
//     } else {
//       remainderNum = curr.next - 1;
//     }
//   };

//   return remainderNum;
// };

// console.log(findMissing(1));

/*
Prompt
Given a linked list, return the second to last element's value.

Expected Runtime
O(n)
Examples
1 -> 2 => 1

function secondToLast(head)


*/

class Node {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
  }
  
  const LL = new Node(1,  (new Node (2)))
  const LL2 = new Node(1,  (new Node (2, new Node(3))))
  const LL3 = new Node(1,  (new Node (2, new Node(3, new Node(4, new Node(5))))))
  
  
  
  function secondToLast(head) {
    let curr = head;
    let secondVal = 0;
  
    while (curr && curr.next) {
      if (!curr.next.next) {
        secondVal = curr.val
      }  
  
      curr = curr.next;
  
    }
  
    return secondVal;
  };
  
  // console.log(secondToLast(LL)) // 1
  // console.log(secondToLast(LL2)) // 2
  // console.log(secondToLast(LL3)) // 4
  
  