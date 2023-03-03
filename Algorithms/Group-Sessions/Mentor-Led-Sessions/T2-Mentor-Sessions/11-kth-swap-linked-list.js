/*########################
TYPE: Linked List
Question:
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example:
Input: head = [1, 2, 3, 4, 5], k = 2
                     s
                           f
Output: [1, 4, 3, 2, 5]

Input: head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], k = 5
Output: [7, 9, 6, 6, 8, 7, 3, 0, 9, 5]


Approach:
I was not there this session.

Time Complexity:
Space Complexity:

Pseudo Code:

########################*/
const l = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    };

    fromArray(array) {
        let sentinel = new Node();
        let node = sentinel;

        for (let i = 0; i < array.length; i++) {
            node.next = new Node(array[i]);
            node = node.next;
        };

        return sentinel.next;
    };
};

let LL2 = new Node().fromArray([1, 43, 5, 6, 8]);
console.log(JSON.stringify(LL2, null, 4));

function swapKthNodes(head, k) {
    if (!head) return null;
    if (k <= 0) return head;

    let slow = head,
        fast = head;

    // increment fast until it's k positions ahead of slow
    while (fast && k > 1) {
        fast = fast.next;
        k--;
    };

    let newFast = fast;

    while (newFast.next) {
        slow = slow.next;
        newFast = newFast.next;
    };

    // swap
    const temp = fast.value;
    fast.value = slow.value;
    slow.value = temp;

    return head;
};

// console.log(JSON.stringify(swapKthNodes(l, 2)), 'returns 1 4 3 2 5 ');
console.log(JSON.stringify(swapKthNodes(null, 2)), 'returns null');
console.log(JSON.stringify(swapKthNodes(l, 0)), 'returns 1 2 3 4 5');
console.log(JSON.stringify(swapKthNodes(l, -1)), 'returns 1 2 3 4 5 ');




// Test Cases:
console.log();
console.log();
console.log();