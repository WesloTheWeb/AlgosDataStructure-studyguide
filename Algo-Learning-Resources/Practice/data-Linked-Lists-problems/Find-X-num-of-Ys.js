/*######################################################################################
QUESTION:
Given integers X and Y, return the head of a linked list with X nodes with value Y.

##########
EXAMPLES
##########

createLL(5, 3)
"3 -> 3 -> 3 -> 3 -> 3"

createLL(6, 6)
"6 -> 6 -> 6 -> 6 -> 6 -> 6"

createLL(2, -10)
"-10 -> -10" 

#################
Expected Runtime
##################
Time: O(X) to generate a length X list
Space O(X) to store a length X list


######################################################################################*/

/*###############
HELPER FUNCTIONS
################*/
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

 
function createLL(count, value) {

}



/*###############
TEST CASES
Validation
Independently create a comprehensive test suite for this problem. It should cover most general and boundary cases without enumerating every possible input permutation.
X is zero
X is one
X is two
X is a large number
X == Y
Y is zero
Y is negative

createLL(5, 3)
"3 -> 3 -> 3 -> 3 -> 3"

createLL(6, 6)
"6 -> 6 -> 6 -> 6 -> 6 -> 6"

createLL(2, -10)
"-10 -> -10" 
################*/

const testCase1 = new Node(3, new Node(3, new Node(3, new Node(3, new Node(3)))));
const testCase2 = new Node(6, new Node(6, new Node(6, new Node(6, new Node(6, new Node(6))))));
const testCase3 = new Node(-10, new Node(-10));


/*###################
SOLUTION
- Start by returning null if X is null. Otherwise, create a head node with value Y. 
- Then, create a curr pointer and iterate from 2 to X, 
- adding a node to the end and moving curr forward.
#####################*/

function solution(count, value) {
  if (count === 0)
    return null

  var sentinel = new Node()
  var curr = sentinel

  while (count > 0) {
    curr.next = new Node(value)
    curr = curr.next
    count--
  }

  return sentinel.next
}

console.log(solution(5, 3)); // null
console.log(solution(6, 6)); // null
console.log(solution(2, 10)); // null