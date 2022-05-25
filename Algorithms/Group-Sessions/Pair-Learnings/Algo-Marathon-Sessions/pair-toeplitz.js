// leetcode problem: https://leetcode.com/problems/toeplitz-matrix/
/* 
Q. Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]

1  2  3  4   

5  1  2  3  

9  5  1  2  


Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Input: matrix = [[1,2],[2,2]]

1  2

2  2

Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

APPROACH


*/

function isToeplitz(matrix) {
    const auxArr = [];
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            // do our checks
            let isEqual = hasEqualValues(matrix, row, col);
            let isItStillEqual = isStillEqual(auxArr, matrix, row);
            if (isEqual && isItStillEqual) {
                auxArr.push(col);
            } else {
                return false;
            }
        };
    };
    return true;
};

const hasEqualValues = (matrix, row, col) => {
    let nextNumberOfCols = matrix[row + 1] ? matrix[row + 1].length : undefined;
    let first = matrix[row][col];
    let next = col + 1 >= nextNumberOfCols ? undefined : matrix[row + 1][col + 1];
    if (first || next) {
        if (first === next) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};

const isStillEqual = (auxArray, matrix, row) => {
    let first = matrix[row][auxArray[auxArray.length - 1]];
    let next = matrix[row + 1][auxArray[auxArray.length - 1] + 1];
    if (first === next) {
        return true;
    } else {
        return false;
    }
}

console.log(isToeplitz([[11, 74, 0, 93], [40, 11, 74, 7]])); // false
console.log(isToeplitz([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); // true
console.log(isToeplitz([[1, 2], [2, 2]])); // false

/*
11  74  0  93
40  11  74  7
*/