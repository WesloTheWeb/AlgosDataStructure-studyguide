let exArr = [5,3, 6, 2, 10]

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.lenght; i++ ) {
        if(arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    };
}

function selectionSort(arr) {
    let resultsArr = [];
    for ( let i = 0;  i < arr.length; i++) {
        let smallest = findSmallest(arr);
        resultsArr.push(smallest);
        arr.splice(i, 1)
    }
    return resultsArr;
}

console.log(selectionSort(exARR));