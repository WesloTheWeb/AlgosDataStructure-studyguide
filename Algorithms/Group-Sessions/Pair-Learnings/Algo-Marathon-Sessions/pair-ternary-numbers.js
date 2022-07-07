/* Office Hour - Algo Marathon
Date: July 7th, 2022
PARTNERS: Heather Barney

QUESTION:
Ternary is a base-3 number system that uses the digits 0, 1, and 2, similar to how decimal uses 0-9 and binary uses 0 and 1.
Given an integer, write a function that converts the number into its base 3 representation. Return the result as a string.
Function Signature:
def convertToBase3(n: int) -> str

Examples:
convertToBase3(0) == "0"
convertToBase3(1) == "1"
convertToBase3(2) == "2"
convertToBase3(3) == "10"
convertToBase3(4) == "11"
convertToBase3(92) == "10102"
convertToBase3(-5) == "-12"


APPROACH:
- recursive approach, finding a base case
" ... .. " <-- come from right
think of it exponents, go from right to left

PSEUDO CODE:


Target runtime & space complexity:
 O(log n)
#########################################*/

// Our attempt:
function convertToBase3(n, exp = 1) {

    // base case
    if (n === 0 && exp === 1) return "0";
    if (n === 0 && exp > 1) return "";

    const remainder = (n % (3 ** exp));
    const num = remainder / 3 ** (exp - 1);
    // recursive case

    return convertToBase3(n - remainder, exp + 1) + num.toString();
}

// Test Cases:
console.log(convertToBase3(-92)) // "10102"
console.log(convertToBase3(0)) // "0"
console.log(convertToBase3(1)) // "1"
console.log(convertToBase3(2)) // "2"
console.log(convertToBase3(3)) // "10"
console.log(convertToBase3(4)) // "11"
console.log(convertToBase3(-5)) // "-12"

// Solution:
function convertToBase(number) {

    function helper(number) {
        const currNum = number % 3;
        const restToProcess = (number - currNum) / 3;
        return (restToProcess !== 0 ? helper(restToProcess) : '') + currNum.toString();
    }

    if (number < 0) {
        return "-" + helper(number * -1);
    }
    return helper(number);
}

// Solution Test Cases:
// same as above

/*##########################
FEEDBACK 
We manage to get every test case except negative numbers.
############################*/