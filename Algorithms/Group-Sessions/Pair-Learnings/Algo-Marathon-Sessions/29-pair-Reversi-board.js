/* Algo Marathon
Date: January 30th, 2023
PARTNERS: John K.

QUESTION:
Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has two sides, 
black and white, and after being placed, further moves cause other discs to flip colors. Specifically, a line of discs of 
one color gets flipped when sur rounded on both ends by discs of the opposite color.

In this problem, you're given a 2-dimensional array representing the board. Each position will contain a value of “B” 
for black, “W” for white, or “*” to represent an empty spot. 
Additionally, we get a position that is currently empty. 
If it's black's turn to play, our task is to determine if this is a legal move.

A move must meet all of the following criteria:
1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
2. The play must surround a series of pieces of the opposite color in a line, thereby flipping them.

A simple, 1-dimensional example consider:
* W W W B * * * 

In this case, only the first position is a valid move for black to play because it would surround three white tiles. 
The remaining positions are invalid moves because they would not surround any white tiles.

This is the starting state of the game with black's possible opening moves labeled with an L:

  0 1 2 3 4 5 6 7
0 * * * * * * * *
1 * * * * * * * *
2 * * * * L * * *
3 * * * B W L * *
4 * * L W B * * *
5 * * * L * * * *
6 * * * * * * * *
7 * * * * * * * *

The board will always be no more than an 8x8 matrix of these three symbols.

FUNCTION SIGNATURE
function isLegalMove(board, x, y)
 
EXAMPLE(S)
isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
Output:  false
 

APPROACH:
Possible ways:
1. DFS 
2.

check if white stones within boundaries.
after breadth, go depth


PSEUDO CODE:
---

Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:
function isLegalMove(board, row, col) {
    let check = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]];
    let boundary_row = board.length;
    let boundary_col = board[0].length;

    for (const offset of check) {
        let offset_row = offset[0];
        let offset_col = offset[1];

        console.log([row + offset_row, col + offset_col], [row + offset_row * 2, col + offset_col * 2], "outside");
        if (0 <= (row + offset_row) && (row + offset_row) < boundary_row && 0 <= (col + offset_col) && (col + offset_col) < boundary_col) {
            // console.log(board[row + offset_row][col + offset_col],board[row + offset_row*2][col + offset_col*2])
            console.log([row + offset_row, col + offset_col], [row + offset_row * 2, col + offset_col * 2], "inside")
            if (board[row + offset_row][col + offset_col] === "W" && board[row + offset_row * 2][col + offset_col * 2] === "B") {
                return true;
            };
        };
    };

    return false;
};

// Test Cases:
// Test Case 1
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    2, 3),
    false
);

// Test Case 2
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    2, 3),
    false
);

// Test Case 3
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    2, 4),
    true
);

// Test Case 4
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    3, 5),
    true
);

// Test Case 5
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    4, 5),
    false
);

// Test Case 6
console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    5, 5),
    false
);

// Test Case 7
console.log(isLegalMove(
    [
        ['B', 'W', 'W', 'W', 'W', 'W', 'W', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    0, 7),
    true
);

console.log(isLegalMove(
    [
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', 'B', 'W', '*', '*', '*'],
        ['*', '*', '*', 'W', 'B', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*'],
    ],
    2, 2),
    false
);

// Solution: 
function solution(board, y, x) {
    const size = board.length;

    function look(dy, dx) {
        let currX = x + dx;
        let currY = y + dy;
        let whiteCount = 0;

        while (currX < size && currY < size && currX >= 0 && currY >= 0) {
            if (board[currY][currX] === "W") {
                whiteCount++;
            } else if (board[currY][currX] === "B") {
                return whiteCount >= 1;
            } else {
                return false;
            }
            currX += dx;
            currY += dy;
        }
        return false;
    }

    return (
        look(-1, 0) || // down
        look(-1, 1) || // down and right
        look(0, 1) || // right
        look(1, 1) || // up and right
        look(1, 0) || // up
        look(1, -1) || // up and left
        look(0, -1) || // left
        look(-1, -1)   // down and left
    );
};