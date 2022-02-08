/*  Pair Learning (Remove All Elements with a Target Value in a Linked List )



*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}


function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function remove(node, target) { 
 if(!node) return node
  
  let sen = new ListNode(45, node)  // the first value can be whatever default, but we are returning the node!
  let curr = sen
  
  while(curr && curr.next) {
    if(curr.next.value === target)
      curr.next = curr.next.next
    else
      curr = curr.next
  }
  return sen.next
  // We want to return the .next because it points to the node!!!
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
var LL2 = remove(null, 1);
console.log(arrayify(LL2)) // []
LL1 = remove(LL1, 1);
console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
LL1 = remove(LL1, 2);
console.log(arrayify(LL1)) // [4, 3]
LL1 = remove(LL1, 3);
console.log(arrayify(LL1)) // [4]
LL1 = remove(LL1, 4);
console.log(arrayify(LL1)) // []

// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head! 