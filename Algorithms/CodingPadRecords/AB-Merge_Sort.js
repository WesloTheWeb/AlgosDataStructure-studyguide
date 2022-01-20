// ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// ✏️ Description
// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given an unsorted array, perform merge sort in ascending order.

// Examples:
// • Given an aray: [1] // returns [1]
// • Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]


/*#######
 [3, 1, 2, 4 ]
[3, 1 ] [2, 4 ]
[3] [1] [2] [4]

[1, 3]  [2. 4]
      i1    i2

i1 < i2 push to new arr

[1, 2, 3, 4]

########*/

const testCase1 = [1];
const testCase2 = [3, 1, 2, 4]

function mergeSort(input) {
    if (input.length <= 1) {
        return input
    }

    let left = input.slice(0, input.length / 2)
    let right = input.slice(input.length / 2)
    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)

    return zip(sortedLeft, sortedRight)
}

function zip(input1, input2) {
    let res = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < input1.length && i2 < input2.length) {
        if (input1[i1] < input2[i2]) {
            res.push(input1[i1])
            i1 += 1
        } else {
            res.push(input2[i2])
            i2 += 1
        }
    }
    // res.push(input.slice(i1, input1.length), input.slice(i2, input2.length))
    // return res;
    return [...res, ...input1.slice(i1), ...input2.slice(i2)];
}

console.log(mergeSort(testCase2));