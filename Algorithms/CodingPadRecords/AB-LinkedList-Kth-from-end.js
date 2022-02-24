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
        this.value = value
        this.next = next
    }
}

/*############################
Iterative Solution
############################*/

function kthFromLast(head, k) {
    let fast = head.next;
    let slow = head;    ``

    // This is what moves the fast pointer by K steps.
    for (let i = 0; i < k; i++) {
        if (fast) {
            fast = fast.next;
        } else {
            return -1;
        }
    };

    // While fast pointer's next is NOT null, increment the fast and slow pointer by one.        
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // Lastly return the element value of wherever the slow pointer ends up being after the fast pointer reach end of list.
    return slow.value;
};


/*############################
Iterative Solution - More Optimized 
############################*/
function kthFromLast(head, k) {
    let fast = head;
    let slow = head;
  
    if (!head) return -1;
  
    for (let i = 0; i < k; i++) {
      if (fast.next) {  // important to check fast.next is null return -1 !!
        fast = fast.next;
      } else {
        return -1;
      }
    };
  
    /*
    This can change depending on if line 27 is head.next or not.  
    - If fast is at head, then our while loop condition is fast.next
    - If fast is at head.next then our while loop is at fast.
    */
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
  
    return slow.value;
  
  };

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// 13 1 5 3 7 10
//            f
//          s
console.log(kthFromLast(LL1, 0)) // 10
console.log(kthFromLast(LL1, 1)) // 7
console.log(kthFromLast(LL1, 2)) // 3 
console.log(kthFromLast(LL1, 5)) // 13
console.log(kthFromLast(LL1, 6)) // -1