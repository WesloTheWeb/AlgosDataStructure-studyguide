/* Office Hour - Algo Marathon
Date: August 5th, 2022
PARTNERS: Joy L.

QUESTION:
Given a linked list, delete (k) nodes after the middle.
If (n) is the length of the list, the middle node is [n / 2] using zero-based indexing.
Return the head of the modified list.

APPROACH:
- move our fast pointer K number of times and then from what k lands on to the end we delete the nodes 
and return the remainder.
 
PSEUDO CODE
  1. Intiatlize our variables and 2 pointers fast and slow
  2. make our while loop, as we iterate over the list
  3. to delete the node change the node before k pointer to null to create new linked list
  4. return new head

ENGINEERING METHOD
move one of the k number of times
 
1 -> 2 -> 3 -> 4, k = 2
          f
s
 
should return 1 -> 2
 
Example 2
1, k = 0
should return 1 (single element list)
 
Example 3
2 -> 9 -> 4 -> 1 -> 7, k = 3 
               f
2 -> 9 -> 4 -> null    [new head]
      
            1 -> 7,k = 3 
manipulate the 4.next pointer to nulls
should return 2 -> 9 -> 4
 
PSEUDO CODE:


Target runtime and space complexity:
 O(n)
#########################################*/

class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    };
};

// Our attempt:
function deleteAfterK(head, k) {

    const findMiddle = (head) => {
        let dummy = new Node("dummy", head);
        let mid = dummy;
        let curr = head;

        while (curr) {
            mid = mid.next;
            curr = curr.next;
            curr = curr ? curr.next : null;
        };
        return mid;
    };

    const helper = (head2, k) => {
        const middle = findMiddle(head2);
        let current = middle;

        while (current && k >= 0) {
            current = current.next;
            k -= 1;
        };

        middle.next = current;
        return head2;
    };

    return helper(head, k);
};

//Test Cases
let test1 = new Node(1, new Node(2, new Node(3, new Node(4))));
let test2 = new Node(1);
let test3 = new Node(1);
let test4 = new Node(2, new Node(9, new Node(4, new Node(1, new Node(7)))));

console.log(deleteAfterK(test1, 2))// [1, 2]
console.log(deleteAfterK(test2, 0))// [1]
console.log(deleteAfterK(test3, 2))// [1]
console.log(deleteAfterK(test4, 3))// [2, 9 4]

// Solution:


// Solution Test Cases: