// ! TODO: Very important take away on matrix drills & LCA:
/*
Q. Given two matrices, multiply them using the dot product (under "Multiplying a Matrix by Another Matrix") of rows and columns.

Example

For

matrix1 = [[1, 1, 1],

           [0, 0, 0]]

and

matrix2 = [[2, 1],

           [1, 2],

           [2, 1]]

the output should be

matrixMultiplication(matrix1, matrix2) = [[5, 4],

                                          [0, 0]]

Multiply a matrix: https://www.mathsisfun.com/algebra/matrix-multiplying.html


NxM
matrix1 = [[1, 2, 3],
           [4, 5, 6]]

and

MxO
matrix2 = [[7, 8],
           [9, 10],
           [11, 12]]

Output must be: NxO

m[0, 0] = 1*7 + 2*9 + 3*11
        00,00   01,10  02,20
m[1, 1] = 4*8 + 5*10 + 6*12
        10,01   11,11  12,21

*/

function canMultiply(m1, m2) {

}

function matrixMultiplyTerm(m1, m2, r, c) {
    let term = 0;
    for (let i = 0; i < m2.length; i++) {
        term += m1[r][i] * m2[i][c];
    }
    return term;
}

function matrixMultiply(m1, m2) {
    const output = [];

    for (let r = 0; r < m1.length; r++) {
        // fill in the first row!
        const row = [];
        for (let c = 0; c < m2[0].length; c++) {
            row.push(matrixMultiplyTerm(m1, m2, r, c));
        }
        output.push(row);
    }
    return output;
}

const m1 = [[1, 2, 3],
[4, 5, 6]]

const m2 = [[7, 8],
[9, 10],
[11, 12]]

console.log(matrixMultiply(m1, m2));

/*

   v2
  /
v1

   v1
  /
v2

   v3
  / \
v1   v2

class Node {
  parent
  value
}

*/


/*
1 binary digit Gray numbers: 0, 1

0,  1,   3, 2
00, 01, 11, 10
                     6    7    5    4
000, 001, 011, 010, 110, 111, 101, 100

0, 1, 3, 2, 6, 7, 5, 4

n = 3, start = 2
2, 6, 7, 5, 4, 0, 1, 3

For any value of N, the Grey number from 0 to (2^N)-1 
0, 100000000



*/