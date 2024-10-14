/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const results = [];

    let minimumDiff = |0|;

    for (let i = 0; i < arr.length; i++) {
        let left = i;
        let right = arr[left] + 1;

        const calculateDiff = arr[right] - arr[left];

        minimumDiff = Math.min(calculateDiff, minimumDiff)

        // Need way to push pairs.
    };


    return results;
};

/*
**Plan**
1. Calculate the minimum difference, using pointers with sliding window
2. Track the minimum difference so far, using | | to negate negative numbers.
3. Since we need to return the pairs, push onto a result array of valid pairs that are equal to minimum absolute.
	3.1 - Need to account the size of the array may not be found right away, no premature
*/