/*
This is a reference on how to create Linked List nodes for test cases and examples. This also includes a helper
method to arrayify the linked lists to display the full chain in an array, since not all of it is available.

File path: cd ./Algo-Learning-Resources/Fundamentals/Linked-List-Fundamentals/
node cmd: node ./how-to-create-LL-nodes.js
*/

// Define the class, OOP it will have access to val and next.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

// ARRAYIFY HELPER FUNCTION FOR LINKED LIST:
function arrayify(head) {
    let ptr = head;
    var array = [];

    while (ptr != null) {
        array.push(ptr.value);
        ptr = ptr.next;
    };
    return array;
};

// Create sample nodes.
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// Set the next pointers.
a.next = b;
b.next = c;
c.next = d;
//NOTE: The default next is null, so we do not need to have d.next = null.

/*##############
TRAVERSAL

    A -> B -> C -> D
   curr

    A -> B -> C -> D
        curr

##############*/
// ITERATIVE
const printLinkedList = (head) => {
    let curr = head; // pointer to traverse

    while (curr) {
        console.log(curr.val);
        curr = curr.next // move the pointer.
    };
};

printLinkedList(a); // A B C D

// RECURSIVE
const printLinkedListRecursively = (head) => {
    // Base Case
    if (!head) return;
    // action
    console.log(head.val);
    // Recursive call
    printLinkedListRecursively(head.next);
};