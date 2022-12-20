/*
Given a sorted array of integers and a target integer, check if the array contains a target using binary search.
*/

function solution(array, target) {
    let left = 0;
    let right = array.length - 1;
    let targetIndex = false;
    
    if (array == []) {
        return targetIndex;
    }
    
    while (targetIndex === false && left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (target === array[mid]) {
            return true;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    
    return targetIndex; 
};
