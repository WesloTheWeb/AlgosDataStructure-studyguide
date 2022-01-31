/*
Q. Given two array of integers of equal length, zip them up by alternating between the two arrays.

Ex. [1, 2], [3, 4] returns [1, 3, 2, 4]
*/

function solution(array1, array2) {
    let resultArr = [];

    for (let i = 0; i < array1.length; i++) {

        resultArr.push(array1[i]);
        resultArr.push(array2[i]);
    };

    return resultArr;
};
