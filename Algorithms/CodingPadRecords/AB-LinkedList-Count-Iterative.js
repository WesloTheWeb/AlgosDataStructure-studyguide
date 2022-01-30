/*##################################################################################
TAG: Count Elements in a Linked List (iterative) - 1m
#####################################################################################

Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1`
*/

// Data Structure of the Linked List in JavaScript.
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

/*############################
Iterative Solution
############################*/

function count(node) {
    let count = 0;

    if (node == null) {
        return 0;
    }

    while (node.next != null) {
        count += 1;
        node = node.next;
    }
    return count + 1;
};

/*############################
Iterative Solution - 2
############################*/

function count2(node) {
    let count = 0

    while (node) {
        count += 1
        node = node.next
    }
    return count
}

// Test Cases to run:
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(count(null)) // 0
console.log(count(LL1)) // 3
console.log(count(new ListNode())) // 1