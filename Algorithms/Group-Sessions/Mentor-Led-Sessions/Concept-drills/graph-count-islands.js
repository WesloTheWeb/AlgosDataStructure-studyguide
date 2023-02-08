// Counting islands problem
// https://leetcode.com/problems/number-of-islands/description/

const test_grid_1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]
  
  const test_grid_2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]
  
  /*
  directions to look in:
  const directions = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
  
  seen or traversed:
  const visited = [0, 0, 0, 0, 0] means none visited in first row
  
  Javascript set w/ stringified coordinates
  */
  function exploreGrid(grid) {
    const seen = new Set();
    let count = 0;
    const stack = [];
  
    function getNeighbors(coordinate) {
      //takes in a tuple [x,y]
      const neighbors = [];
      const [x, y] = coordinate;
      if (x > 0) {
        neighbors.push([x - 1, y])
      }
      if (x + 1 < grid.length) {
        neighbors.push([x + 1, y])
      }
      if (y > 0) {
        neighbors.push([x, y - 1])
      }
      if (y + 1 < grid[0].length) {
        neighbors.push([x, y + 1])
      }
      return neighbors;
    }
  
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        if (grid[x][y] === '1' && !seen.has(`${x},${y}`)) {
          stack.push([x, y])
          while (stack.length) {
            let curr = stack.pop();
            const [x, y] = curr;
            seen.add(`${x},${y}`)
            const neighbors = getNeighbors(curr);
            if (neighbors.length) {
              neighbors.forEach((cell) => {
                const [x, y] = cell;
                if (grid[x][y] === '1' && !seen.has(`${x},${y}`)) {
                  console.log(grid[x][y])
                  stack.push([x, y])
                }
              })
            }
          }
          count++;
        }
      }
    }
  
    return count;
  }
  
  // Test Cases
  console.log(exploreGrid(test_grid_1))
  console.log(exploreGrid(test_grid_2))