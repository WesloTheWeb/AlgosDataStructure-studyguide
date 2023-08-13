/*
August 9th, 2023

** This probably won't be a Facebook question but there are important concept and technique here.

Question: You're given a empty crossword board, and a dictionary of words. 
Fill up the crossword so that each row and each column is a word in the dictionary. 

Eg. ["owe", "cot", "cat", "ten", "awe", "car"]

Possible output 
[['c', 'o', 't'],
 ['a', 'w', 'e'],
 ['t', 'e', 'n']]   
3x3 matrix, using 5 words

Assumptions / FIndings
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

// * SOLUTION

function solution(board, words) {
  // Helper function to check if the board is valid after inserting a word
  function isValid(board, word, row) {
    for (let i = 0; i < word.length; i++) {
      if (board[row][i] !== '.' && board[row][i] !== word[i]) {
        return false;
      }
    }
    return true;
  }

  // Helper function to convert columns to words and check if they're in the dictionary
  function colToWord(board, col) {
    let word = '';
    for (let i = 0; i < board.length; i++) {
      word += board[i][col];
    }
    return word;
  }

  function backtrack(row) {
    if (row === board.length) {
      for (let col = 0; col < board.length; col++) {
        let colWord = colToWord(board, col);
        if (!words.includes(colWord)) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < words.length; i++) {
      if (isValid(board, words[i], row)) {
        let oldRow = board[row].slice(); // Save the current state
        for (let j = 0; j < words[i].length; j++) {
          board[row][j] = words[i][j];
        }

        if (backtrack(row + 1)) {  // Recursively try to fill next row
          return true;
        }

        board[row] = oldRow;  // Backtrack
      }
    }
    return false;
  }

  // Initialize board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = '.';
    }
  }

  // Start backtracking
  if (backtrack(0)) {
    return board;
  }
  return null;
}

const words = ["owe", "cot", "cat", "ten", "awe", "car"];
let board = new Array(3).fill(0).map(() => new Array(3).fill('.'));
const filledBoard = solution(board, words);
console.log(filledBoard);
