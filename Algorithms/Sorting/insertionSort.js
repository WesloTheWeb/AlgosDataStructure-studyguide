// Given the following array of, targetArray, sort the array using insertion sort.

const targetArray = [2, 5, 8, 3, 9, 4];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
      else {
        break;
      }
    };
  };

  return arr;
};

console.log(insertionSort(targetArray));