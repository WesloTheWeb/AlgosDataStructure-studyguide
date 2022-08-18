/*
PROBLEM:
Given two non-empty linked lists representing two non-negative integers, add the two numbers 
and return the sum as a linked list. The most significant digit comes first and 
each of their nodes contains a single digit.

You may assume the integer doesn't contain any leading zero, except the number 0 itself.

EXAMPLE:

Example 1:
Input: 
l1 = [7,2,4,3],
l2 =   [5,6,4]

Output: [7,8,0,7]

Example 2:
Input:
l1 = [2,4,3],
l2 = [5,6,4]

Output: [8,0,7]

Example 3:
Input:
l1 = [0],
l2 = [0]

Output: [0]

APPROACH:

*/

function ListNode(x) {
  this.value = x;
  this.next = null;
}

//attempt 
function solution(l1, l2) {
    let values = [];
    let overflow = 0;

    while (l1.next || l2.next) {
        const value = (l1.value + l2.value + overflow) % 10;
        overflow = l1.value + l2.value + overflow >= 10 ? 1 : 0;
        values.push(value);

        l1 = l1.next || new ListNode(0);
        l2 = l2.next || new ListNode(0);
    };

    const value = (l1.value + l2.value + overflow) % 10;
    overflow = l1.value + l2.value + overflow >= 10 ? 1 : 0;
    values.push(value);

    if (overflow === 1) {
        values.push(1);
    };

    let node = undefined;
    values.reverse().forEach(item => {
        if (node === undefined) {
            node = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = node;
            node = newNode;
        }
    });

    return node;
}