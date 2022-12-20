/*
1 2 3
6 5 9

Q. Find the sum of two linked lists (of equal length)

APPROACH:
1 -> 2 -> 3
c1

6 -> 5 -> 9
c2

7 - 7 - 12  // New node of the sum of the other two node
n

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}


function maxSubArraySum(l1, l2) {
    let dummyHead = new ListNode(0);
    let pointer1 = l1;
    let pointer2 = l2;
    let currNode = dummyHead;
    // const newListSum = [];

    while (pointer1) {
        currNode.next = new ListNode(pointer1.value + pointer2.value);
        currNode = currNode.next;
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return dummyHead.next;
}

// Test Cases
// var LL1 = new ListNode(1, new ListNode(2, new ListNode(3)));
// var LL2 = new ListNode(6, new ListNode(5, new ListNode(9)));

maxSubArraySum(LL1, LL2);
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log(arrayify(maxSubArraySum(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(maxSubArraySum(new ListNode(0), new ListNode(0)))) // [0]