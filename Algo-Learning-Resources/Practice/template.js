/*######################################################################################
QUESTION:


##########
EXAMPLES
##########


#################
Expected Runtime
##################
Time:
Space: 


######################################################################################*/

/*###############
HELPER FUNCTIONS
################*/

// Linked Lists:
class Node {
    constructor(val, next=null) {
      this.val = val;
      this.next = next;
    };
  };
  
  function toString(head) {
    if (!head)
      return "<empty>";
  
    let parts = [];
    while(head) {
      parts.push(head.val);
      head = head.next;
    };
  
    return parts.join(" -> ");
  };

// Binary Trees  
class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  };
};

/*###############
TEST CASES
################*/