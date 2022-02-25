/*################
PAIR LEARNING: Bubble Sort
###################
Question: 
- Given an unsorted array, perform bubble sort in ascending order.

Examples:
• Given an aray: [1] // returns [1]
• Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            };
        };
    };
    return array;
};

// Test Cases
console.log(bubbleSort([])) // []
console.log(bubbleSort([1])) // [1]
console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

/*###############
Shawn's method
- The inner for loop addsa  1, thus removing any need to do subtraction on the array.
#################*/

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            };
        };
    };
    return array;
};