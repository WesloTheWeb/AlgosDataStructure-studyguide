/* 
Write a function that takes in a non empty array of distinct integer and an integer representing a target sum.
Should find all triplets to equal that target sum. If no three numbers sum up to target sum, return emtpy array.

Technique: 3 Pointers
*/
function threeNumberSum(array, targetSum) {

    // sort the array first
    array.sort((a, b) => a - b);
    let triplets = []; // create array that we push into

    // begin for loop, we want to have -2 due to having triplets
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1; // we want it to the right
        let right = array.length - 1;
        // Careful with while loop as you can have off by one errors
        while (left < right) {
            let currentSum = array[i] + array[left] + array[right]
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            };
        };
    };

    return triplets;
};
