/*
PROMPT:
Given an array containing numbers, convert this to a singly linked list and return the head of the list.

Expected Runtime
Time: O(n) to iterate through the n length array
Space O(n) to store n elements into nodes

*/

class Node {
    constructor(val, next = null) {
        this.val = val;
    };
};

function arrayToLL(array) {
    let sentinel = new Node(0)

    let curr = sentinel
    for (let i = 0; i < array.length; i++) {
        curr.next = new Node(array[i])
        curr = curr.next
    }

    return sentinel.next
}

// The below just prints the list.
function printList(head) {
    if (!head) {
        return "<empty>";
    }
    const parts = [];
    while (head) {
        parts.push(head.val);
        head = head.next;
    }
    return parts.join(" -> ");
}