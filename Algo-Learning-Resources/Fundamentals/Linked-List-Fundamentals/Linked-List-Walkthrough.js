// LINKED LIST NODE
class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
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
  

// LINKED LIST WALKTHROUGH 
class LinkedList {
    constructor() {
        this.head = this.tail = null;
    };

    //Append method - add to end
    append(value) {
        // if (!head) return new Node(target);
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        };
    };

    // Prepend - add to beginning
    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        };
    };

    //Delete head
    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            let removeHead = this.head;
            if (this.head === this.tail) {
                this.tail = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            return removeHead.value;
        }
    };

    //Delete Tail
    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.value;
        };
    };

    //Search method
    search(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    };
};

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    };
};


let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

list.search(1);
list.search(3);
list.search(69);

list.deleteHead();
list.deleteTail();