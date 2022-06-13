/*###############################################################################################
Q.  Given a two dimensional array of integers, fold this array over a vertical axis, adding the numbers that meet.
This means that in each row, the first and last numbers are added to become the first element in the output, and 
the second and second to last become the second element, etc. For example:

3 7 2 4
8 1 9 5
becomes

7 9
13 10
#######################################################################################################*/

function solution(matrix) {  
    let newArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix[0].length - 1;

        while (left <= right) {
            left += 1;
            right -= 1;
        };
    };

    return newArr;
};

// best attempt
function solution2(matrix) {
    let foldedMatrix = []

    for (let row = 0; row < matrix.length; row++) {
        let innerColumns = [];
        // two pointer bit
        let left = 0;
        let right = matrix[0].length - 1;

        while (left < right) {
            innerColumns.push(matrix[row][left] + matrix[row][right]);
            left += 1;
            right -= 1;
        }
        foldedMatrix.push(innerColumns);
    };

    return foldedMatrix;
};