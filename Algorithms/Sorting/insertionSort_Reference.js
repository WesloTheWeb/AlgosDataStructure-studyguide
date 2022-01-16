const targetArray = [5,3,1,4,6]

let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key; // We are reassigning the "sorted index" to be the new "key". Same array reassign values
    }
    return inputArr;
};

console.log(insertionSort(targetArray));