/*######################################################################################################
Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a 
target using binary search and return its index. If the array does not contain the target, return -1.
######################################################################################################*/

const testArray = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const testArray2 = [1, 2, 3, 6, 8, 13, 113, 153, 200];
const testTarget = 33;

function binarySearch(array, target) {
  let targetIndex = -1;
  let left = 0;
  let right = array.length - 1;

  while (targetIndex === -1 && left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    };
  };

  return targetIndex;
}

// LAST HONEST ATTEMPT: FIND OUT WHATS WRONG WITH CODE BELOW:
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;
//     let targetIndex = -1;
//     let mid;

//     if (array == null || array == []) return -1;

//     while (left < right) {
//         mid = Math.floor((left + right) / 2);

//         if (array[mid] === target) {
//             targetIndex = mid;
//         } else if (array[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         };

//     };
//     return targetIndex;
// };

// Should return index
console.log(binarySearch(testArray, 33)); // returns 3
console.log(binarySearch(testArray, 100)); // returns -1
console.log(binarySearch(testArray2, 1)); // returns 0
console.log(binarySearch(testArray2, 200)); // returns 8
console.log(binarySearch(testArray2, 154)); // returns -1
