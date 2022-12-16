/*
Q. Given a string, return the index of the first occurrence of a target string. 
Return -1 if the input string does not contain the target string.

Examples:

Given a string: "hello", target: "ll" // returns 2
Given a string: "formation", target: "afor" // returns -1
[execution time limit] 4 seconds (js)

[input] string string

[input] string target

[output] integer
*/
 
/*
APPROACH
- Similar to substring problems
- break string into array of single characters
- iterate over the characters with pointers (classic for loop for index)
- match against our target, if its subsequent and match 
return the index of the first occurrence of target.

Given a string: "hello", target: "ll" // returns 2

["h", "e", "l", "l", "o"]
            p

2 pointers? I need to review this type of problems

*/

function solution(string, target) {
    let newStr = string.split('');
    
    


    return -1;
}
