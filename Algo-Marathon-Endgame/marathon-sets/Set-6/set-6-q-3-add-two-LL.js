/*
Q. Given two linked lists of equal length, sum elements' value at the same position.

Example:
Given two linked lists: LL1 = 1 -> 2, LL2: 3 -> 4
// returns 4 -> 6
[execution time limit] 4 seconds (js)

[input] linkedlist.integer list1

head of the fist list

[input] linkedlist.integer list2

head of the second list

[output] linkedlist.integer

head of the summed list
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

// Initial attempt
function solution(list1, list2) {
    let point1 = 0;
    let point2 = 0;
    
    let curr = list1;
    const node = new ListNode(x); // creates new node
    
    while (curr && curr.next) {
        
        // add two lists
        
        // create new chain
        
    };
};

// Test Cases
// Test Case 1, expected []
const test1_LL1 = [];
const test1_LL2 = []; 

// Test Case 2, expected [0]
const test2_LL1 = [0];
const test2_LL2 = [0]; 

// Test Case 3, expected [0]
const test3_LL1 = [1];
const test3_LL2 = [-1]; 

// Test Case 4, expected [0, 1]
const test4_LL1 = [1, 2];
const test4_LL2 = [-1, -1]; 

// Test Case 5, expected [2, 4, 6]
const test5_LL1 = [1, 2, 3];
const test5_LL2 = [1, 2, 3]; 

// Test Case 6, expected [0, 6, -5]
const test6_LL1 = [1, 3, 5];
const test6_LL2= [-1, 3, -10];