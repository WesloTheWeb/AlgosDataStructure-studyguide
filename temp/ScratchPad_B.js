// TODO: Try this problem again:
/*
❓ PROMPT
Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. 
This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, 
then the third is back to normal order again, each row the opposite order of the ones before and after.

Example(s)
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
]
linearizeZigZag(matrix) == [1,2,3,6,5,4]
 

🔎 EXPLORE
State your assumptions & discoveries:
 - Assume that always given a valid matrix, not null.
 - zig zag to the end.

Create examples & test cases:

const test1 = [
  [1, 2, 3],
  [4, 5, 6]
]   // [1,2,3,6,5,4]

const test2 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]   // [1,2,3,6,5,4,7,8,9]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Iterate forward and backwards
Time: O(n)
Space: O(n)
- I forgot exactly how to make this work, but I know it is a double nested arrays. May involve console logging but essentially alternate each row.
 

📆 PLAN
High-level outline of approach #: 
- Create outer loop of column ++
  - create inner loop of row --


🛠️ IMPLEMENT
function linearizeZigZag(matrix) {
def linearizeZigZag(matrix: list[list[int]]) -> list[int]:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

function linearizeZigZag(matrix) {
    const results = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (i % 2 === 0) { // even
            for (let j = 0; j < row.length; j++) {
                results.push(row[j]);
            };
        } else {
            for (let j = row.length - 1; j >= 0; j--) {
                results.push(row[j])
            }
        }
    }

    return results;
};


// Test cases
// const test1 = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]   // [1,2,3,6,5,4]

const test2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]   // [1,2,3,6,5,4,7,8,9]

  // console.log(linearizeZigZag(test1))
