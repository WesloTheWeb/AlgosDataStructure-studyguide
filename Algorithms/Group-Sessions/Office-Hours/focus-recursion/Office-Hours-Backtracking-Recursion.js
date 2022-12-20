/* Office Hour - Algo Marathon
Date: October 24th, 2022
TOPIC: Recursion / Backtracking
Contains:
- How to improve understanding of backtracking/recursion problems? Looking for some insights into how to better think about backtracking problems such as: subsets, permutations, and combinations in order to be able to better approach them with ease. What do you believe are the best foundations to help with such problems to really work on if we still struggle with these types of problem?
- Given a linked list, remove the center node. If the length of the list is even, remove the first of the two center nodes.

note: This is kinda sloppy, not 100% accurate.
#########################################*/

/*############################
QUESTION: 1: How to improve understanding of backtracking/recursion problems? Looking for some insights into how to better think about backtracking problems such as: subsets, permutations, and combinations in order to be able to better approach them with ease. What do you believe are the best foundations to help with such problems to really work on 
if we still struggle with these types of problem?

Prompt:
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
#############################*/

function subsets(self, list[int]) {
    let subsequences = [];

    const getAllSubsequences = (word, accum = [], i = 0) => {
        if (i == word.length) {
            subsequences.push(accum)
            return;
        }
        /*
            loop through x to y.
            append to an array.
            call recursively with updated array.
            remove the appended thing from array.
        */
    }

    getAllSubsequences(nums, [], 0);
    return subsequences;
}

/*############################
QUESTION: 2: Given a linked list, remove the center node. 
If the length of the list is even, remove the first of the two center nodes.

EXAMPLES:
For example, given this list:
X -> 1 -> 2 -> 3 -> 4 = count is 4 / 2 = 2 - 1
^.   ^
c
1 -> 3 -> 4


X -> 1 -> 2 -> 3 -> 4 -> 5 = count is 5 / 2 = 2
^.   ^.   ^
c

APPROACHES:

Algorithm #1:
1. 1st pass get the length of the linked list (in count variable)
2. go half way (count//2 or floor(count/2)) (if even, subtract count by 1)
3. start another pointer that begins at dummy, going until count = 0
4. hop over the node by doing cur.next = cur.next.next

Algorithm #2:
1. Start with a fast pointer and slow pointer both at the head, have a prev ptr at the dummy
2. by the time fast ptr is not able to move, slow ptr will be at the node to remove, prev ptr will be at the node jsut before.
3. have prev pointer hop over the curr node: prev.next = prev.next.next

#############################*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    };
};

function toString(head) {
    if (!head)
        return "<empty>";

    let parts = [];
    while (head) {
        parts.push(head.val);
        head = head.next;
    };

    return parts.join(" -> ");
};

function solution(head) {
    if (!head) return head;

    let dummy = new Node(0, head);
    let slow = dummy;
    let hare = head;

    while (hare.next && hare.next.next) {
        slow = slow.next;
        hare = hare.next.next;
    };

    slow.next = slow.next.next;
    return dummy.next;
};