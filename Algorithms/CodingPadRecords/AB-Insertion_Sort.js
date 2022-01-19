// Q. Given an unsorted array, perform insertion sort in ascending order.

// Examples:
// • Given an aray: [1] // returns [1]
// • Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]

const testCase1 = [1];
const testCase2 = [3, 1, 2, 4];

const insertionSort = (arr) => {
  const length = arr.length;
  
  for (let i = 0; i < length; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (arr[j] < arr[j -1]) {
        [arr[j], arr[j - 1]] = [arr[j-1], arr[j]]                     
      }
    }
  };
  
  return arr;
};

console.log(insertionSort(testCase1));
console.log(insertionSort(testCase2));

// Time: 17m 53sec 
// Included before work link, readings