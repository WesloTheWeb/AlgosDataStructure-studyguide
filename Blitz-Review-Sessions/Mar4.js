function merge(a, b) { // a and b are arrays and already sorted
    const output = [];

    // merge sorted arrays 
    // what if you run out of elements from a before b
    while (a.length && b.length) {
        if (a[0] < b[0]) {
            output.push(a.shift())
        } else {
            output.push(b.shift())
        };
    };

    /*
    while (a.length) {
      output.push(a.shift())
    }
    
    while (b.length) {
      output.push(b.shift())
    }
  
    return output;
    */

    return [...output, ...a, ...b];
};

function mergeSort(array) {
};

// binarySearch alt. Because it can land on the problem
// return the index of k or -1, array is sorted
function binarySearch(array, k) {
    let lbound = 0;
    // takes care of one possible off by one bug
    let ubound = array.length;

    while (lbound < ubound) {
        // compute middle index
        const middle = Math.floor((lbound + ubound) / 2);
        if (array[middle] === k) return middle;

        if (array[middle] > k) {
            ubound = middle;
        } else {
            // we know the middle value is less than k
            lbound = middle + 1;
        }
    }
    return -1;
}

// validate BST alt:
// pattern

function validateBST(root, bounds = [-Infinity, Infinity]) {
    let leftOk = true;
    let rightOk = true;

    // check ourself
    if (root.left) {
        if (root.value < root.left.value) return false;
        leftOk = validateBST(root.left, [bounds[0], root.value]); // check left  
    }

    if (root.right) {
        if (root.value > root.right.value) return false;
        rightOk = validateBST(root.right, [root.value, bounds[1]]); // check right
    }

    return rightOk && leftOk; // combine
}

// count elements recursively
// same pattern as above

function countNodes(root) {
    if (!root) return 0;

    let left = 0;
    if (root.left) {
        left = countNodes(root.left);
    }

    let right = 0;
    if (root.right) {
        right = countNodes(root.right);
    }

    return left + right + 1;
}