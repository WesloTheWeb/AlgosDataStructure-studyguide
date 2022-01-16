// Given the following array of, targetArray, sort the array using insertion sort.

const targetArray = [2,5,8,3,9,4];

function insertionSort(targetArray) {

  const newArr = [];

  // Loop through the array compare current value to the left.
  for ( i=0; i < targetArray.length; i++) {
    if (targetArray[i] < targetArray[i - 1]) {

      //Missing swapping logic!
      
      newArr.push(targetArray[i])
    }
  }

  return newArr;
  // console.log(newArr);
};

insertionSort(targetArray);