/*
QUESTION:
Sudoku solver

Here's your task: given 9 × 9 matrix representing a sudoku puzzle, return a solved sudoku.
In case you're not familiar with sudoku rules, here they are: the objective is to fill a 9×9 grid with digits so 
that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contains all of the digits from 1 to 9.

It is guaranteed that the given sudoku is solvable, and that only one solution exists.
Get ready, you're about to solve some of the hardest sudokus. Have fun 😃

Example for

sudoku = [[5,3,0,0,7,0,0,0,0], 
          [6,0,0,1,9,5,0,0,0], 
          [0,9,8,0,0,0,0,6,0], 
          [8,0,0,0,6,0,0,0,3], 
          [4,0,0,8,0,3,0,0,1], 
          [7,0,0,0,2,0,0,0,6], 
          [0,6,0,0,0,0,2,8,0], 
          [0,0,0,4,1,9,0,0,5], 
          [0,0,0,0,8,0,0,7,9]]
the output should be

solution(sudoku) = [[5,3,4,6,7,8,9,1,2], 
                        [6,7,2,1,9,5,3,4,8], 
                        [1,9,8,3,4,2,5,6,7], 
                        [8,5,9,7,6,1,4,2,3], 
                        [4,2,6,8,5,3,7,9,1], 
                        [7,1,3,9,2,4,8,5,6], 
                        [9,6,1,5,3,7,2,8,4], 
                        [2,8,7,4,1,9,6,3,5], 
                        [3,4,5,2,8,6,1,7,9]]
*/

function solution(sudoku) {

}


/*
Sudoku solver
- one solution exists
- board is 9x9, each subgrid square is 3x3
basically no repeats horizontally and vertically of numbers 1 - 9. 

TO SOLVE THIS:
- Got to divide 3x3 and mix the subgrid vertically and horizontally
I have not done that or had any tasks in awhile.
- Make sure each row up and down has only one number (possibly pushing to a set for unique value)

SKILL NEEDED / PRE-REQ
- Manipulating an array across diff arrays into one arrayh of reshaping.
- note to self: watch and dive into 2D arrays and sudoku.
- Direction traversal and not going out of bounds.


*/