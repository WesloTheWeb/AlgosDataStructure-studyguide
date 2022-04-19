/*##################################################################################
TAG: Merge Sort - 5m
#####################################################################################

Q. Given an unsorted array, perform merge sort in ascending order.

Examples:
• Given an aray: [1] // returns [1]
• Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]

APPROACH:
 [3, 1, 2, 4 ]   <--- full array
[3, 1 ] [2, 4 ]  <--- divide by  2
[3] [1] [2] [4]  <--- divide by 2 until singular

[1, 3]  [2. 4]   <--- build back up i1 < i2. If i1 <i2 push to new array
i1       i2

[1, 2, 3, 4]
*/
// O(NlogN) time
function mergeSort(input) {
    if (input.length <= 1) {
        return input;
    }

    let left = input.slice(0, input.length / 2);
    let right = input.slice(input.length / 2);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return sortArrayHandler(sortedLeft, sortedRight);
}

function sortArrayHandler(input1, input2) {
    let res = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < input1.length && i2 < input2.length) {
        if (input1[i1] < input2[i2]) {
            res.push(input1[i1])
            i1 += 1;
        } else {
            res.push(input2[i2])
            i2 += 1;
        };
    };

    // Use of spread operator as copies
    return [...res, ...input1.slice(i1), ...input2.slice(i2)];
};

console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]