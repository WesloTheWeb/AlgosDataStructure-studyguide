// Construct a doubly Linked List from scratch using class base syntax.
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    // add to end of list or tail
    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value); // head and tail are the same with single node.
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        };
    };

    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        };
    };

    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;
            // if last node in the list
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            return removedHead.value;
        };
    };

    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            // if this is the last node...
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.value;
        };
    };

    search(target) {
        // when we are traversing linked list we want to keep track of which node we are on.
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === target) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            };
        };

        return null;
    };
};

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

// console.log(list);
console.log(list.search(1)); // 1
console.log(list.search(3)); // 3
console.log(list.search(999)); // null

list.deleteHead(); // -1
list.deleteTail(); // 3
console.log(list);

/*
Doubly Linked List:
- Append: Time O(1), Space O(1)
- Prepend: Time O(1), Space O(1)
- Delete Head: Time O(1), Space O(1)
- Delete Tail: Time O(1), Space O(1)
- Search: Time O(n), Space O(1)

Advantages:
- Constant-time insertions and deletions.
- Flexible memory allocation.

Disadvantages:
- Linear time search operation.
- Greater memory overhead compared to singly linked lists due to additional previous pointer.
*/