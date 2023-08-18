class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add to the end of the list (tail)
    append(value) {
        const newNode = new Node(value);
        if (!this.tail) { // If list is empty
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add to the start of the list (head)
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) { // If it was empty before
            this.tail = newNode;
        }
    }

    // Delete the head
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const removedHead = this.head;
        this.head = this.head.next;
        if (this.head === null) { // if after deletion, list becomes empty
            this.tail = null;
        }
        return removedHead.value;
    }

    // For singly linked lists, deleting from tail is O(n), because you have to traverse the entire list to find the new tail.
    deleteTail() {
        if (!this.head) { // If list is empty
            return null;
        }
        if (!this.head.next) { // If only one node exists
            const removedTail = this.head;
            this.head = this.tail = null;
            return removedTail.value;
        }

        // Traverse the list to find the node right before the tail
        let currentNode = this.head;
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }

        const removedTail = currentNode.next;
        currentNode.next = null;
        this.tail = currentNode;
        return removedTail.value;
    }

    // Search for a value
    search(target) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null; // if value wasn't found
    }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);

console.log(list.search(1)); // Node with value 1
console.log(list.search(3)); // Node with value 3
console.log(list.search(999)); // null

list.deleteHead(); // 0
list.deleteTail(); // 3
console.log(list);

/*
Singly Linked List:
- Append: Time O(1), Space O(1)
- Prepend: Time O(1), Space O(1)
- Delete Head: Time O(1), Space O(1)
- Delete Tail: Time O(n), Space O(1)
- Search: Time O(n), Space O(1)
Advantages:
- Less memory overhead compared to doubly linked lists.
- Constant-time insertions at the start and end.
Disadvantages:
- Linear time deletions from the end.
- No backward traversal unlike doubly linked lists.
*/
