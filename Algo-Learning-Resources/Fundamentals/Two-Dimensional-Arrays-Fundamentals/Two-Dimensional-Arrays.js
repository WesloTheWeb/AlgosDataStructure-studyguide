/*###################
NOTES
- Sometimes sub arrays have different length.
- Matrices are always a giant array with sub-arrays.

There aren't that many patterns. 
1. Basically you should be able to iterate through a 2d array in a row-major way or a column-major way. 

2. More advanced would be moving through the matrix along other orderings (spiral, diagonals, etc).

But at the end of the day, it's all about:
- Keeping track of two indices (row and column) in an organized matter.
- Deciding how to move from one location to the next.
- Dealing with the edges.
- Deciding what work needs to be done at each visited location.
#####################*/

/*##########################
 Two ways to make a matrix
#############################*/
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
for (i = 0; i < n; i++) {
    let inner = [];
    for (j = 0; j < n; j++) {
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

/*#####################
TRAVERSING A MATRIX
######################*/

// Row by row and column by column
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
    };
};

// Column by column then row by row
for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
    };
};