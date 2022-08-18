// https://leetcode.com/problems/reverse-linked-list/
// var reverseList = function(head) {
//   let [prev, current] = [null, head]
//   while(current) {
//       [current.next, prev, current] = [prev, current, current.next]
//   }
//   return prev
// }

function reverse(list) {
    let prev = null;
    let curr = list;
  
    // n -> 9 -> 2 -> 3
    //      ^
    
    let count = 0
    while (curr) {
      console.log(count++)
      let temp = curr.next; // rest of the list
      curr.next = prev; // flip the prev to next
      prev = curr; // prev was curr
      curr = temp; // now curr should point to rest of the list
  
      //  prev = curr.next; // 2->3
      //  let temp = curr; // 9
      //  curr = prev; // 2-> 3
      //  curr.next = temp;
    }
  
    return prev;
  }
  
  let list2 = new ListNode(9, new ListNode(2, new ListNode(3)))
  
  function ListNode(x, next = null) {
    this.value = x;
    this.next = next;
  }
  
  console.log(reverse(list2)) // 3 -> 2 -> 9
  