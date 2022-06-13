/*##############################################################
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in vertical zigzag order (see examples below) starting from the top left element

Examples:
Input1:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Output1:
[1, 4, 7, 8, 5, 2, 3, 6, 9]

Input2:
[
  [1, 2, 3],
  [4, 5, 6]
]

Output2: [1, 4, 5, 2, 3, 6]
##############################################################*/

function solution(m) {
    const newArr = [];

    for (let j = 0; j < m[0].length; j++) {
        // forwards
        for (let i = 0; i < m.length; i++) {
            if (j % 2 === 0) {
                newArr.push(m[i][j])
            } else {
                // backwards
                for (let k = m[j].length - 1; k >= 0; k--) {
                    newArr.push(m[i][k])
                }
            }
        }
    }
    return newArr;
};

// test cases
const testCase1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// [1, 4, 7, 8, 5, 2, 3, 6, 9]

const testCase2 = [
    [1, 2, 3],
    [4, 5, 6]
]
// [1, 4, 5, 2, 3, 6]

console.log(solution(testCase1));
console.log(solution(testCase2));


/* 
OFFICE HOURS - Ask Daniel about this problem worked with Richard
 
*/
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .
/*
- moves to the left
 
2 rotations
[1, 2, 3, 4, 5] --> [3, 4, 5, 1, 2]
 
4 3 2 1
3 2 1 4 first rotation
2 1 4 3 second rotation
1 4 3 2 third rotation?
*/

function leftRotations(nums, shift) {
    let rotatedArr = nums.slice(shift);
    for (let i = 0; i < shift; i++) {
        rotatedArr.push(nums[i])
    }
    return rotatedArr;
};


const test1 = [1, 2, 3, 4, 5];
const test2 = [4, 3, 2, 1];

console.log(leftRotations(test1, 2), 'expected: [3, 4, 5, 1, 2]');
console.log(leftRotations(test2, 3), 'expected: [ 1, 4, 3, 2 ]');


function rotate(nums, k) {
    const k = k % nums.length;
    nums.reverse();
    reverseSubarray(nums, 0, k);
    reverseSubarray(nums, k, nums.length);
}

function reverseSubarray(nums, start, end) {
    const mid = Math.floor((end - start) / 2);
    for (let i = 0; i < mid; i++) {
        const a = start + i;
        const b = end - 1 - i;
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}