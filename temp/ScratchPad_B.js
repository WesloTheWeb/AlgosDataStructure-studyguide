/* TODO: Add in later of floodFill but the important part is the 
// directions of UP DOWN LEFT RIGHT

// sr = 1, sc = 1
// color = 2

// [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1]
// ]
//  to...
// [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1]
// ]

// [
//   [1, 1, 1],
//   [1, 2, 2],
//   [1, 2, 1]
// ]

// replace same as whatever the sr, sc was.
/*

APPROACH: 
1.) BFS - APPROACH
- up, down, left, right
- we start on our starting row (sr) and starting column (sc)
  - will need Set / visited so we don't repeat
- will use a queue, keep going until we cant aka reach a number that wasn't 
number[sr][sc]

PSUEDO CODE:
- create visited array that is a set 
- start at number[startingRow][startingColumn], and then change to what the color is. 
    --> but only if it matches initial value of number[startingRow][startingColumn]

- initialize our queue to be number[startingRow][startingColumn]
- BFS traversal changing the same value to color 
- enque children via directions
    UP: startingColumn + 1
    DOWN: startingColumn - 1
    LEFT: startingRow - 1
    RIGHT: startingRow + 1
- As we traverse add to set.

function fill(matrix, startingRow, startingColumn, color);
*/

function fill(matrix, startingRow, startingColumn, color) {
    const queue = [[startingRow, startingColumn]];

    const rowLimit = matrix.length;
    const columnLimit = matrix[0].length

    const oldColor = matrix[startingRow][startingColumn];


    while (queue.length > 0) {
        const [row, col] = queue.shift(); // tuple

        // out of bounds
        if (row < 0 || row >= rowLimit) {
            continue;
        }

        if (col < 0 || col >= columnLimit) {
            continue;
        }

        if (matrix[row][col] === oldColor) {
            // directions
            const UP = col + 1
            const DOWN = col - 1
            const LEFT = row - 1
            const RIGHT = row + 1

            // process popped element
            matrix[row][col] = color;
            // enque next elements

            queue.push([row, UP]);
            queue.push([row, DOWN]);
            queue.push([LEFT, col]);
            queue.push([RIGHT, col]);
        }
        // r = - 1 // invalid
        //     r = 0
        // r = 1
        // r = 2
        // r = 3
        // const matrix1 = [
        //   [1, 1, 1],
        //   [1, 1, 0],
        //   [1, 0, 1]
        // ];

        // for (let square of matrix[i]) {
        //   console.log(square);
        //   // if (square == matrix[startingRow][startingColumn]) {
        //   //   square = color;
        //   //   visited.add(square);
        //   // }
        // }

        return matrix;
    };
};

const matrix1 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];

console.log(fill(matrix1, 1, 1, 2))

// SOLUTION DFS

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const sColor = image[sr][sc];

    function fill(r: number, c: number): void {
        if (r < 0 || r >= image.length) return;
        if (c < 0 || c >= image[0].length) return;

        const pixelColor = image[r][c];
        if (pixelColor === color) return;
        if (pixelColor !== sColor) return;

        image[r][c] = color;

        fill(r - 1, c);
        fill(r + 1, c);
        fill(r, c - 1);
        fill(r, c + 1);
    }

    fill(sr, sc);

    return image;
};
