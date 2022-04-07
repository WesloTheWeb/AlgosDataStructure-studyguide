/*##################
 Level 2 tier Algo
####################
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum
- The function should find all triplets in the array that sum up to the target sum and return a 2D ARRAY OF ALL THESE TRIPLETS
- The numbers in each triplet should be ordered in ascending order
- The triplets themselves should be ordered in ascending order with respect to the numbers they hold.
- If no three numbers sum up to the target sum, the function should return an empty array.
*/

// O(n^2) time  || O(n) space 
function threeNumberSum(array, targetSum) {
    // Sort the array
    let newArr = array.sort();
    let triplets = [];

    for (let i = 0; i < newArr.length; i++) {
        let left = i + 1;
        let right = newArr.length - 1;

        while (left < right) {
            let currentSum = newArr[i] + newArr[left] + newArr[right];

            if (currentSum == targetSum) {
                triplets.append([newArr[i], newArr[left], newArr[right]])
                // increment and decrement values
                left += 1;
                right -= 1;
            } else if (currentSum < targetSum) {
                left += 1;
            } else if (currentSum > targetSum) {
                right -= 1;
            };
        };
    };

    return triplets;
};

/*#######
APPROACH 
#########
- Sort the array first.
- Set up for loop, then while loops.
- If, else if statements.
*/