/* TYPE: ARRAYS
Meant for in-depth review and / or practice with a friend.
*/
/*###################################
QUESTION: 


####################################*/

function solution(array) {

};

/*###################################
QUESTION 2: 
Q. Create an array of integers with a starting number s, an increment value i, and a repetition count r given.
Examples:
    Input1: start = 3, increment = 2, repetition count = 5
    Output1: [3, 5, 7, 9, 11]
    Input2: start = 1, increment = 1, repetition = 3
    Output2: [1, 2, 3]
    [execution time limit] 4 seconds (js)

    [input] integer s

    starting value

    [input] integer i

    increment value

    [input] integer r

    repetition count

    [output] array.integer
######################################*/

function solution2(array) {

};

/*###################################
QUESTION 3: 
Q. Given an array of integers in ascending order, return a array of the squares of each number 
sorted in ascending order.

[execution time limit] 4 seconds (js)

[input] array.integer array

[output] array.integer

####################################*/

function solution3(array) {

};


/*#######################################
QUESTION 4: 
Q. Given a fixed length array of integers, repeat each occurrence of 0, shifting the remaining elements to the right. 
Elements beyond the original length of the array should be discarded.

Examples:
    Input1: [1,2,3]
    Output1: [1,2,3]
    Input2: [1,0,7,3,0,1,5,0]
    Output2: [1,0,0,7,3,0,0,1]
    [execution time limit] 4 seconds (js)

    [input] array.integer array

    [output] array.integer
#######################################*/

function solution4(array) {

};

/*###################################
QUESTION 5: 
Given an array of integers, check if there is a triplet (a, b, c) that satisfies a^2 + b^2 = c^2.

Input: array: [1, 2, 4, 2, 5, 3]
Output: true // [3, 4, 5]

    [execution time limit] 4 seconds (js)

    [input] array.integer array

    [output] boolean
####################################*/

function solution5(array) {

};

/*###################################
QUESTION 6: 
Q. Given an array of positive integers, remove only odd numbers at odd positions. The first position of the array is 1.

Example:
Input: [1, 2, 3, 7, 5, 2]
Output: [2, 7, 2]

####################################*/

function solution6(array) {
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 || array[i] % 2 === 1) {
            newArr.push(array[i]);
        } else {
            return newArr;
        };
    };
    
    return newArr;
};
