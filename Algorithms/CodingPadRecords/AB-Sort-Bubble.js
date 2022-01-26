// ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// ✏️ Description
// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given an unsorted array, perform bubble sort in ascending order.

// Examples:
// • Given an aray: [1] // returns [1]
// • Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]

const testCase1 = [1];
const testCase2 = [3, 1, 2, 4];

const bubbleSort = (arr) => {
  const length = arr.length - 1;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]    // swap logic destructuring ES6           
      }
    }
  };

  return arr;
};

console.log(bubbleSort(testCase1));
console.log(bubbleSort(testCase2));

// Time: 22m 10sec
// Included before work link, readings