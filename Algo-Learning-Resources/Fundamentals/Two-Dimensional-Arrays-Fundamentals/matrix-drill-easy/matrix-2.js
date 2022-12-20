/*##############################################################
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in vertical zigzag order (see examples below) starting from the top left element

Examples:
Input1:
[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]

Output1:
[1, 4, 7, 8, 5, 2, 3, 6, 9]

Input2:
[
[1, 2, 3],
[4, 5, 6]
]

Output2: [1, 4, 5, 2, 3, 6]
##############################################################*/

function solution(m) {
    const newArr = [];

    for (let r = 0; r < m.length; r++) {
        const row = m[r];
        for (let c = 0; c < row; c--)
    }

    return newArr;

};

// test cases
const testCase1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// [1, 4, 7, 8, 5, 2, 3, 6, 9]

const testCase2 = [
    [1, 2, 3],
    [4, 5, 6]
]
// [1, 4, 5, 2, 3, 6]