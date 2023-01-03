/* Algo Marathon
Date: Jan 2nd, 2023
PARTNERS: Hassan E.

QUESTION:
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that 
is greater or equal in value to all elements to its right.
 
Examples
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]

[1,2,5,3,1,6,3,4,2]

[1, 2, 5, 3, 1, 2]
          ^
max = 3
result = [2, 3]

APPROACH:
- Iterate from at the end, move Left, if curr value > largest seen, bigger everything in right so has to be left peak.
- Create two variables, max is what seen, result is sub-array.

Time: O(N) to iterate through the length N array
Space: O(N) to store up to N elements
#########################################*/

// Our attempt:
function find_left_peaks(arr) {
    let max = -Infinity;
    let results = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] >= max) {
            max = arr[i];
            results.push(arr[i])
        }
    }

    return results;
};

// Test Cases:
const test1 = [1, 2, 5, 3, 1, 2]; // 5, 3, 2,
const test2 = [3, 2, 1] // 3, 2, 1
const test3 = [3, 3, 2, 1] // 3 3 2 1
const test4 = [];
const test5 = [1, 2, 3, 5, 5, 5, 4, 5, 3, 2, 1]
const test6 = [4, 7, 8]

console.log(find_left_peaks(test1));
console.log(find_left_peaks(test2));
console.log(find_left_peaks(test3));
console.log(find_left_peaks(test4));
console.log(find_left_peaks(test5));
console.log(find_left_peaks(test6));

// Solution: 
function find_left_peaks(arr) {
    let result = [];

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            while (result.length > -1 && arr[i] > result.at(-1)) {
                result.pop();
            }
            result.push(arr[i]);
        };
    };
    
    return result;
};

/*
- Use a stack to keep track of the peaks. 
- Iterate through the input array and for each element pop off all elements in the stack which are smaller than the current element (since the current element is to the right of the elements in the stack, and so those elements cannot be peaks). 
- Append the current element to the stack. 
- At the end of the iteration, the stack should contain only the Left Peaks 
- Return the stack.
*/

// Solution Test Cases:
console.table([
    JSON.stringify(find_left_peaks([]))
    === "[]",
    JSON.stringify(find_left_peaks([1, 2, 5, 3, 1, 2]))
    === "[5,3,2]",
    JSON.stringify(find_left_peaks([3, 2, 1]))
    === "[3,2,1]",
    JSON.stringify(find_left_peaks([1, 2, 3]))
    === "[3]",
    JSON.stringify(find_left_peaks([10, 4, 6, 3, 5]))
    === "[10,6,5]",
    JSON.stringify(find_left_peaks([1, 2, 3, 5, 5, 5, 4, 5, 3, 2, 1]))
    === "[5,5,5,5,3,2,1]",
    JSON.stringify(find_left_peaks([1, 2, 3, 5, 5, 5, 4, 6, 5, 3, 2, 1]))
    === "[6,5,3,2,1]",
    JSON.stringify(find_left_peaks([5, 5, 5, 5, 5]))
    === "[5,5,5,5,5]"
]);

