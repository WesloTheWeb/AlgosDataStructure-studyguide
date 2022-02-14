/*##################################################################################
TAG: Find Kth Element from the End a Linked List in One Pass - 3m
#####################################################################################▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

Q. Given a linked list, return the kth element from the end of the list.
   If the k exceedes the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 0 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 6 // returns -1
#####################################*/
/*
  1  2  3  4  5
              f
           s
  k = 2
*/
// List Node Data Structure:
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

