/*################################################
PROBLEM 5
Status: Good
Q. Given a shifted sorted array of distinct integers and a target integer, determine 
if the array contains a target value by returning its index. Otherwise, return -1.

Elements in the array are shifted by some amount (left or right).
##################################################*/

 
/* APPROACH
- Iterate through array to find the target
- If found target return its index
- If not in return -1


*/

// Base: 
function solution(array, target) {

}

// ATTEMPT:
function solution(array, target) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }; 
    };    
    
    return -1;
};
