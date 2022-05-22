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
    // let dummyHead = new ListNode(list);
    let dummyHead = new ListNode(0);
    let curr = dummyHead.next = list;
    curr = dummyHead;

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
