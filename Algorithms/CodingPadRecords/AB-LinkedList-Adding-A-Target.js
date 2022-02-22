/*##################################################################################
TAG: Insert a Target Element in a Sorted Linked List (iterative / recursive) - 1m
#####################################################################################

Q. Given a sorted linked list, insert an element in the appropriate position.

Examples:
• Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
• Given an empty linked list, target: 1  // returns 1
*/

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
    }
    return array;
};

/*############################
Iterative Solution
############################*/
// O(N) time
function insert(head, target) {
    // Null case
    if (!head) return new ListNode(target)

    // Set up our pointer
    let dummyHead = new ListNode(0, head)
    let node = dummyHead

    // Iterate through list
    while (node) {
        // Our check of the target in relation to the next node value:
        if (!node.next || target < node.next.value) {
            // swapping logic pattern:
            const next = node.next;
            node.next = new ListNode(target);
            node.next.next = next;
            break;
        };
        node = node.next;
    };
    return dummyHead.next;
};

var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))) // [1]
console.log(arrayify(insert(LL3, 2))) // [1, 2, 2, 3, 4]

/*############################
Recursive Solution
############################*/
// O(N) time
// function insertRecursive(head, target) {
//     let node = head
//     if (!node) {
//         return new ListNode(target);
//     } else if (target < node.value) {
//         return new ListNode(target, node);
//     } else {
//         node.next = insertRecursive(node.next, target);
//     }

//     return head;
// }

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
// var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
// console.log(arrayify(insertRecursive(LL1, 2)));  // [1, 2, 3, 4]
// console.log(arrayify(insertRecursive(LL2, -4)));  // [-4, -3, -2, -1]
// console.log(arrayify(insertRecursive(LL2, 0)));  // [-3, -2, -1, 0]
// console.log(arrayify(insertRecursive(null, 1)));  // [1]