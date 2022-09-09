/* Office Hour - Algo Marathon
Date: 09/09/2022
PARTNERS: Isaiah F.

QUESTION:
Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.

Return the head node of the new linked list, after deleting/removing the nodes.
If a node appears more than once in a list, only the nodes that are kth or higher must be deleted.
You can still retain the nodes leading up to the kth occurrence.

Example 1
4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

Example 2
1 -> 1 -> 2, k = 2 should return 1 -> 2

Example 3
1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3

APPROACH:


PSEUDO CODE:
- Create hashmap for occurrences, in relation to k.
- Move the two pointers to iterate through the list
- when find first duplicate that occurs k number of times, delete node.
- continue to add nodes pass that (which is just adjusting prev pointers to curr.next)


Target runtime and space complexity:
O(n)
#########################################*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };

    // Helps print out test cases:
    toString() {
        return `${this.value} -> ${this.next}`
    };
};


// Our attempt:
function removeKAppearingNodes(head, k) {
    const nodeOccurrence = new Map();
    let curr = head;
    let prev = new Node(0, curr);

    while (curr && curr.next) {
        // if curr.value has occured add to map else +1 
        // console.log(curr.value, nodeOccurrence)
        if (nodeOccurrence.has(curr.value)) {
            if (nodeOccurrence.get(curr.value) >= k - 1) {
                prev.next = curr.next;
                curr = curr.next;
            } else {
                nodeOccurrence.set(curr.value, nodeOccurrence.get(curr.value) + 1);
                prev = curr;
                curr = curr.next;
            }
        } else {
            nodeOccurrence.set(curr.value, 1);
            prev = curr;
            curr = curr.next;
        };
    };

    return head;
};


// Test Cases:
let list1 = new Node(4, new Node(3, new Node(4, new Node(1, new Node(5)))));  //, k = 2 => [4, 3, 1, 5]
let list2 = new Node(1, new Node(1, new Node(2))); // => k = 2 => [1, 2]
let list3 = new Node(1, new Node(2, new Node(3))); // => k = 3 => [1, 2, 3]
console.log(list1.toString());
console.log(removeKAppearingNodes(list1, 2).toString());
console.log(list2.toString());
console.log(removeKAppearingNodes(list2, 2).toString());
console.log(list3.toString());
console.log(removeKAppearingNodes(list3, 3).toString());


// Solution:
// See python file.