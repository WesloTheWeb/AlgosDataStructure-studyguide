/*
August 19th, 2023
Interviewer: Kumet

Question #1:
Given a singly linked list, please return it folded

Input: [1,2,3,4]
Output: [1,4,2,3]

1 -> 2 -> 3 -> 4
1 -> 4 -> 2 -> 3

Input: 1,2,3,4,5
Output: 1,5,2,4,3

  a
1,2,3,4,5
        b
    a
1,5,3,4,2
        b

1,2,3,4,5
output: 1,5,2,4,3

1,2,3,4,5



list1: 1,2
       ^ 
list2: 5,4,3
       ^
1 -> 5 -> 2 -> 4 -> 3

temp = 2.next (3)
temp = node.next

hashmap
1: 2
2: 3
3: 4
4: 5
5: null

key node.val, val = node.next

        
Input: [1,4]
Output: [1,4]

input: [1]
output: [1]

- always will have one node

*/
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function foldList(head) {
    let temp = 0;
    let headRef = head;
    let curr = head;
  
    let fast = curr.next
    let slow = curr
  
    //          v
    // [1,2,3,4,5]
    //  ^       
    // temp = 1.next
  
    let arr = [];
  
    while (curr) {
      arr.push(curr.val);
  
      // move
      curr = curr.next
    };
  
    //          v  
    // [1,2,3,4,5]
    //  ^
    let p1 = arr[0];
    let p2 = arr[arr.length - 1]
    let list = new Node(-1);
  
  
    while (p1 !== p2) {
      let firstNode = new Node(arr[p1]) //1
      let secondNode = new Node(arr[p2]) // 5
  
      firstNode.next = secondNode;
      p1++;
      p2--
    }
  
  };