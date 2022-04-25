// Use as scratchpad

const arr1 = [8, 4, 6, 1];
const arr2 = [9, 5, 2, 3];

let arrSort = [...arr1, ...arr2];

const mySort = (array) => {
  let counter = 0;
  array.sort((a, b) => {
    console.log('comparing: ', counter += 1)
    return (a - b)
  });
};

function merge(left, right, count) {
  let arr = [];
  // console.log('\n\nmerging lefts with rights: ');

  while (left.length && right.length) {
    // console.log('\nleft :',left, ' right: ',right)
    console.log('comaprison happening :', count += 1)
    if (left[0] < right[0]) {
      // console.log('\n\nbecause ',left[0], ' is smaller than ',right[0], ' we are pushing left to arr below.');
      arr.push(left.shift());
      // console.log('pushed from left :',arr);
    } else {
      // console.log('\n\nbecause ',right[0], ' is smaller than ',left[0], ' we are pushing right to arr below.');
      arr.push(right.shift());
      // console.log('pushed from right :',arr);
    }
  }
  const leftCopy = left.slice();
  const rightCopy = right.slice();

  // console.log('leftCopy :',leftCopy, '\nrightCopy :',rightCopy,'\n\n\n\n');

  return arr
    .concat(leftCopy)
    .concat(rightCopy);
}

// O(NlogN) time
function mergeSort(array, count) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right), count);
}



console.log(mySort(arrSort));

console.log(mergeSort(arrSort, 0))