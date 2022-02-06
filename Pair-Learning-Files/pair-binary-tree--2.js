/*##################################################################################
TAG: Append an Element to a Linked List (iterative / recursive) - 1m
#####################################################################################

Q. Given a linked list, append an element with a target value to the list iteratively.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5, target: 7 // returns 1 ➞ 4 ➞ 5 ➞ 7
• Given a linked list: 0, target 7 // returns 0 ➞ 7

*/

// Data Structure Dependency:
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

function arrayify(head) {
    let ptr = head;
    var array = [];
    while (ptr != null) {
        array.push(ptr.value);
        ptr = ptr.next;
    };
    return array;
};

/*############################
Iterative Solution
############################*/
// O(N) time
function append(head, target) {
    let node = head;

    if (!head) {
        return new ListNode(target);
    };

    while (node.next) {
        node = node.next;
    };

    node.next = new ListNode(target);
    return head;
};

/*############################
Recursive Solution
############################*/
// O(N time)
function append(head, target) {
    if (!head) {
        return new ListNode(target);
    }
    if (head.next) {
        append(head.next, target);
    } else {
        head.next = new ListNode(target);
    }
    return head;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(arrayify(append(null, 1))) // [1]
console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))) // [0, 7]