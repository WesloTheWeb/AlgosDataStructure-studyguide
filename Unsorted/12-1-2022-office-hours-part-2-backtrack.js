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
  
  
  /* seating chart
  - at the end when seat array is length of students'
  [A, B, C]
  
  [ 
    [A, B, C]
    [A, C, B]
    [B, A, C]
    .
    .
    .
  ]
  
  */
  
  
  function seatingCharts(students) {
    const results = [];
    const seats = []; // stack
    const assigned = new Set();
  
    function helper() {
      // is this a dead end (or base case)
      if (seats.length === students.length) {
        results.push([...seats]);
        return;
      }
  
      // Try each of the possible decisions from here
      for (const s of students) {
        // Have we already place this student in a seat?
        if (!assigned.has(s)) {
          // If we haven't...
          // Put this person in THIS seat
          seats.push(s);
          assigned.add(s);
  
          // Move on to the next student to place
          helper();
  
          // Remove this person from this seat so we can try someone else here
          seats.pop();
          assigned.delete(s);
        }
      }
  
    }
  
    helper();
    return results;
  }
  
  console.log(seatingCharts(['a', 'b', 'c']));
  
  
  
  
  
  
  
  
  
  // const matrix1 = [
  //  [1,   2,  3,  4,  5],
  //  [6,   7,  8,  9, 10],
  //  [11, 12, 13, 14, 15],
  //  [16, 17, 18, 19, 20]
  // ];
  
  // function spiral(matrix) {
  //   let rowMin = 0;
  //   let rowMax = matrix[0].length - 1;
  //   let colMin = 0;
  //   let colMax = matrix.length - 1;
  
  //   let stage = 0;
  //   while (/*more to do*/) {
  
  //     switch (stage) {
  //       case 0:
  //         // right
  //         for (let c = rowMin; c <= rowMax; c++) {
  
  //         }
  //         colMin++;
  //         break;
  //       case 1:
  //         for (let r = colMin; r <= colMax; r++) {
  
  //         }
  //         rowMax--;
  //         // down
  //         break;
  //       case 2:
  //         // left
  //         for (let c = colMax; c >= colMin; c--) {
            
  //         }
  //         break;
  //         rowMin++
  //       case 3:
  //         for (let r = rowMax; r >= rowMin; r--)
  //         // up
  //         break;
  //         colMin--;
  //     }
  
  //     stage++;
  //     stage = stage % 4;
  //   }
  
  // }
  // /*
  
  // */