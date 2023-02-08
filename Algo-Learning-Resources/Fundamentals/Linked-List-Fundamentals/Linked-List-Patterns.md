# Patterns Documentation
This folder is a place of common patterns found as well as explanations. This will be in JavaScript.
This doc will attempt to summarize each but has folders for specific cases. To see individual pattern:
`cd Algorithms/patterns` and `node` a specific pattern.

# Table of Contents
1. [Traversing](#Traversing)
2. [Adding a Node](#addNode)
3. [Deleting a Node](#deleteNode)

Class structure of a Linked List Node:
```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};
```

# Traversing <a id="Traversing"></a>
Traversing a Linked List we can do it iteratively or recursively. Iterative is pretty straight forward with a `while loop`. This typically includes a pointer and a condition. It is important to remember your condition, do we want to include every node until the last node or are we including the last node. 

``` 
// ITERATIVE TRAVERSAL
function traverseLinkedList(head) {
  let curr = head; // our pointer

  while (curr) {
    console.log(curr.value);
    curr = curr.next
  };
};

// RECURSIVE TRAVERSAL
function traverseLinkedList(node) {
  // base case
  if (!node) return;

  // action
  console.log(node.value);

  // recursive case
  traverseLinkedList(node.next);
}

```
The `while` loop is saying while there is a valid `curr` we log the value. Then we move our pointer to the next node via the property that's on `curr.next`. It will continue until the `next` node is `null`. In other words until we reach the end of the linked list.

 
# Adding a Node <a id="addNode"></a>
This is the code want to write when we want to insert a node at a given index in a Linked List.

```
const insertNode = (head, value, index) => {
    // when you want to insert at the head:
    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }
    let curr = head;
    let counter = 0;

    while (curr) {
        if (counter == index - 1) {
            const temp = curr.next;
            curr.next = new Node(value);
            curr.next.next = temp;
        };

        counter += 1;
        curr = curr.next;
    };

    return head;
};

```
### How it Works:
Here's how the code works:

- If index is 0, it creates a new node with the given value and sets its next pointer to the current head of the linked list. Then it returns the new node as the new head of the linked list.

- If index is not 0, it uses two pointers, curr and counter, to traverse the linked list and find the node with the index-1.

- The while loop runs until the end of the linked list is reached. The counter is incremented for each iteration of the loop to keep track of the current node's index in the list. The curr pointer is updated to curr.next at each iteration, so that it moves to the next node in the linked list.

- When counter reaches the desired index-1, the new node is inserted between the current node and its next node. To insert the new node, curr.next is set to a new node with the given value, and the next pointer of the new node is set to the old next node of the current node, which is stored in temp.

- Finally, the original head of the linked list is returned.

- This function inserts a new node into the linked list in O(n) time, where n is the length of the linked list.
 
 # Removing a Node (first occurrence)<a id="removeNode"></a>
This is the code want to write when we want to insert a node at a given index in a Linked List.

```
const removeNode = (head, targetVal) => {
    if (head === targetVal) return head.next;

    let curr = head;
    let prev = null;

    while (curr && curr.next) {
        if (curr.val === targetVal) {
            prev.next = curr.next; // removes only first occurrence
            break;
        };

        prev = curr;
        curr = curr.next;
    };

    return head;
};

```
### How it Works:
Here's how the code works:

- If the head of the linked list is equal to the targetVal, it returns the next node of the head as the new head of the linked list, effectively removing the head node.

- If the head is not equal to the targetVal, it uses two pointers, curr and prev, to traverse the linked list and find the node with the targetVal.

- The while loop runs until the end of the linked list is reached, or the node with the targetVal is found. The prev pointer is updated to curr at each iteration, so that it keeps track of the previous node in the linked list. The curr pointer is updated to curr.next at each iteration, so that it moves to the next node in the linked list.

- When the node with the targetVal is found, the prev.next is set to curr.next, effectively removing the curr node from the linked list and connecting the prev node directly to the next node. The break statement is used to exit the loop and prevent any further searching for the targetVal.

- Finally, the original head of the linked list is returned.

This function removes a node from the linked list in O(n) time, where n is the length of the linked list.

## Removing a node (all occurrence):

If you want to remove all nodes with the target value instead of just the first occurrence, you would need to modify the code to continue the loop after removing a node, until all nodes with the target value have been removed. Here is an example of how you could modify the code to remove all occurrences:


```
const removeNode = (head, targetVal) => {
  if (!head) return null;

  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === targetVal) {
      if (!prev) {
        head = curr.next;
        curr = head;
        continue;
      } else {
        prev.next = curr.next;
        curr = prev.next;
        continue;
      }
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};
```