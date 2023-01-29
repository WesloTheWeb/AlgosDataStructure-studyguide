// Erin breakdown of Linked List
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

let list = new ListNode(3, new ListNode(-1, new ListNode(2, new ListNode(5))));
let list2 = null;
let list3 = new ListNode(3, new ListNode(-1, new ListNode(2, new ListNode(4))));

function insertBeforeTarget(head, target) {
    //Edge case: check for empty list case
    if (head === null) return [];

    // Case: Check if target is at the head
    let dummyHead = new ListNode(27, head);
    // make sure to compare the .value
    if (dummyHead.next.value === target) {
        // create a new node, point it to head
        let newHeadNode = new ListNode('X', head)
        return newHeadNode;
    }

    // Handle the rest of the nodes
    let curr = head;

    while (curr && curr.next) {
        // make sure to compare the .value
        if (curr.next.value === target) {

            //1. insert a new element by creating a new node 
            const newNode = new ListNode('X')
            //2. Point new node next pointer to the next value
            newNode.next = curr.next
            //3. Point curr's next pointer to the new node
            curr.next = newNode

            // increment curr pointer by 2 nodes
            curr = curr.next.next
        } else {
            // increment curr pointer by 1 node
            curr = curr.next
        }
    }
    return head;
}

console.log(JSON.stringify(insertBeforeTarget(list2, 2), null, 2)) // empty list case
console.log(JSON.stringify(insertBeforeTarget(list, 3), null, 2)) // head case
console.log(JSON.stringify(insertBeforeTarget(list, 2), null, 2)) // middle list case
console.log(JSON.stringify(insertBeforeTarget(list3, 4), null, 2)) // tail case