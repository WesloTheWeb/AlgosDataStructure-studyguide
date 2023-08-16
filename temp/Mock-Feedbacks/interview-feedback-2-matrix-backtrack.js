/*
Aug. 10th, 2023
Interviewer: Arnold
** This probably won't be a Facebook question but there are important concept and technique here.

Question: You're given a empty crossword board, and a dictionary of words. 
Fill up the crossword so that each row and each column is a word in the dictionary. 

Eg. ["owe", "cot", "cat", "ten", "awe", "car"]

Possible output 
[['c', 'o', 't'],
 ['a', 'w', 'e'],
 ['t', 'e', 'n']]   
3x3 matrix, using 5 words

Assumptions / Findings
- start empty board, words have same length size of the board
- construct a board, from input array.
- no diagonals. Just horizontal and vertical
- words are valid words given to me.
- do not need to use all the words, just long as every word in column and row is valid.

Example: ["cat", "ten",]

"aaa"
[ [a.a.a]]
[[a],
 [a],
 [a]
] (not valid) but if 3x3 by a, then valid.

Approaches:
- use a hashmap to the keys of common letters
- once hashmap is filled, iterate through the keys (chars) and place them in the matrix, how to divy up the words into strings for m  x n
 - 

(Brute Force)
- iterating over the string each character
- placing them into 2D array, all possibilities placement of board
O(N^3)

1. iterate over our input array, iterate over each character 
2. push into our board array (2D array)
3. create valid placement function
3a. 

Backtracking
sub-problem validPlacement
*/
// TODO: Redo this problem. This is backtracking + matrix.

// ! My Initial Attempt
const validPlacement = (arr, dict) => {
    // check left to right (row)
    /* for (let i = 0; i < arr[0].length; i++) {
       if (arr[0][i] == dict.includes('c')) {
         console.log(arr[0][i])
       }
     }*/
    // switching to col and row
    for (let col = 0; col < arr.length; col++) {
      let word = '';
      for (let row = 0; row < arr[0].length; row++) {
        word += arr[row][col]
      }
      if (!dict.includes(word)) {
        return false;
      }
    }
  
    // check up and down (column)
  }
  
  console.log(validPlacement([['c', 'o', 't'],
  ['a', 'w', 'e'],
  ['t', 'e', 'n']], ["owe", "cot", "cat", "ten", "awe", "car"]
  ));


// ! End My Initial Attempt

// SOLUTION:
function solution(board, words) {
    // Helper function to check if the board is valid after inserting a word
    function solutionIsValid(board, word, row) {
        for(let i = 0; i < word.length; i++) {
            if (board[row][i] !== '.' && board[row][i] !== word[i]) {
                return false;
            }
        }
        return true;
    }
    
    // Helper function to convert columns to words and check if they're in the dictionary
    function solutionColToWord(board, col) {
        let word = '';
        for(let i = 0; i < board.length; i++) {
            word += board[i][col];
        }
        return word;
    }
    
    function solutionBacktrack(row) {
        if(row === board.length) {
            for(let col = 0; col < board.length; col++) {
                let colWord = solutionColToWord(board, col);
                if(!words.includes(colWord)) {
                    return false;
                }
            }
            return true;
        }

        for(let i = 0; i < words.length; i++) {
            if(solutionIsValid(board, words[i], row)) {
                let oldRow = board[row].slice(); // Save the current state
                for(let j = 0; j < words[i].length; j++) {
                    board[row][j] = words[i][j];
                }

                if(solutionBacktrack(row + 1)) {  // Recursively try to fill next row
                    return true;
                }

                board[row] = oldRow;  // Backtrack
            }
        }
        return false;
    }

    // Initialize board
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            board[i][j] = '.';
        }
    }

    // Start backtracking
    if(solutionBacktrack(0)) {
        return board;
    }
    return null;
}

// Test Cases
const solutionTestWords = ["owe", "cot", "cat", "ten", "awe", "car"];
let board = new Array(3).fill(0).map(() => new Array(3).fill('.'));
const solutionFilledBoard = solution(board, words);
console.log(solutionFilledBoard);

/* SOLUTION WRITE UP
**Summary**:
1. Created a helper function `isValid` to check if a word can be placed at the given row.
2. Created another helper function `colToWord` to convert a column into a word.
3. Used a backtracking method (`backtrack`) to try and fit words in the board.
4. If the placement of a word leads to no solution, we backtrack and try another word.
5. Once we've tried placing words in all rows, we check if all columns also form valid words.

**Steps**:
1. Initialize the board with '.' (indicating empty slots).
2. Starting from the first row, attempt to place each word in the row.
3. After placing the word, check if it leads to a valid board. If so, move to the next row.
4. If the board becomes invalid or we run out of rows to place the word, backtrack and try another word.
5. After placing words in all rows, ensure all columns form valid words.
6. If all rows and columns are valid, the board is successfully filled.

**Time complexity**: 
- In the worst case, we try each word for each row. So if there are `n` words and the board is of size `n x n`, the time complexity will be \(O(n^n)\).

**Space complexity**: 
- The space complexity is mainly for the board and the recursive call stack. Therefore, the space complexity is \(O(n^2 + n)\) = \(O(n^2)\).
*/