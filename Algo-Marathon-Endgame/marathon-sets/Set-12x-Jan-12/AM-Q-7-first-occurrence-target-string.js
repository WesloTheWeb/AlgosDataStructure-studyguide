/*################################################
PROBLEM 7:
Status:  Cheese it (good)
Q.Given a string, return the index of the first occurrence of a target string. Return -1 if the input string
does not contain the target string.

Examples:

Given a string: "hello", target: "ll" // returns 2
Given a string: "formation", target: "afor" // returns -1
[execution time limit] 4 seconds (js)

[input] string string

[input] string target

[output] integer

index


##################################################*/


/* APPROACH
 

*/

// Function:
function solution(string, target) {
    //     let newStr = string.split('') // split into characters

    //     if (newStr.includes(target)) {
    //         return newStr.indexOf(target)
    //     };

    //     return -1;
    // }
    return string.indexOf(target);
}
