/*######################################################################################
QUESTION:
Given an array, write 2 recursive functions to find the minimum and maximum element in an array. 
You may use the min(a,b) and max(a,b) functions to shorthand picking the minimum and maximum between 2 values.

##########
EXAMPLES
##########
console.log(findMin([12, 1234, 45, 67, 1]) == 1)
console.log(findMin([10, 20, 30]) == 10)
console.log(findMin([8, 6, 7, 5, 3, 7]) == 3)

console.log(findMax([12, 1234, 45, 67, 1]) == 1234)
console.log(findMax([10, 20, 30]) == 30)
console.log(findMax([8, 6, 7, 5, 3, 7]) == 8)

#################
Expected Runtime
##################
Time: O(n) where n is the length of the array
Space: O(n) to store a call stack frame for each array index


######################################################################################*/

function findMin() {

};

/*###############
TEST CASES
-Independently create a comprehensive test suite for this problem. It should cover most general and boundary cases without enumerating every possible input permutation.
-1 element array
-strictly increasing array
-strictly decreasing array
-array with some duplicates
-array with all duplicates
-array with negative values
################*/

console.log(findMin([12, 1234, 45, 67, 1]) == 1);
console.log(findMin([10, 20, 30]) == 10);
console.log(findMin([8, 6, 7, 5, 3, 7]) == 3);

console.log(findMax([12, 1234, 45, 67, 1]) == 1234);
console.log(findMax([10, 20, 30]) == 30);
console.log(findMax([8, 6, 7, 5, 3, 7]) == 8);