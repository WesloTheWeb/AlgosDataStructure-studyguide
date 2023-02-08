// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
/* APPROACH
- Iterate through linked list
- check if target val is equal to the next pointer
if so, make current pointer equal to the next's next pointer skipping
the node
- otherwise keep moving.
*/
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