// Utilities DO NOT DELETE
class LLNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class BTNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function list2str(head) {
    const parts = [];
  
    while (head) {
      parts.push(head.value);
      head = head.next;
    }
  
    return `[${parts.join(" -> ")}]`;
  }
  const l2s = list2str;
  // END Utilities