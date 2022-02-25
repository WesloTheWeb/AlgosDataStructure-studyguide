/*##################################################################################
TAG: Number of Duplicated Elements in an Array - 1m
#####################################################################################

Q. Given an unsorted array, return the number of duplicated elements that appear more than once in the array.

Examples:
• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (duplicated elements: 3 and 1)
• Given an array: [1] // returns 0
*/

function numDuplicates(array) {

  const counts = new Map();

  array.forEach((num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
  });

  return Array.from(counts.values())
    .filter(count => count > 1)
    .length;
};

// Test Cases
console.log(numDuplicates([])) // 0
console.log(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numDuplicates([1])) // 0