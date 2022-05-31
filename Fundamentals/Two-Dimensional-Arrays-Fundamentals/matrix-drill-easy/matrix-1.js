/*##############################################################
Q. Given a matrix, check if it is a binary matrix. A binary matrix is a matrix 
in which all the elements are either 0 or 1.
##############################################################*/

function solution(m) {
    //outer
    for (let row = 0; row < m.length; row++) {
        //inner
        for (let col = 0; col < m[row].length; col++) {
            // check
            if (!(m[row][col] == 0 || m[row][col] == 1)) {
                return false;
            }
        };
    };
    
    return true;
};

// test cases