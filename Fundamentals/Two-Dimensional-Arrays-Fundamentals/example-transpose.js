/*################################################################
Given a 2D integer array matrix, return the transpose of matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
################################################################*/

var transpose = function (matrix) {
    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!result[j]) {
                result[j] = [];
            }
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};

/*####################
EXPLANATION

As for the actual transposing portion, the inner if statement refers to the variable j which is the index of your columns 
of the original passed in matrix. it is checking if your result array contains that row. The goal of transposing is 
essentially turning your original rows into columns and original columns into rows.  

And so that if statement is only relevant for the first iteration/ first time you go through the columns of your 
original matrix  just so it can initialize the rows you need. 

Result[J][I] = matrix[I][J] means that for every ith row jth column element from original matrix, put it into 
the result's jth row ith column. if you are still having trouble I can hop on to gather or something 


*/