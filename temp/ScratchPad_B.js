// const howHigh = (root) => {
//     // base case
//     if (node === null) 
//     return -1;

//     // recursive case
//     const leftTreeHeight = howHigh(node.left);
//     const rightTreeHeight = howHigh(node.right);

//     return 1 + Math.max(leftTreeHeight, rightTreeHeight);

// };


const levelAverages = (root) => {
    const queue = root ? [root] : [];
    let results = [];

    const addLevelValues = (arr) => {
        let sumArr = [];
        sumArr.push(arr);
        let sum = arr.reduce((cV, acc) => {
            cV + acc
        });
        return sum;
    };

    const calculateAverage = (arr, length) => {
        // return Math.floor(arr / length);
        return (arr / length);
    };

    while (queue.length) {
        let currLvl = [];
        let nextLvl = [];

        queue.forEach((node) => {
            currLvl.push(node);

            let currSum = addLevelValues(node);
            let averageLvl = calculateAverage(currSum, currLvl.length);

            if (node.left) nextLvl.push(node.left);
            if (node.right) nextLvl.push(node.right);
        });

        results.push(averageLvl);
    };

    return results;
};