/*##################################################################################
TAG: Remove All Elements with a Target Value in a Linked List - 3m
##################################################################################

Q. Given a linked list and a target integer, remove all nodes with the value target.

Examples:
• Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
• Given a linked list: 4, target: 4  // returns an empty list
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

function arrayify(head) {
    let ptr = head;
    var array = [];
    while (ptr != null) {
        array.push(ptr.value);
        ptr = ptr.next;
    };
    return array;
};

/*############################
Iterative Solution
############################*/
// O(N) time
function remove(node, value) {
    if (!node) return node;
    const sentinelNode = new ListNode(0, node)
    let curr = sentinelNode;
    
      while(curr && curr.next) {
        if (curr.next.value === value) {
          curr.next = curr.next.next;
        } else {
          curr = curr.next;
        };
      };
    
    return sentinelNode.next;
  };

/*############################
Recursive Solution
############################*/
// O(N) time
function remove(node, value) {
    if (!node) {
        return null;
    } else if (node.value === value) {
        return remove(node.next, value);
    } else {
        node.next = remove(node.next, value);
        return node;
    };
};

// Test Cases
var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
var LL2 = remove(null, 1);
console.log(arrayify(LL2)); // []
LL1 = remove(LL1, 1);
console.log(arrayify(LL1)); // [4, 2, 3, 2, 2] 
LL1 = remove(LL1, 2);
console.log(arrayify(LL1)); // [4, 3]
LL1 = remove(LL1, 3);
console.log(arrayify(LL1)); // [4]
LL1 = remove(LL1, 4);
console.log(arrayify(LL1)); // []

// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head! 