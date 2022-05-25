// leetcode problem: https://leetcode.com/problems/valid-sudoku/
/* 
Q. Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Example 3:


APPROACH:
- get all the rows, columns, and grids and push them into an array
- loop over this array 
// CHECKS
- set involved since we cannot have any number repeating.
-Cannot be greater than 9.
- would need to repeat since giant board

if all pass return true 
else return false

[
[board 1], [board 2], [board 3],
[board 4], [board 5], [board 6],
[board 7], [board 8], [board 9],
]
- if any of the board is NOT valid return false
*/

function isSudokuValid(matrix) {
    let allElements = [];
    // get rows 
    for (let i = 0; i < matrix.length; i++) {
        allElements.push(matrix[i]);
    }

    // get columns
    for (let i = 0; i < matrix.length; i++) {
        let col = [];
        for (let j = 0; j < matrix.length; j++) {
            let num = matrix[j][i]
            col.push(num);
        }
        allElements.push(col);
    }

    /*
      
       0 1 2   3 4 5
    0  1 2 3 | x x x
    1  4 5 6 | x x x
    2  7 8 9 | x x x
       _____________
    3  x x x | x x x
    4  x x x | x x x
    5  x x x | x x x
    */
    // get grids 
    for (let row = 0; row < 9; row += 3) { // come back to this -- why 9 and not matrix.length
        let grid = []
        for (let col = 0; col < 3; col++) { // column wise iteration
            let section = matrix[row].slice(col, col + 3)

            grid.push(section);
        }
        console.log(grid);
        allElements.push(grid);
    }

    for (let i = 0; i < allElements.length; i++) {
        if (!allDistinctNumbers(allElements[i])) {
            console.log(i)
            console.log(allElements[i])
            return false;
        }
    }
    return true;
}

function allDistinctNumbers(elements) {
    // elements = ['1', '2', '.' ...]
    elements = elements.filter((ele) => ele !== ".");
    let set = new Set(elements)
    return elements.length == set.size
}

function getGrid(matrix, i, j) {
    let grid = []
    for (let k = 0; k < 3; k++) { // column wise iteration
        grid.push(...matrix[k].slice(i, j));
    }
    return grid;
}

// console.log(isSudokuValid([
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// ]));
/*
[5, 3, .,
 6, ., .,
 ., 9, 8]
*/
console.log(isSudokuValid([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // true

console.log(isSudokuValid([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // false