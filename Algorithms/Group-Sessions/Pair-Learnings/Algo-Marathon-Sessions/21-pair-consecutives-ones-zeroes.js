/* Office Hour - Algo Marathon
Date: 
PARTNERS:

QUESTION:
Given an integer maxLen, print all binary strings of size maxLen that don't have 1s next to each other. 
That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume maxLen > 0.


Function Signature: 
def printBinaryWithoutConsecutive1s(maxLen: int) -> None:

Examples:
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101

APPROACH
- Gives a number of maxLen that is the size of length, its going to be 0s or 1s 
- We don't want 1's next to each other.


PSEUDO CODE:
- create an array of results
- helper function, 


Target runtime and space complexity:
Time: O(2^n) where n is the length of the binary string. There are n indexes and each index can be either 0 or 1 with some small exceptions

Space: O(n) because the stack can reach n recursive frames before being torn down

#########################################*/

// Our attempt:
function printBinaryWithoutConsecutive1s(maxLen) {
    let answer = [];

    function helper(lastWasOne = false, partialAnswer = []) {
        // base case
        if (partialAnswer.length == maxLen) {
            answer.push(partialAnswer.join(""));
            return;
        }

        let partialAnswerCopy = [...partialAnswer];
        partialAnswerCopy.push(0);
        helper(false, partialAnswerCopy);
        partialAnswerCopy.pop();

        if (!lastWasOne) {
            partialAnswerCopy.push(1);
            helper(true, partialAnswerCopy);
        };
    };

    helper();

    return answer;
};

// Test Cases:
console.log(printBinaryWithoutConsecutive1s(1), ['0', '1']);
console.log(printBinaryWithoutConsecutive1s(2), ['00', '01', '10']);
console.log(printBinaryWithoutConsecutive1s(3), ['000', '001', '010', '100', '101']);
console.log(printBinaryWithoutConsecutive1s(4), ['0000', '0001', '0010', '0100', '0101', '1000', '1001', '1010']);
console.log(printBinaryWithoutConsecutive1s(5), ['00000', '00001', '00010', '00100', '00101', '01000', '01001', '01010', '10000', '10001', '10010', '10100', '10101']);


/*
Formation answer

Here's our explanation of the solution:
This can be solved in a couple of different ways. The provided solution gradually appends to strings stored on each recursive frame and only prints when the string is the max length.
When the most recently appended character in the string is a 1, the function only recurses by appending a 0. Otherwise, the function recurses once by appending a 0 and then a second time by appending a 1.
The other approach is to initialize an array of the max length and track the current index being viewed and do the same above algorithm.
*/
// Solution: 
function printBinaryWithoutConsecutive1s(maxLen) {

    function binaryStringHelper(accum, maxLen) {
        if (accum.length == maxLen) {
            console.log(accum);
            return;
        }

        let lastIndex = accum.length - 1;

        if (accum[lastIndex] == '1') {
            binaryStringHelper(accum + '0', maxLen)
        } else {
            // the last index holds '0' so recurse to append 0 and 1
            binaryStringHelper(accum + '0', maxLen)
            binaryStringHelper(accum + '1', maxLen)
        }
    }
    binaryStringHelper("0", maxLen);
    binaryStringHelper("1", maxLen);
}


// Solution Test Cases: