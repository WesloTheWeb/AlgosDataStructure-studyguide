/* ATTEMPT
- Return the smallest difference on number line between 2 arrays.
- Will need to iterate through both arrays, check & compare each number.
- we want the abs. diff num to be close to zero.

[-1, 5, 10, 20, 28, 3]
             c
[26, 134, 135, 15, 17]
c2
                             
    5 from [10, 15], 7 from [10, 17]
	
PSEUDOCODE:
- sort the code
[-1, 5, 3, 10, 20, 28]
  c
[15, 17, 26, 134, 135]
c2
- Going to need 2 pointers to iterate through
- How would we know if its close to zero? **
- use abs() for absolute value
? have a diff array from pairs, find lowest value of the difference array
- use min() to find lowest value in an array
? how would link the pair that gives the lowest value

two pointer problem
*/
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here
    arrayOne.sort();
    arrayTwo.sort();

    console.log(arrayOne);
    console.log(arrayTwo);
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;


// SOLUTION
function smallestDifference(arrayOne, arrayTwo) {
    // sort the array
    arrayOne.sort((a, z) => a - z);
    arrayTwo.sort((a, z) => a - z);
    // initalize pointers
    let idxOne = 0;
    let idxTwo = 0;
    // infinity
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];

    // iterating while the two arrays are equal
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        // if firstNum less than second Num
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            return [firstNum, secondNum];
        };

        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        };
    };

    return smallestPair;
};