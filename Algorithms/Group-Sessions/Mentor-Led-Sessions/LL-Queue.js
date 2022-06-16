/*

Implement a basic queue class using a linked list as the underlying storage. Queues have two critical methods, enqueue() and dequeue() to add and remove an item from the queue, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the queue. All of these methods should run in O(1) time!

Examples:

const q = new LLQueue();
console.log(q.size()) // 0
q.enqueue(2);
q.enqueue(3);
console.log(q.size()) // 2
console.log(q.dequeue()); // 2
console.log(q.size()) // 1
console.log(q.dequeue()); // 3

(back) H - n - n - n - T (front)

represent new item as T

add an item: (constant time, new node becomes new head)

remove an item: iterate through list until you grab the last, remove it and assign previous to last

Queue: new items come in through the front, items can only be removed from the back
FIRST IN, FIRST OUT, LAST IN LAST OUT

*/


class ListNode {
    constructor(value = 0, next = null, prev = null) {
      this.value = value
      this.next = next
      this.prev = prev
    }
  }
  
  class LLQueue {
    constructor() {
      this.head = null
      this.tail = null
      this.size = 0
    }
  
    enqueue(value) {
      // we want to push new node to front
      // create new node
      // new node's next should poin to old head
      // update the head to the new node
      // update the old head's previous to the new node
      // what if LL is empty?
      let node = new ListNode(value);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size += 1;
    }
  
    /*
  
    H - n - n - n - n - T
                        ^ remove and return
                    ^ new tail
  
    */
  
    dequeue() {
      // remove the node we want to dequeu
      // select tail, tail should point to the head instead of the node deque'd
      // node = prev to tail
      // node.next = null
      //assign the new tail 
      // return "poped" node
  
      // effective way
      let nodeToRemove = this.tail;
      this.tail = nodeToRemove.prev;
      this.tail.next = null;
      this.size -= 1;
      return nodeToRemove.value;
  
    //   let secondToLast = this.tail.prev;
    //   let nodeToRemove = this.tail;
    //   secondToLast.next = null;
    //   this.tail = secondToLast;
    //   this.size--;
    //   return nodeToRemove.value;
  
    }
    
    size() {
      return this.size;
    }
  }
  
  