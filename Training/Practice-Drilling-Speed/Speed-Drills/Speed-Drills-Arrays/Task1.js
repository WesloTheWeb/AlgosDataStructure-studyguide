/*
Q. Given an array of integers, move all negative numbers to the left in the order they appear.
*/

/*
[1, 2, 3, 4, 5, -3, -2, -1]
       x
 

*/

function solution(array) {
    const newArr = array.slice();
    
    if (newArr == []) {
        return null;
    } else {
        newArr.sort();
    }
    return newArr;
};
