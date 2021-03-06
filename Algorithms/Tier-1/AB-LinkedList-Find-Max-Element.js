/*##################################################################################
TAG: Find Max Element in a Linked List (iterative / recursive) - 1m
#####################################################################################

Q. Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  };
};

/*############################
Iterative Solution
############################*/
// O(N) time
function findMax(node) {
  let result = node.value;

  while (node) {
    if (node.value > result) {
      result = node.value;
    }
    node = node.next;
  };
  return result;
};

/*############################
Recursive Solution
############################*/
// O(N) time
function findMaxRecursive(node) {
  if (!node.next) {
    return node.value;
  } else {
    const biggestValueInRest = findMaxRecursive(node.next);

    return (node.value > biggestValueInRest ? node.value : biggestValueInRest);
  };
};

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))));
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))));
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))));
console.log(findMax(LL1)); // 5
console.log(findMax(LL2)); // 7
console.log(findMax(LL3)); // 0
console.log(findMax(new ListNode(1))); // 1

// Recursive Logs
console.log(`Recursive Test Case: ${findMaxRecursive(LL1)}`); // 5
console.log(`Recursive Test Case: ${findMaxRecursive(LL2)}`); // 7
console.log(`Recursive Test Case: ${findMaxRecursive(LL3)}`); // 0
console.log(`Recursive Test Case: ${findMaxRecursive(new ListNode(1))}`); // 1