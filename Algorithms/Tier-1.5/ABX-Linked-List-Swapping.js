class LLNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    };
  };
  
  const testList1 = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5, new LLNode(6))))));
  const testList2 = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5)))));
  
  const swapNodesInPairs = (head) => {
    let dummyHead = new LLNode(0, head)
    let nodeBeforePairToSwap = dummyHead;
  
    while (nodeBeforePairToSwap.next && nodeBeforePairToSwap.next.next) {
        let firstNode = nodeBeforePairToSwap.next;
        let secondNode = firstNode.next
  
        nodeBeforePairToSwap.next = secondNode
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
  
        nodeBeforePairToSwap = firstNode;
    }
  
    return dummyHead.next;
  }
  
  const printList = (head) => {
    let cur = head;
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    }
  }
  
  printList(swapNodesInPairs(testList2));
  