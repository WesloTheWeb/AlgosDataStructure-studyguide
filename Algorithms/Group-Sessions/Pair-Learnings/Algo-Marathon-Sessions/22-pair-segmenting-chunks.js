/* Office Hour - Algo Marathon
Date: 10/13/2022
PARTNERS: Josie I.

QUESTION:
Given the head node of a linked list and any number (k), break your list into (k) consecutive chunks, 
with no two chunks should have a size differing more than one.

The result chunks should be in the same original order, and chunks occurring earlier should never be smaller
than later chunks.

Return an array of all (k) chunks.

Example 1
1 -> 2 -> 3 -> 4 -> 5, k = 5 
should return [[1], [2], [3], [4], [5]]

Example 2
1 -> 2 -> 3, k = 5 
should return [[1], [2], [3], [], []]

Example 3
2 -> 2 -> 3 -> 4 -> 5 -> 6 -> 4 -> 8 -> 9 -> 10, k = 3 
should return [[2,2,3,4],[5,6,4],[8,9,10]]

APPROACH:
- Can also have any chunks can have empty [], []. 

OPTION 1:
- Go through linked list and count each node, put in variable
- divide that by k to determine how many chunks to have or rough estimate how many should be in each chunk for k buckets
- chunks occurring earlier should never be smaller than later chunks.
- iterate again to put into a 2D array


PSEUDO CODE:


Time Complexity:
Space Complexity:
#########################################*/

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };

    toString() {
        return this.val + (this.next
            ? ' -> ' + this.next.toString()
            : '');
    };
};

// Our attempt:
const chunkSegments = (head, k) => {
    //let results = Array(k)
    let numNodes = 0
    let results = [];
    let chunk = [];


    // iterate through linked list
    while (head) {
        numNodes += 1;
        chunk.push(head.value);
        head = head.next;
    }

    let leftover = numNodes % k;
    let standard = Math.floor(numNodes / k);
    console.log(numNodes, leftover, standard);
    console.log("chunk before loop", chunk);

    while (chunk.length > 1) {
        let nodes = chunk.splice(0, standard + leftover);
        console.log("chunk", chunk)
        results.push(nodes);
        if (leftover > 0) {
            leftover -= 1;
        };
    };

    // Push node values into chunk array as iterating the LL
    results.push(chunk)

    console.log(results);
};



// Test Cases:
const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const LL2 = new ListNode(1, new ListNode(2, new ListNode(3)));
const LL3 = new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(8, new ListNode(9, new ListNode(10))))))))));

console.log(chunkSegments(LL1, 5));
console.log(chunkSegments(LL2, 5));
console.log(chunkSegments(LL3, 3));

/* Solution: 
Here's our explanation of the solution:
The solution for this problem involves:
- Getting the length of the list
- Obtaining the size of each chunk (as well as the # of leftover nodes)
- Iterating through the list, adding to each "chunk" in your result.
- Adding any leftover nodes on each iteration, prioritizing earlier chunks before later ones.
- You can do this iteratively by following the above steps, keeping tracking of:

The length of the list
# of chunks
# of leftover nodes

SOLUTION
*/

function FORMATION_SOLUTION(head, k) {
    const res = [];

    while (head) {
        res.push(head.val);
        head = head.next;
    };

    let n = res.length;
    let output = [];
    let idx = 0;

    while (k) {
        let len = Math.ceil(n / k);
        n -= len;
        k--;

        let newHead = new ListNode(-1); // sentinel head
        let list = newHead;

        for (let j = 0; j < len; j++) {
            list.next = new ListNode(res[idx]);
            list = list.next;
            idx++;
        };

        output.push(newHead.next);
    };

    return output;
};

// Solution Test Cases:
console.log(FORMATION_SOLUTION(LL1, 5));
console.log(FORMATION_SOLUTION(LL2, 5));
console.log(FORMATION_SOLUTION(LL3, 3));