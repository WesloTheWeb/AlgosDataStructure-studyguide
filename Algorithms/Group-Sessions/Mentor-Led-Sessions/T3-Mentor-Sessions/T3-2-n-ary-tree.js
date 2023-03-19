/*########################
TYPE:
QUESTION:
Assume you are given a Node class for an n-ary tree like so:

class Node:
    Node[] children
    int val

Given an n-ary tree, convert it to a collection of linked lists by level. 
Return the head of each level.
 
Edge cases/Observations/Assumptions : 
- print each linked list to Return
- null/None -> return null/None, console log a message
- there are no cycles
- linked list made of new nodes

Approach:
- breadth first traversal using a queue
#1 have an additional function that translates a level list of nodes to a linkedList
  - create a sentinel node, curr pointer pointing to sentinel node
- begin at root of tree, putting root node in queue
- while our queue is populated:
  - popleft node off of queue, have currNode = node popped off of this queue
  - if the length on our queue is = 0 (queue is empty)
    - create a new level for our tree

  - if this currNode has children:
    - add these children to the queue
  
  #3
  - create variable that stores length of the queue
  - while i is less than the length of the queue
  - pop the queue and store the node into a variable
  
var solution = array
#2 while queue is not empty
  variable to keep track of nextLevel
  create head of linked list
  for n in queue:
    add new node to linked list with value from n
    add all children of n to nextLevel
  add linked list to solution
  replace nodes in queue with nextLevel

  #4 add a null node to the queue at the end of the level

########################*/
function Node(val, children) {
    this.val = val;
    this.children = children || [];
};

function convertToLinkedLists(root) {
    if (!root) {
        return [];
    };

    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        let head = null;
        let tail = null;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!head) {
                head = tail = new ListNode(node.val);
            } else {
                tail.next = new ListNode(node.val);
                tail = tail.next;
            }
            for (let child of node.children) {
                queue.push(child);
            };
        };

        result.push(head);
    };
    return result;
};

// Test Cases:
console.log();
console.log();
console.log();