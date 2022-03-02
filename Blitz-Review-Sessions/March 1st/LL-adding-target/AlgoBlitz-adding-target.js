/*
Q. Given a sorted linked list, insert an element in the appropriate position iteratively.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
    // Null case
    if (!list) return new ListNode(target);

    // Set up our pointer
    // let dummyHead = new ListNode(list); <-- THIS NOT WORKING WTF
    let dummyHead = new ListNode(0); // <-- SOMEHOW THIS WORKED
    let curr = dummyHead.next = list; // <-- SOMEHOW THIS WORKED

    // Iterate through list
    while (curr) {
        // Our check of the target in relation to the next node value:
        if (!curr.next || target < curr.next.value) {
            // swapping logic pattern:
            let next = curr.next;
            curr.next = new ListNode(target);
            curr.next.next = next;
            break;
        };
        
        curr = curr.next;
    };
    return dummyHead.next;
 };
 
 // TEST 5 / 6