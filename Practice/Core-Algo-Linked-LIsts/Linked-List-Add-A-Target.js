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
       // write code below:

};


console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))) // [1]

/*############################
Recursive Solution
############################*/
// O(N) time
function insertRecursive(head, target) {
   // write code below:
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
console.log(arrayify(insertRecursive(LL1, 2)));  // [1, 2, 3, 4]
console.log(arrayify(insertRecursive(LL2, -4)));  // [-4, -3, -2, -1]
console.log(arrayify(insertRecursive(LL2, 0)));  // [-3, -2, -1, 0]
console.log(arrayify(insertRecursive(null, 1)));  // [1]