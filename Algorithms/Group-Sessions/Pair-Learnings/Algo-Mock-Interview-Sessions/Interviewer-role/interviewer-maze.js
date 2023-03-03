/*
Date: February 11th 

QUESTION:
You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.

Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
 
EXAMPLE(S)
Maze:
0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0

driver function:
  setup the helper function
  - call the helper function again on each direction, NSEW
  - base case - if I hit a walls
  - keep track of moves with len(array)
  - keep track of overlapping routes with 
  return the helper function

getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
x x x 0
1 1 x 0
x x x 1
x 1 1 0
x x x x
 

FUNCTION SIGNATURE
def getMazePath(maze):



APPROACH:

driver sets up helper
    helper calls helper on NSEW moves
    array keeps track of moves

*/

function getMazePath(maze) {
    function helper(visitedArr) {
      let current = visitedArr[visitedArr.length - 1];
      if (current[0] == maze.length - 1 && current[1] == maze[0].length - 1) {
        return visitedArr;
      }
      if (current[0] >= maze.length || current[1] >= maze[0].length) {
        return null;
      }
      if (current[0] < 0 || current[1] < 0) {
        return null;
      }
      if (maze[current[0]][current[1]] == 1) {
        return null;
      }
      for (let i = 0; i < visitedArr.length - 1; i++) {
        let [x, y] = visitedArr[i];
        if (x == current[0] && y == current[1]) {
          return null;
        }
      }
      visitedArr.push([current[0] + 1, current[1]]);
      let north = helper(visitedArr);
      visitedArr.pop();
      visitedArr.push([current[0] - 1, current[1]]);
      let south = helper(visitedArr);
      visitedArr.pop();
      visitedArr.push([current[0], current[1] + 1]);
      let east = helper(visitedArr);
      visitedArr.pop();
      visitedArr.push([current[0], current[1] - 1]);
      let west = helper(visitedArr);
      visitedArr.pop();
  
      let northL = north ? north.length : Infinity;
      let southL = south ? south.length : Infinity;
      let eastL = east ? east.length : Infinity;
      let westL = west ? west.length : Infinity;
  
      let tempMin = Math.min(northL, southL, eastL, westL);
  
      if (tempMin == northL) {
        return north;
      }
      if (tempMin == southL) {
        return south;
      }
      if (tempMin == eastL) {
        return east;
      }
      if (tempMin == westL) {
        return west;
      }
    }
  
    console.log(helper([[0, 0]]));
    return;
  }
  
  let maze = [[0]];
  getMazePath(maze);
  
  maze = [  [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];
  
  maze = [  [0, 0],
    [0, 0],
  ];
  
  getMazePath(maze);
  