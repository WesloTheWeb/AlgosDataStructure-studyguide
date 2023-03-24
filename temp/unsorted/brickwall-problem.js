// TODO: Do this later
// https://www.youtube.com/watch?v=w_dev3-mojg
/* Directed Graph
  A  -> B
  |     |
  C <-  D 
  |
  E  <-   F
*/

const graph = {
    A: ['B','C'],
    B: ['D'],
    C: ['E'],
    D: ['C'],
    E: [],
    F: ['E']
  }
  
  const edges = [
    ['A','B'],
    ['A','C'],
    ['B','D'],
    ['C','E'],
    ['D','C'],
    ['F','E']
  ]
  
  const constructAdjacencyList = edges => {
    const ADJList = new Map();
  
    
  
    return ADJList;
  };
  /*
  '''
  Today, you will be given the problem of the Brick Wall:
  
  Source: https://leetcode.com/problems/brick-wall/description/
  
  There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.
  The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.
  If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.
  
  You want to return the least number of bricks that you'll need to cut through.
   
  
  EXAMPLE(S)
  [[1,2,2,1],         
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]] => 2
   
  Example 2
  Input: wall = [[1],[1],[1]]
  Output: 3
  
  Q: Will the sum of each array sum up to be the same width?
  A: Yes.
  
  FUNCTION SIGNATURE
  func minBricks(input: [[Int]]) -> Int
  '''
  */
  
  // goal is to draw a vertical line hitting as least amount of bricks possible
  //edges dont count as going through bricks
  //all bricks are same height
  //always be a rectangle
  //the wall can not be changed around
  
  // happy case
  /*
  1 2 3
  3 3
  1 1 4
  
  1 brick
  
  edge cases
  if wall doesnt exist =>0
  if wall is 1 return 1
  
  approach
  turn into adjaceny matrix
  traverse column by column
  return lowest column count
  
  shift removes first element
  pop removes last element
  */
  
  
  function minBricks(wall) {
  
    let matrix = [];
  
    while (wall.length > 0) {
      let subArray = [];
      let row = wall.shift();
      for (let i = 0; i < row.length; i++) {
        let count = row[i]
        while (count > 0) {
          subArray.push(1)
          count--
        }
        subArray.push(0)
      }
      matrix.push(subArray)
    }
    let answer = Infinity;
    for (let i = 0; i < matrix[0].length - 1; i++) {
      let finalCount = 0;
      for (let j = 0; j < matrix.length; j++) {
        finalCount += matrix[j][i];
      }
      if (finalCount < answer) { answer = finalCount }
    }
  
    return answer
  
  }
  
  
  // console.log(minBricks([
  //   [1,2,2,1],         
  //   [3,1,2],
  //   [1,3,2],
  //   [2,4],
  //   [3,1,2],
  //   [1,3,1,1]
  // ])) //2
  // console.log(minBricks([[1],[1],[1]])) // 3
  
  
  
  // Solution
  
  // We know that a line through the wall will pass through the fewest bricks if and only if it goes through the line with the maximum number of edges. Use a hash map to track the number of bricks whose edges that align at each index. E.g. if at index 3, there are two bricks whose edges align, then the hashmap should have the following key-value pair edges[3] = 2.
  
  // After populating the hashmap, we return the number of rows in the wall minus the maximum edges found to find the minimum bricks we have to 'pass' through.
  
  // Python
  // def leastBricks(self, wall: List[List[int]]) -> int:
  //     edges, maxEdges = defaultdict(int), 0
  //     for row in wall:
  //         for idx in accumulate(row[:-1]):
  //             edges[idx] += 1
  //             maxEdges = max(maxEdges, edges[idx])
  //     return len(wall) - maxEdges


  // ****************
/* Directed Graph
  A  -- B
  |     |
  C --  D 
  |
  E  --   F
*/

// const graph = {
//   A: ['B','C'],
//   B: ['D'],
//   C: ['E'],
//   D: ['C'],
//   E: [],
//   F: ['E']
// }

const edges = [
    ['A','B'],
    ['A','C'],
    ['B','D'],
    ['C','E'],
    ['D','C'],
    ['F','E']
  ]
  
  const constructAdjacencyList = edges => {
    const ADJList = new Map();
  
    for (let edge of edges) {
      let node1 = edge[0]; // A
      let node2 = edge[1]; // B
      
      // Does node1 exist in map?
      // If it does, append node2 to node1's list
      // if it doesn't, set node1 to [node2]
      if (ADJList.has(node1)) {
        ADJList.get(node1).push(node2)
      } else {
        ADJList.set(node1, [node2])
      }
  
    }
  
    return ADJList;
  };
  
  
  console.log(constructAdjacencyList(edges)) 
  // **************