/*##########################################################################################
SOURCE: Linked List - Inserting an Element.
Question: Given a sorted linked list, insert an element in the appropriate position. This is following a sorted order 
linked list.
############################################################################################*/

/*############################
Iterative Solution
############################*/
// O(N) time
function insert(head, target) {
    if (!head) return new ListNode(target);

    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let node = dummyHead;

    // I need know whats exactly happen with the logic in line 21 - 27 while the node is true.
    while (node) {
        if (!node.next || target < node.next.value) {
            const next = node.next;
            node.next = new ListNode(target);
            node.next.next = next;
            break;
        }
        node = node.next;
    }

    return dummyHead.next;
};

/*############################
Recursive Solution
############################*/

function insert(head, target) {
    let node = head;

    // Likewise, I don't know how to read "new ListNode(target, node)" line 43 and 45. 
    if (!node) {
        return new ListNode(target);
    } else if (target < node.value) {
        return new ListNode(target, node);
    } else {
        node.next = insert(node.next, target);
    }

    return head;
}

/*##########################################################################################
SOURCE: Linked List - Inserting an Element.
Question: Given a linked list, append an element with a target value to the list iteratively.
############################################################################################*/
