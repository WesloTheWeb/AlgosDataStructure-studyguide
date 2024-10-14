/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // sort the array
    arr.sort((a,b) => a - b);

    let minDiff = Infinity;
    const results = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < minDiff) {
            minDiff = diff; // change the minimum difference
            results.length = 0; // clears the previous results
            results.push([arr[i-1], arr[i]])
        } else if ( diff === minDiff) {
            // push our pair
            results.push([arr[i-1], arr[i]]);
        };
    };

    return results;
};

// time: O(n log n)