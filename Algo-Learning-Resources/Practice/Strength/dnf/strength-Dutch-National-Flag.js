function dnf(input) {
    let low = 0;
    let mid = 0;
    let high = input.length - 1;

    while (mid <= high) {
        if (input[mid] === 0) {
            swapHelper(input, mid++, low++);
            //swap (low, mid)
            // [input[mid], input[low]] = [input[low], input[mid]]
        } else if (input[mid] === 2) {
            swapHelper(input, mid, high--)
        } else {
            mid++;
        };
    };
};

// Key helper that helps with swapping
const swapHelper = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};