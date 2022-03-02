/*
Q. Given a linked list and a target integer, remove all nodes with the value target.

Example:

Given a linked list: 1 -> 2 -> 2-> 3 -> 2, target: 2 // returns 1 -> 3
[execution time limit] 4 seconds (js)

[input] linkedlist.integer list

head of the list

[input] integer target

target value to be removed

[output] linkedlist.integer

head of the updated list
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
    if (!list) return list;

    let sentinel = new ListNode(0, list);
    let curr = sentinel;

    while (curr && curr.next) {
        if (curr.next.value === target) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        };
    };

    return sentinel.next;
}

let AlgoBlitzLL2 = new ListNode(1);

let AlgoBlitzLL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4,  new ListNode(5, new ListNode(6, ))))));


console.log('############################')
AlgoBlitzLL2 = solution(AlgoBlitzLL2, 0); // 1
console.log(arrayify(AlgoBlitzLL2)) 
// AlgoBlitzLL = solution(AlgoBlitzLL, 1); //   2 3 4 5 6
// console.log(arrayify(AlgoBlitzLL)) 
// AlgoBlitzLL = solution(AlgoBlitzLL, 2); // 1   3 4 5 6
// console.log(arrayify(AlgoBlitzLL))
AlgoBlitzLL = solution(AlgoBlitzLL, 3); // 1 2   4 5 6
console.log(arrayify(AlgoBlitzLL)) 
// AlgoBlitzLL = solution(AlgoBlitzLL, 4); // 1 2 3   5 6
// console.log(arrayify(AlgoBlitzLL)) 
// AlgoBlitzLL = solution(AlgoBlitzLL, 5); // 1 2 3 4   6
// console.log(arrayify(AlgoBlitzLL)) 
// AlgoBlitzLL = solution(AlgoBlitzLL, 6); // 1 2 3 4 5 
// console.log(arrayify(AlgoBlitzLL)) 