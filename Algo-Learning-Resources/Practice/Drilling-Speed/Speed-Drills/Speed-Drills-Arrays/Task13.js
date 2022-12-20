/*Q. Given two array of integers of equal length, zip them up by alternating between the two arrays.

Ex. [1, 2], [3, 4] returns [1, 3, 2, 4]
*/

function solution(array1, array2) {
    let resultsArr = [];
    
    for (let i = 0; i < array1.length; i++) {
        resultsArr.push(array1[i]);
        resultsArr.push(array2[i]);      
    };
    
    return resultsArr;
};