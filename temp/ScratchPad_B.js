// From an othelia board session look at later
// TODO: Check it out from 8/2/2023

/*
'''
Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each piece has two sides, black and white, and after being placed, further moves cause other pieces to flip tiles. Specifically, a line of pieces of one color gets flipped when they become surrounded by pieces of the opposite color on both ends.

In this problem, we will be given a 2-dimensional array representing the board. Each position will contain a value of “B”, “W”, or “*” representing empty. Additionally, we get a position that is currently empty. Update the board to the new state after that play, including any flips if it is black’s turn to play. You can modify the existing array, but either way, return the board (2d array) with the new state.

Follow-up:
1. Update this code to take a parameter of a “B” or “W,” indicating which player is making a move.
 

EXAMPLE(S)
For example, consider the row:

1 2 3 4 5 6 7 8
* B W W W W * *

If black places a piece at position 7, the white pieces in between get flipped, so the result is:

1 2 3 4 5 6 7 8
* B B B B B B *

This can happen on a row, column, or diagonal and even at the same time. In the following example, if white place on position (5, 5), then all of the black pieces flip to white!

  1 2 3 4 5 6 7 8
1 * * * * * * * *
2 * W * * * * * *
3 * * B * * * * *
4 * * * B * * * *
5 W B B B ! * * *
6 * * * * B * * *
7 * * * * B * * *
8 * * * * W * * *
 

FUNCTION SIGNATURE
function reversi(board, x, y)
def reversi(board, x, y):

The follow up adds another parameter, c.
'''

Thoroughly understand the problem
* given board is a square
* valid board state where no updates are needed
* the [x][y] would be empty
* the function is specifically to handle a single turn
- no subsequential cascade round of flips

Identify possible solution(s)
* Look at all 8 neighbors of [x][y]
  -> If neighbor is * or it is the player's color, then do nothing
  -> If neighbor is the opposing player's color -- keep checking in the same direction

  checkDirection: (start cell, [dx, dy]) //-1,-,1
    if cell is * or we reach the end:
      return false
    if cell is the same as the starting color (black):
      return true

    if checkDirection(new cell, [dx, dy]) == true:
      flip current cell ->// updatecell()
  
Choose a solution
Build it
Test it


  1 2 3 4 5 6 7 8
1 * * * * * * * *
2 * W * * * * * *
3 * * B * * * * *
4 * * * B * * * *
5 W B B B ! * * *
6 * * * * B * * *
7 * * * * B * * *
8 * * * * W * * *


*/
let position = 'B'

function reversi(board, x, y) {
  // Check surrounding positions of x,Y
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]]
  
  for (let [dx, dy] of directions) {
    let newX = x + dx
    let newY = y + dy
    if (checkDirection(board[newX][newY], dx, dy)) {

    }
  }



  function checkDirection(cell, dx, dy) {
    // If we hit the end the of the board
    // If we hit an empty spot
    // If the piece's color in this direction is different from current player's color
    if(cell !== position && cell !== "*"){
      checkDirection()
    }
    // If the piece's color in this direction is the same as the current player's color
  }
  function updateCell(cell, dx, dy) {

  }
}






// x = 2
// y = 2
// directions = [1, 0]
// newX = 3
// newY = 2

function reversiHassan(board, row, col) {
  if(isOutOfBounds(row, col)){
    return
  }

  const PLAYED_PIECE = 'W'
  board[row][col] = PLAYED_PIECE
  // Check surrounding positions of x,Y
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]]
  
  for (let [dr, dc] of directions) {
    updateCellsInDirection([row+dr, col+dc], dr, dc)
  }

  function isOutOfBounds(r, c){
    return r < 0 || r >= board.length || c < 0 || c >= board[0].length
  }

  function updateCellsInDirection([newR, newC], dr, dc) {
    // If we hit the end the of the board or hit an empty spot
    if(isOutOfBounds(newR, newC) || board[newR][newC] === "*"){
      return false
    }
    
    // If the piece's color in this direction is the same as the current player's color
    if(board[newR][newC] === PLAYED_PIECE){
      return true
    }

    // If the piece's color in this direction is different from current player's color
    if(updateCellsInDirection([newR+dr, newC+dc], dr, dc)){
      board[newR][newC] = PLAYED_PIECE
      return true
    }

    return false
  }

}



function boardToStr(board){
  let result = ''
  for(const row of board){
    result += row.join(',') + '\n'
  }

  return result
}


const testBoard = [
 ['*', '*', '*', '*', 'W', '*', '*', '*',],
 ['*', 'W', '*', '*', 'B', '*', '*', 'W',],
 ['*', '*', 'B', '*', 'B', '*', 'B', '*',],
 ['*', '*', '*', 'B', 'B', 'B', '*', '*',],
 ['W', 'B', 'B', 'B', '*', 'B', 'B', 'W',],
 ['*', '*', '*', 'B', 'B', 'B', '*', '*',],
 ['*', '*', 'B', '*', 'B', '*', 'B', '*',],
 ['*', 'W', '*', '*', 'W', '*', '*', 'W',]
]


reversiHassan(testBoard, 4, 4)
console.log(boardToStr(testBoard))