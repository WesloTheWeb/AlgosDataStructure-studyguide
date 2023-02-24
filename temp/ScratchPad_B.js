/**
 * 

Othello is a game where each piece has two sides, black and white, and after being placed, further moves can cause other pieces to flip tiles. Specifically, a line of pieces of one color gets flipped when surrounded by pieces of the opposite color on both ends.

In this problem, we will be given a 2-dimensional array representing the board. Each position will contain a value of “B”, “W”, or “*” representing empty. Additionally, we get a position that is currently empty. Update the board to the new state after that play, including any flips if it is black’s turn to play. You can modify the existing array, but either way, return the board (2d array) with the new state.


For example, consider the row:

1 2 3 4 5 6 7 8
* B W W W W * *

If black places a piece at position 7, the white pieces in between get flipped, so the result is:

1 2 3 4 5 6 7 8
* B B B B B B *



1 2 3 4 5 6 7 8
* B W B W W * *
- not possible for alternating B W B 

If black pieced at position 7,

1 2 3 4 5 6 7 8
* B W B B B B *



  1 2 3 4 5 6 7 8 
1 * B W * * * * *
2 * B W * * * * *
3 * B W W W W * *
4 * * * * * * * *

Place at Row 2, Col 6

  1 2 3 4 5 6 7 8
1 * B W * * * * *
2 * B W * * B * *
3 * B W W W W * *
4 * * * * * * * *




from a given cell go left to find first black.
If there a black cell is found on left within the boundary then flip all the white cells to black

do same for all 6 sides as well.

always put on empty cell

 */

// define eight directions by movement (e.g., [0, 1])
// define helper function move:
//    while moving in direction:
//      if square is white, continue
//      if square is empty, break
//      if square is black, change squares in between to black

let testGrid = [
    ['*', 'B', 'W', '*', '*', 'B', '*', '*'],
    ['*', 'B', 'W', 'W', 'W', 'W', '*', '*']  
  ]
  console.log(answer(1,7, testGrid))
  let diagTestGrid = [
    ['*', 'B', 'W', '*'],
    ['*', 'B', '*', '*'],
    ['*', 'B', 'W', 'W'],
    ['W', 'W', '*', '*'], 
  ]
  console.log(answer(1,7, testGrid))
  testGrid = [
    ['*', 'B', 'W', '*', '*', 'B', '*', '*'],
    ['*', 'B', 'W', 'W', 'W', 'W', '*', '*']  
  ]
  console.log(answer(1,7, testGrid))
  testGrid = [
    ['*', 'B', 'W', '*', '*', 'B', '*', '*'],
    ['*', 'B', 'W', 'W', 'W', 'W', '*', '*']  
  ]
  console.log(answer(1,7, testGrid))
  testGrid = [
    ['B', '*', 'B', '*', 'B'],
    ['*', 'W', 'W', 'W', '*'],
    ['B', 'W', '*', 'W', 'B'],
    ['*', 'W', 'W', 'W', '*'],
    ['B', '*', 'B', '*', 'B'],
  ]
  console.log("here is answer below")
  console.log(answer(2,2, testGrid))
  
  function answer(x, y, grid) {
      
    grid[x][y] = 'B'
     
    helper(x, y, grid, 0, -1) // i want to move left
    helper(x,y,grid,0,1) // i want to move right
    helper(x,y,grid,1,0) // i want to move bottom
    helper(x,y,grid,-1,0) // i want to move top
  
  
    helper(x,y,grid,-1,1) // i want to move top left
    helper(x,y,grid,-1,-1) // i want to move bottom left
    helper(x,y,grid,1,-1) // i want to move top right
    helper(x,y,grid,1,1) // i want to move bottom right
     
    return grid;
  }
  
  function withinBounds(x, y, grid) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length
     
  }
  
  function helper(x, y, grid, dir_x, dir_y) {
  
    let x1 = x + dir_x
    let y1 = y + dir_y
  
    while (withinBounds(x1, y1, grid) && grid[x1][y1] == 'W') {
      x1 = x1 + dir_x
      y1 = y1 + dir_y
    }
  
    if (x1 < 0 || y1 < 0 || x1 >= grid.length || y1 >= grid[0].length) return
  
    if (grid[x1][y1] == 'B') {
  
      x1 = x1 - dir_x
      y1 = y1 - dir_y
  
      while (withinBounds(x1, y1, grid) && grid[x1][y1] == 'W') {
          grid[x1][y1]='B'
          x1 = x1 - dir_x
          y1 = y1 - dir_y  
      }
  
      return grid 
    }
  }
  
  // M = 5
  // N = 5
  // [* * * * *]
  // [* * * * *]
  // [* * * * *]
  // [* * * * *]
  // [* * * * *]
  
  // O(2 (MN))
  
  
  const directions = {
    NORTH: {0, 0},
    WEST: 
  }