/*
############################
SESSION 3 | Feb 5th
############################

BASE QUETION:
You are given a string made of xs, underscores and newlines. Underscores represent an empty space and an x represents 
a filled in square. Imagine that this string represents a histogram. Return an array representing the heights 
of each bar in the histogram. 

___x_
_x_x_
_xxx_
xxxx_

returns [1, 3, 2, 4, 0]

_  _ _
_  x _
_  x x
x  x x
1  3 2
*/

// ORIGINAL PROBLEM - Use of Brute Force:

function convert(string) {
  let strings = string.split('\n');
  let array = new Array(strings[0].length).fill(0);
  const rows = strings.length;
  const cols = strings[0].length;

  for (let col = 0; col < cols; col++) {

    for (let row = 0; row < rows; row++) {
      console.log({ col, row, c: strings[row][col] });
      if (strings[row][col] === "x") {
        array[col] = strings.length - row;
        break;
      }
    }
  }

  return array;
}

console.log(convert(
  `
  ___x_
  _x_x_
  _xxx_
  xxxx_
  `.trim()), '[1,3,2,4,0]')

/*########################################################
ALTERNATE PROBLEM - Using Binary Search:
##########################################################*/
function convert(string) {
  let strings = string.split('\n');
  let array = new Array(strings[0].length).fill(0);
  const rows = strings.length;
  const cols = strings[0].length;

  for (let col = 0; col < cols; col++) {

    // for (let row = 0; row < rows; row++) {
    // console.log({col, row, c: strings[row][col]});
    let row = binarySearchX(strings, col);

    // if (strings[row][col] === "x") {
    array[col] = strings.length - row;
    //   break;
    // }
    // }
  }

  return array;
}

function binarySearchX(strings, col) {
  const rows = strings.length;
  let lo = 0, hi = rows - 1;
  let smallestIndexXSeen = rows;
  while (lo <= hi) {
    let mid = lo + Math.trunc((hi - lo) / 2);
    if (strings[mid][col] === "x") {
      smallestIndexXSeen = mid;
      hi = mid - 1;
    } else
      lo = mid + 1;
  }
  return smallestIndexXSeen;
}

console.log(convert(
  `
  ___x_
  _x_x_
  _xxx_
  xxxx_
  `.trim()), '[1,3,2,4,0]')

/*########################################################
ALTERNATE PROBLEM - If we were to flip the histogram,
- take away is having our base be a negative number instead of usually -1,
we can do -Infinity.
##########################################################*/

function convert(string) {
  let strings = string.split('\n');
  let array = new Array(strings[0].length).fill(0);
  const rows = strings.length;
  const cols = strings[0].length;

  for (let col = 0; col < cols; col++) {

    // for (let row = 0; row < rows; row++) {
    // console.log({col, row, c: strings[row][col]});
    let row = binarySearchX(strings, col);

    // if (strings[row][col] === "x") {
    array[col] = row;
    //   break;
    // }
    // }
  }

  return array;
}

// R rows, C cols
// 

function binarySearchX(strings, col) {
  const rows = strings.length;
  let lo = 0, hi = rows - 1;
  let smallestIndexXSeen = -1;
  while (lo <= hi) {
    let mid = lo + Math.trunc((hi - lo) / 2);
    if (strings[mid][col] === "x") {
      smallestIndexXSeen = mid;
      lo = mid + 1;
    } else
      hi = mid - 1;
  }
  return smallestIndexXSeen + 1;
}

function max(arr) {
  let result = -Infinity;

  arr.forEach(val => {
    if (val < result) result = val;
  });

  return result;
}

function sum(arr) {
  let result = 0;

  arr.forEach(val => {
    result += val;
  });

  return result;
}

// console.log(convert(
// `
// xxxx_
// _xxx_
// _x_x_
// ___x_
// `.trim()), '[1,3,2,4,0]')

console.log(convert(
  `
  _xxxxx
  __xxxx
  ___xxx
  ____xx
  _____x
  `.trim()), '[0,1,2,3,4,5]')