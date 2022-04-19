/*##################################################################################
TAG: Selection Sort - 3m
#####################################################################################

Q. Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an aray: [1] // returns [1]
• Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

const testCase1 = [1];
const testCase2 = [3, 1, 2, 4];

const selectionSort = (arr) => {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap logic without destructuring:
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};

console.log(selectionSort(testCase1)); // 1
console.log(selectionSort(testCase2)); // [1, 2, 3, 4]

// Time: 17m 55sec
// Included before work link, readings