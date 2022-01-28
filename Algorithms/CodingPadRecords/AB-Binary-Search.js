// ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// ✏️ Description
// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.

// Note:
// • Indexes (indices) follow the zero-based numbering rule (i.e. the index of the first element of an array is 0, not 1). 

// Examples:
// • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0
// • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8
// • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1

let nums = [1, 2, 3, 6, 8, 13, 113, 153, 200]

/*##########
ITERATIVE | O(logN) time
############*/
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

/*##########
RECURSIVE
###########*/
// const binarySearchRecursive = (array, target) => {
//   return binarySearchHelper(array, target, 0, array.length - 1)
// }

// const binarySearchHelper = (array, target, left, right) => {
//   if (left > right) {
//     return false;
//   }

//   let mid = Math.floor((left + right) / 2);
//   if (target === array[mid]) {
//     return mid;
//   }
//   else if (target < array[mid]) {
//     return binarySearchHelper(array, target, left, mid - 1);
//   }
//   else {
//     return binarySearchHelper(array, target, mid + 1, right);
//   }
// }


// Iterative Solutions
console.log(binarySearch(nums, 3)); //2
console.log(binarySearch(nums, 154));
console.log(binarySearch(nums, 13));


