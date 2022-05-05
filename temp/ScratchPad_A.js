// Binary Search
// Initial Attempt
function binarySearch(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    arr.sort((a, z) => a - z);
    let leftBound = 0;
    let rightBound = arr.length - 1;

    while (leftBound < rightBound) {
        let middle = Math.floor((leftBound + rightBound) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            leftBound++;
        } else if (arr[middle] > target) {
            rightBound--;

        };
    };

    return -1;
};

// Inital attempt fixed
function binarySearch(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    arr.sort((a, z) => a - z);
    let leftBound = 0;
    let rightBound = arr.length - 1;

    while (leftBound <= rightBound) {
        let middle = Math.floor((leftBound + rightBound) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            leftBound++;;
        } else if (arr[middle] > target) {
            rightBound--;
        };
    };

    return -1;
};

// Algo Monster
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {  // <= because left and right could point to the same element, < would miss it
        let mid = left + Math.trunc((right - left) / 2);  // use `(right - left) /2` to prevent `left + right` potential overflow
        if (arr[mid] === target) return mid;  // found target, return its index
        if (arr[mid] < target) {
            // middle less than target, discard left half by making left search boundary `mid + 1`
            left = mid + 1;
        } else {
            // middle greater than target, discard right half by making right search boundary `mid - 1`
            right = mid - 1;
        };
    };
    // if we get here we didn't hit above return so we didn't find target
    return -1;
};
