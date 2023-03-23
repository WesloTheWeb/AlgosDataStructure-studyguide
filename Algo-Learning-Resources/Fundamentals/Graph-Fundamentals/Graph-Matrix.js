/* 
❓ PROMPT
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from 
the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the 
starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to 
those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg

image = [
         [1,1,1],
         [1,1,0],
         [1,0,1]
        ]
        
image[1][1]
sr = 1, sc = 1, color = 2

image2 = [
          [0,0,0],
          [0,0,0]
         ]
sr = 0, sc = 0, color = 0

image3 = [
            [3,3,3],
            [3,3,1],
            [3,1,0]
         ]
        
image3[1][1]
sr = 1, sc = 1, color = 3

APPROACH:
Approach 1: BFS
- goes for breadth all possible eligible areas to flood 
- as its using up down left right

*Approach 2: DFS
- Create stack
- iterate over 
- change the designated starting color to target color

DIRECTIONS: 
- up
- left
- down
- right

*/

function floodFill(matrix, startingRow, startingCol, targetColor) {
    // matrix aka graph, return it once we flood
    // matrix[startingRow]
    // matrix[startingRow][startingCol], this is where start dfs
    // targetColor, is what we're flooding
    // up down left right variables?
  
    const initialColor = matrix[startingRow][startingCol]
    const visited = new Set();
  
    const helper = (r, c) => {
      // base cases
      // 1. OUT OF BOUNDS CONDITIONS
      let r_inbound = 0 <= r && r < matrix.length;
      let c_inbound = 0 <= c && c < matrix[0].length;
      if (!r_inbound || !c_inbound) return;
  
      // 2. COLOR OF NODE IS NOT INITIAL COLOR WE'RE ALLOWED TO FLOOD
      if (matrix[r][c] !== initialColor) return;
  
      // 3. WE'VE VISITED THIS NODE BEFORE, WE DON'T WANT TO REPEAT
      const pos = r + ', ' + c;  // acts as coordinates for JS
      if (visited.has(pos)) return;
      visited.add(pos)
  
      // flooding the spot
      matrix[r][c] = targetColor; 
  
      // recursive case    
      helper(r + 1, c);
      helper(r, c + 1);
      helper(r - 1, c);
      helper(r, c - 1);
    }
  
    helper(startingRow, startingCol);
    
    return matrix;
  };
  
  let image = [[1,1,1], 
               [1,1,0], 
               [1,0,1]];
  let sr = 1;
  let sc = 1;
  let color = 2;
  
  console.log(floodFill(image, sr, sc, 2));
  
  /*###############
   TAKE AWAYS
  - Consider cycles to prevent stack overflow. We can make a set or visited array
  
  - DFS, BFS (you can solve most graph problems with these)
  - Union Find 
  - Topological Sort
  #################*/