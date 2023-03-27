/*
QUESTION:
In an array of length 2N with N + 1 unique elements, return the repeated element. 
There is always exactly 1 repeated element.

Source: https://leetcode.com/problems/n-repeated-element-in-size-2n-array

Follow-ups:
1) Come up with a solution that uses 0 extra storage (not even a local variable).
2) Come up with some optimizations that will prevent looping through the entire array.
 
EXAMPLE #1
Input: nums = [1,2,3,3]
Output: 3

EXAMPLE #2
Input: nums = [2,1,2,5,3,2]
Output: 2

EXAMPLE #3
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5

APPROACH:
First, we'll determine the minimum number of repitions to identify a repeated element
    minimum = 4 - (2) = 2
    [1,2,3,3]

    minimum = 6 - (3) = 3
    [1, 2, 2, 2, 3, 5]

sort the array
instantiate counter varaible, set to 0

iterate over the array
    - begin tracking element occurrences
    - if current element is same as previous element, update counter
    - else, reset counter to 1

    - if counter >= minimum number of repetitions, return element

Hints
You don't need to loop through the entire array given that there are only N-1 indexes that a repeated element can exist. 
Given this constraint, what is the furthest away a repeated element can be from itself? (The answer is 4.)

FUNCTION SIGNATURE
func repeatedElement(input: [Int]) -> Int
*/

// Interviewer attempt
function repeatedElement(input) {
    input.sort();

    const n = input.length / 2;
    const minimumRepitions = input.length - (n);

    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            counter++;
            continue;
        };

        if (input[i] === input[i - 1]) {
            counter++;
        } else {
            counter = 1;
        };

        if (counter >= minimumRepitions) return input[i];
    };
};

console.log(repeatedElement([1, 2, 3, 3])) // 3
console.log(repeatedElement([2, 1, 2, 5, 3, 2])) // 2
console.log(repeatedElement([5, 1, 5, 2, 5, 3, 5, 4])) // 5

// Optimized Solution Attempt:
function repeatedElement(input) {

    for (let k = 1; k <= 3; k++) {
        for (let i = 0; i < input.length - k; i++) {
            if (input[i + k] === input[i]) {
                return input[i];
            };
        };
    };
};