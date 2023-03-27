/*################################################
PROBLEM 3
Status: Bad
Q. Given an unsorted linked list, find the element with the highest value recursively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 3
Given a linked list: 6 -> 1 -> 5 -> -13 // returns 6

##################################################*/

 
/* APPROACH
 - Iterate through the Linked List
- Create a variable that holds highest value
-- If a node has a higher value than variable, variable is set to new value.
- Return the highest value after iterating through the list.

*/

function ListNode(x) {
  this.value = x;
  this.next = null;
}

// Base: 
function solution(list) {
    let highestVal = 0;
    let curr = list;
    
    while (curr) {
        if (curr.value > highestVal) {
            highestVal = Math.max(curr.value, highestVal);
        };
        curr = curr.next;
    };
    
    return highestVal;
};


// ATTEMPT:
function solution(list) {
    // base case
    if (!list) return null;
    
    //recursive
    let highestVal = 0;
    highestVal = Math.max(list.value, highestVal);
    
    return solution(list)  
}

/* ISSUE:
- I struggle to write recursive Linked List 
- Maximum call stack exceeded

*/

// Test Cases
/*
########
Test 1
########
list: [1] // null

########
Test 
########
list: [6, 1, 5, -13] // 6


*/