/* Office Hour - Algo Marathon
Date: 10/20/22
PARTNERS: Jill P.

QUESTION:
Given a linked list and an integer k, reverse the list in groups of k.

Function Signature: 
def reverseKGroup(head: ListNode, k: int) -> ListNode

Examples:

Example 1
Input: 
1 → 2 → 3 → 4 → 5 → 6
K = 2

Output:
2 → 1 → 4 → 3 → 6 → 5

Example 2
Input: 
1 → 2 → 3 → 4 → 5
K = 3

Output:
3 → 2 → 1 → 5 → 4

Example 3
Input: 
1 → 2 → 3 → 4 → 5
K = 5

Output:
5 → 4 → 3 → 2 → 1

Example 4
Input: 
1 → 2 → 3
K = 5

Output:
3 → 2 → 1


APPROACH:
 
    1 → 2 → 3 → 4 → 5 → 6
    K = 2

loop through our list
- as k increments
- reversal / pointer manipulation up to and including k
- return new reversed list

PSEUDO CODE:
        list = new ListNode(null, head);
        curr = list;
        resultList = new ListNode(null);
        toReverseList = new ListNode(null);
        count = 0;
        loop
        if (count < k)
        toReverseList.next = curr.next
        count--;
        else 
        resultList.next = reverse(toReverseList)
        toReverseList = null;
        count = k;
        curr.next

Time Complexity:
Space Complexity:
#########################################*/

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };

    toString() {
        let curr = this;
        let str = '';
        while (curr) {
            str += curr.val + " -> ";
            curr = curr.next;
        }
        return str;
    }

};
// Our attempt:
function reverseKGroup(head, k) {
    //Check if we need to reverse the group
    let curr = head;
    for (let i = 0; i < k; i++) {
        if (!curr) return head;
        curr = curr.next;
    }

    // Reverse the group (basic way to reverse linked list)
    let prev = null;
    let nxt = null;
    curr = head;
    for (let i = 0; i < k; i++) {
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    }

    //After reverse, we know that `head` is the tail of the group.
    //And `curr` is the next pointer in original linked list order
    head.next = reverseKGroup(curr, k)
    return prev;
};



// Test Cases:



// Solution:
function reverseList(head, count, k) {
    let prev = null;
    let curr = head;
    if (!curr.next) return head;
    let next = null;
  
    while (count <= k && curr) {
      next = curr.next; //save remaining list
      curr.next = prev; //reversal; null or point current item to items in new list
  
      prev = curr; //make curr the head of newList
      curr = next; //move curr to next item in remaining List
      count++;
    }
  
    return prev;
  }

// Solution Test Cases: