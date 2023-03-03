/*########################
TYPE: Linked List (Cleaner version w/ Matt O.)
NOTE: Kinda messy but the way he had toString for testing is really good for test cases.
Question:
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example:
Input: head = {1 -> 2 -> 3 -> 4 -> 5}, k = 2
Output: {1 -> 4 -> 3 -> 2 -> 5}

Input: head = {1 -> 2 -> 3 -> 4 -> 5}, k = 1
Output: {5 -> 2 -> 3 -> 4 -> 1}

Input: head = {1 -> 2 -> 3 -> 4 -> 5}, k = 3
Output: {1 -> 2 -> 3 -> 4 -> 5}

initial while loop where set fast point ahead of slow
pointer


Approach:
1. create pointers  (fast & slow)
2. have fast go until equal to kth
3. move slow pointer

c = 1 f = 1 => c = 2 f =  2

{1 -> 2 -> 3 -> 4 -> 5}, k = 2
                     f
                s

Time Complexity:
Space Complexity:

Pseudo Code:
----
count = 0
fast = head
k times:
  fast = fast.next
  count++

nodeToSwap1 = fast

slow  = head
while(fast){
  slow = slow.next
  fast = fast.next
}
nodeToSwap2 = slow

swap nodeToSwap1 with nodeToSwap2

return sentinel.next 
----
########################*/
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    toString() {
        return this.val + (this.next
            ? ' -> ' + this.next.toString()
            : '');
    };
};

function swapKth(head, k) {
    if (!head) return null;
    const dummy = new Node(0, head);
    let slow = dummy;
    let fast = dummy;
    let node1 = null;
    let node2 = null;

    for (let count = 0; count < k - 1; count++) {
        fast = fast.next;
    };

    node1 = fast;

    while (fast.next?.next) {
        slow = slow.next;
        fast = fast.next;
    };

    // node = node.next // traversal
    // node.next = node.next.next // removal
    // sentinel -> 1 -> 2 -> 3 -> 4 -> 5
    // swap (2) with (4)
    node2 = slow;
    console.log('before swap:', node1.val, node2.val);

    //swapping logic
    let a = node1.next.next;
    let b = node2.next.next;
    node2.next.next = a;
    node1.next.next = b;

    a = node1.next;
    b = node2.next;
    node2.next = a;
    node1.next = b;

    return dummy.next;
};

// Test Cases:
// {1 -> 2 -> 3 -> 4 -> 5}
const make12345 = () => new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

console.log('', swapKth(make12345(), 2).toString(), '\n', '1 -> 4 -> 3 -> 2 -> 5');
console.log('', swapKth(make12345(), 1).toString(), '\n', '5 -> 2 -> 3 -> 4 -> 1');