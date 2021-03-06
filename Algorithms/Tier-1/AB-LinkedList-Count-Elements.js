/*##################################################################################
TAG: Count Elements in a Linked List (iterative / Recursive) - 1m
#####################################################################################

Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1`
*/

// Data Structure of the Linked List in JavaScript.
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

/*############################
Iterative Solution
############################*/

function count2(node) {
    let count = 0

    while (node) {
        count += 1;
        node = node.next;
    };
    return count;
};

// Test Cases to run:
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(count(null)); // 0
console.log(count(LL1)); // 3
console.log(count(new ListNode())); // 1


/*############################
Recursive Solution
############################*/

function countRecursive(node) {
    if (node == null) {
        return 0;
    }

    return 1 + count(node.next);
};

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log('Recursive Solution:', countRecursive(null)); // 0
console.log('Recursive Solution:', countRecursive(LL1)); // 3
console.log('Recursive Solution:', countRecursive(new ListNode())); // 1