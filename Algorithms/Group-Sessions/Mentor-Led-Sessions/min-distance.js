/*########################
TYPE: Array
Question:
Given an array of numbers, return the minimum distance between any two numbers.

Examples
[3, 1, 5, 6] => 1 (5 and 6 are difference of 1)

[7, 1, 6 ,2 ]
7 - 1 = 6
7 - 6 = 1
7 - 2 = 5
1 - 7 = 6
1 - 6 = 5
1 - 2 = 1
6 - 7 = -1

Approach:
[3, 1, 5, 6]
Sort array
1,3,5,6
1,3,4,6
1,2,3,6

largest = first - last 1-6 = 5
evaluate adjacent pairs
steps:

Time Complexity:
Space Complexity:

Pseudo Code:
sort the array 
min_difference = float("-inf")
j = 0
n = len(array)
i = 1
while i < len(array) and j < len(array):
curr_diff = array[j] - array[i]
if curr_diff < min_difference:
min_diff = curr_diff
i = i + 1
j = j + 1

difference = abs(array[i] - array[i+1])

########################*/

function minDistance(arr) {
    arr.sort((a, b) => a - b);
    let min_difference = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        let curr_diff = Math.abs(arr[i] - arr[i + 1]);

        if (curr_diff < min_difference) {
            min_difference = curr_diff;
        };
    };

    return min_difference;
};

// Test Cases:
console.log(minDistance([3, 1, 5, 6]), 1);
console.log(minDistance([7, 1, 4, -2]), 1);
console.log(minDistance([0, 0, 0]), 0);

/*  TAKE AWAYS:
- refactoring debugging
- turning out while loop to a for loop.
*/