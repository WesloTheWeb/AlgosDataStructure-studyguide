// Utilities DO NOT DELETE
class LLNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class BTNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function list2str(head) {
    const parts = [];
  
    while (head) {
      parts.push(head.value);
      head = head.next;
    }
  
    return `[${parts.join(" -> ")}]`;
  }
  const l2s = list2str;
  // END Utilities
  
  const matrix1 = [
   [1,   2,  3,  4,  5],
   [6,   7,  8,  9, 10],
   [11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20]
  ];
  
  function spiral(matrix) {
    let rowMin = 0;
    let rowMax = matrix[0].length - 1;
    let colMin = 0;
    let colMax = matrix.length - 1;
  
    let stage = 0;
    while (/*more to do*/) {
  
      switch (stage) {
        case 0:
          // right
          for (let c = rowMin; c <= rowMax; c++) {
  
          }
          colMin++;
          break;
        case 1:
          for (let r = colMin; r <= colMax; r++) {
  
          }
          rowMax--;
          // down
          break;
        case 2:
          // left
          for (let c = colMax; c >= colMin; c--) {
            
          }
          break;
          rowMin++
        case 3:
          for (let r = rowMax; r >= rowMin; r--)
          // up
          break;
          colMin--;
      }
  
      stage++;
      stage = stage % 4;
    }
  
  }