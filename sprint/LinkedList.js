/*
Return the second to last element in a linked list
Remove the last k elements from a LL
Sum of last K elements in LL
Return a copy of the last k elements in a LL.


13 1 5 3 7 10
            f
         s
            x

a = 1
b = 2
k = 2

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

function kthFromLast(head, k) {
  if (!head) return head

  let slow = head
  let fast = head

  for (let i = 0; i < k; i++) {
    if (fast) fast = fast.next
    else return -1
  }

  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  let sum = 0

  let newList = new ListNode(slow.value)
  let currNode = newList

  while (slow.next) {
    currNode.next = new ListNode(slow.next.value)
    currNode = currNode.next
    slow = slow.next
  }

  return newList
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(kthFromLast(LL1, 2))) // 17
// console.log(kthFromLast(LL1, 0)) // 10
// console.log(kthFromLast(LL1, 2)) // 3 
// console.log(kthFromLast(LL1, 5)) // 13
// console.log(kthFromLast(LL1, 6 