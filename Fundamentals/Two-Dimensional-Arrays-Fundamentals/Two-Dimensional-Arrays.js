/*###################
NOTES
- Sometimes sub arrays have different length.
- Matrices are always a giant array with sub-arrays
#####################
*/

// Two ways to make a matrix

//  Option 1:
const rows = 10;
const columns = 8; 

const myArray1 = []; // resultant array

for (let i = 0; i < rows; i++) {
    myArray1[i] = [];
    for (let j = 0; j < columns; j++) {
        myArray1[i][j] = null;
    };
};

console.log(myArray1);

/*#########
Option 2: 
you need to define the NxN rows/columns or NxM
N = rows
M = cols
###########*/
let matrix = [];
let n = 5;
for (i = 0; i < n; i++){
    let inner = [];
    for (j = 0; j < n; j++){
        inner.push(0);
    }
    matrix.push(inner);
}

console.log(matrix);





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