/*################################################
PROBLEM 4:
Status: Good
Q. Given an unsorted array, perform bubble sort in ascending order.

##################################################*/

 
/* APPROACH
 

*/

// Function:
function solution(array) {
    // outer
    for (let i = 0; i < array.length; i++) {
        // inner
        for (let j = 0; j < array.length - 1; j++) {
            // swap bubble logic
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            };
        };
    };
    
    return array;
};
