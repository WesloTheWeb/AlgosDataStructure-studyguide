// Exercise of Linked Lists group session
// August 1st, 2022
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };

    toString() {
        let result = String(this.value);
        if (this.next) {
            result += ` -> ${this.next.toString()}`;
        };

        return result;
    };
};

/* PROMPTS
Write the following functions for this class:
 Task 1:  function createCycle(head) - point the tail to the head
 Task 2:  function multiplyNext(head) - multiply the value in each node by the value in the next node
 Task 3:  function removeEveryOther(head) - skip every other node, head never changes
 Task 4:  function shiftDataLeft(head) - shift the data left without altering next pointers
 Task 5:  function findThirdQuarterNode(head) - find the node exactly 3/4ths length through the linked list. Hard-mode: solve it another way.
*/

/*#######
TASK 1
########*/
function createCycle(head) {
    let curr = head;

    if (!head) {
        return head;
    };

    while (curr) {
        if (curr.next === null) {
            curr.next = head;
        };

        curr = curr.next;
    };

    return head;
};

/*#######
TASK 2
########*/
function multiplyNext(head) {
    let runner = head;

    while (runner.next) {
        runner.value *= runner.next.value;
        runner = runner.next;
    };

    return head;
};

/*#######
TASK 3
########*/
function removeEveryOther(head) {
    let curr = head;

    while (curr && curr.next) {
        curr.next = curr.next.next;
        curr = curr.next;
    };

    return head;
};

/*#######
TASK 4
########*/
function shiftDataLeft(head) {
    let curr = head;
    let starter = curr.value

    while (curr && curr.next) {
        // console.log(curr.value);
        curr.value = curr.next.value;
        curr = curr.next;

    };

    curr.value = starter;

    return head;
};

const n4 = new ListNode(4);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

/*#######
TASK 5
########*/
// Use of math way to do it:
function findThirdQuarterNodeSL(head) {

    let current = head
    let count = 0

    while (current) {
        count++
        current = current.next;
    }

    current = head

    let third = Math.floor(count * .75)

    while (third > 1) {
        current = current.next
        third--
    }

    return current

}

console.log(findThirdQuarterNodeSL(head).toString())

// Use of the Two Pointers:
function findThirdQuarterNodeNW(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next.next;
        fast = fast.next.next.next;
    };

    return slow;
}

console.log(findThirdQuarterNodeNW(head).toString())