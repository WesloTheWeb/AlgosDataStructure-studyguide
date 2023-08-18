/*
'''
A priority queue is a data structure that allows inserting and removing data elements one at a time, keeps that data organized, and the removals are prioritized by some criteria: either the smallest current value first (as in a min heap), the largest (a max heap), or some other method of comparing and ordering the removals.

A heap is a specific way of implementing a priority queue. The key idea is to use an array, organized as a complete tree. Recall that a complete tree is one where every level except the last is full, and the last incomplete level has all of the nodes pushed to the left.

Being a complete tree, this can be implemented as an array:
- The root of the tree is at index zero.
- Given an index:
  - The left child is at (index * 2) + 1 =>
  - The right child is at (index * 2) + 2 => 
  - These can be reversed to compute a parent index

For this problem, start out building a Min Heap, that is, a heap where the smallest values bubble to the top and are removed first. 
 0  1  2  3     4  5  6
[1, 2, 3, None, 3, 4, 5]
 
(parent * 2) + 1 = child

parent = (child - 1)  // 2


EXAMPLE(S)
const h = new Heap();
h.peek() => undefined
h.add(3);
h.peek() => 3
h.add(2);
h.peek() => 2
h.remove() => 2
h.peek() => 3
h.add(4);
h.add(1);
h.add(5);
h.remove() => 1
 

FUNCTION SIGNATURE
class Heap {
  constructor(capacity)
  add(value)
  remove()
  peek()
  // length should be available as the number of elements currently in the heap
}
'''


constructor:
* initialize an empty array of size capacity


test case:
is the capacity the same as we initialized with


*/

class Heap {
    constructor() {
      this.data = [];
    };
  
    peek() {
      if(!this.data) {
        return undefined
      }
      return this.data[0]
    };
  
    add(value) {
      this.data.push(value)
      // "Bubble-up"
      // while current.value  < parent.value, swap them
  
      let child_idx = this.data.length - 1;
      let parent_idx = Math.floor((child_idx - 1) / 2) // 2
  
      // bubble-up
      while (this.data[child_idx] < this.data[parent_idx] ) {
        // swap value
        [this.data[child_idx], this.data[parent_idx]] = [this.data[parent_idx], this.data[child_idx]]
        // update indices 
        child_idx = parent_idx
        parent_idx = Math.floor((child_idx - 1) / 2)
      }
  
    };
  
    remove() {
      // move last element in heap to the top
      let tmp = this.data[0]
  
      // place "last" element at index 0
      this.data[0] = this.data[this.data.length-1]
      this.data.pop() // remove last element in the array
  
      // bubble-down
      /*
        compare current element with children, swap with the smallest child
      */
      current = 0
  
      return tmp
    };
  
  };
  
  
  // Test case: Create an object and check it's existance
  let h = new Heap()
  console.log(h.peek())
  
  // Test case: adding of a value to the heap
  h.add(3); // => [3]
  console.log(h.peek()) // => 3
  
  // Test case: bubbling
  h.add(2) // [3, 2]
  console.log(h.data)
  console.log(h.peek()) // 3 again cause [0] (line 62)
  
  // Test case: MOAR bubbling
  h.add(4) // level 2 complete
  h.add(5)
  h.add(6)
  h.add(7)
  h.add(1) // this value should bubble up
  console.log(h.peek()) // expect 1
  
  // Test case: remove
  console.log(h.remove()) // 1
  console.log(h.data)