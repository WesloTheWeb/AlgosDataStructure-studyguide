/*###################
NOTES
- Sometimes sub arrays have different length.
#####################
*/
// Practice with 2d arrays
let array = [
    ['a', 'b'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h']
];

const length = array.length;

let subarray = array[1];

// for loop
for (let i = 0; i < length; i++) {
    // console.log(array[i]); // prints out row
    let subarray = array[i]

    for (let j = 0; j < array[i].length; j++) { // key pattern
        console.log(subarray[j]); // prints out indiv. el's of row
    };
};

// console.log(subarray[2]);

// constructing a pattern
let str = '';
for (let i = 0; i < length; i++) {
    for (let j = 0; j < subarray.length; j++) {
        str += subarray[j];
    };
};

console.log(str);