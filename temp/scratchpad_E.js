// ? From office hours I didnt go to sept 7 but covers n QUEENS!
// TODO: Go over this approach
function nQueen(n) {

    let nQueens = 0;
  
    function nextSquare(r, c) {
      return c == n - 1 ? [r + 1, 0] : [r, c + 1];
    }
  
    function dfs(r, c) {
      if (r === n) {
        if (nQueens === n) {
          // Winner!
        }
        return;
      }
  
      const [nr, nc] = nextSquare(r, c);
  
      // if this position is available
        // place a queen
        dfs(nr, nc);
        // remove the queen we place
      
      dfs(nr, nc);
    }
  
    dfs(0, 0);
  }
  
  /**
   * @param {number} n
   * @return {string[][]}
   */
   function solveNQueens(n) {
    const rows = {};
    const columns = {};
    const pDiag = {};
    const nDiag = {};
  
    function pDiagKey(r, c) {
      return r + c;
    }
    function nDiagKey(r, c) {
      return r - c;
    }
    function getNext(r, c) {
      return c < n - 1 ? [r, c + 1] : [r + 1, 0];
    }
    function outputBoard(board) {
      const encoded = [];
      for (const r of board) {
        encoded.push(r.join(''));
      }
      return encoded;
    }
  
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
      board[i] = new Array(n).fill(".");
    }
  
    const results = [];
    let queens = 0;
  
    function dfs(r, c) {
      if (r === n) {
        // end of board
        if (n === queens) {
          results.push(outputBoard(board));
        }
        return;
      }
  
      // Get next position
      const [nr, nc] = getNext(r, c);
  
      // If we can place a queen here, do it
      if (   !rows[r] && !columns[c]
          && !pDiag[pDiagKey(r, c)] && !nDiag[nDiagKey(r, c)]) {
  
          // Place a queen
          board[r][c] = "Q";
          rows[r] = true;
          columns[c] = true;
          pDiag[pDiagKey(r, c)] = true;
          nDiag[nDiagKey(r, c)] = true;
          queens++;
  
          dfs(nr, nc);
  
          // remove the queen to try someplace else
          board[r][c] = ".";
          rows[r] = false;
          columns[c] = false;
          pDiag[pDiagKey(r, c)] = false;
          nDiag[nDiagKey(r, c)] = false;
          queens--;
      }
      dfs(nr, nc);
    }
  
    dfs(0, 0);
  
    return results;
  }
  
  
  console.log(solveNQueens(1));
  console.log(solveNQueens(2));
  console.log(solveNQueens(3));
  console.log(solveNQueens(4));
  console.log(solveNQueens(5));
  console.log(solveNQueens(6));
  
  