const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  // k = 1
  
  // output:
  // [
  //   [12, 21, 16],
  //   [27, 45, 33],
  //   [24, 39, 28]
  // ]
  /*
  add from row currRow - k to currRow + k AND currCol - k and currCol + k
  */
  
  function solution(M, k) {
    if (k === 0) return M
  
    const result = new Array(M.length).fill().map(row => [])
    
    for (let currRow = 0; currRow < M.length; currRow++) {
      for (let currCol = 0; currCol < M[0].length; currCol++) {
        let sum = 0
        for (let row = currRow - k; row <= currRow + k; row++) {
          for (let col = currCol - k; col <= currCol + k; col++) {
            if (!M[row] || !M[row][col]) continue
            
            sum += M[row][col]
          }
        }
        result[currRow][currCol] = sum
      }
    }
    return result
  }
  
  
  function sum(mat, k) {
    const output = [[]]
  
    for (let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
        output[row] ??= []
        output[row][col] = 0
  
        for (let sumRow = row - k; sumRow <= row + k; sumRow++) {
          for (let sumCol = col - k; sumCol <= col + k; sumCol++) {
            if (!mat[sumRow] || !mat[sumRow][sumCol]) continue
  
            output[row][col] += mat[sumRow][sumCol]
          }
        }
      }
    }
  
    return output
  }
  
  console.log(sum(arr, 1))