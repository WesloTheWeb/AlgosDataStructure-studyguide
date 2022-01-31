/*##################################################################################
TAG: Number of Unique Elements in an Array - 1m
##################################################################################### 

Q. Given an unsorted array, return the number of unique elements that appear only once in the array.

Examples:
• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)
• Given an array: [1] // returns 1 (unique element: 1)

Approach # 1:
- Iterate through the array, keeping track of the count of each element by incrementing them as you go through. 
- Iterate through the dictionary, keeping track of the number of elements whose values are 1.
*/

function numUniques(array) {
    const counts = new Map();

    array.forEach(el => {
        counts.set(el, (counts.get(el) || 0) + 1);
    });

    return Array.from(counts.values())
        .filter(count => count === 1)
        .length;
};

// Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numUniques([1])) // 1