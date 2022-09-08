/* Office Hour - Algo Marathon
Date: 09/3/2022
PARTNERS:

QUESTION:
Many teams use a type of tool called a linter to scan code to ensure it follows certain standards and best practices. 
One common rule a linter might check for is the depth of nesting of control flow. Functions with many levels of nesting 
are often overly complex, hard to read or modify, and can be bug farms. We're going to write a function to determine 
the depth of control flow for if-statements so that teams will be automatically notified if it gets too deep.

In Visual Basic (an old language I hope most of you never need to use), if statements are bounded by four keywords: 
if, elseif, else, and endif. 

Given a sequence of these keywords, return the max nesting depth or -1 if the structure is incorrect.

The structure is incorrect when:
The first keyword is anything other than an if.
If and endif keywords do not pair up or are out of order.
An else or elseif is not inside an if.
There are two else blocks in a row.
An elseif follows an else at a given level.

Start by implementing this with only if, and endif. Then add support for else. Once that is working, 
modify the code to support elseif as well.

Examples:
console.log(vbNesting(["if"]) == -1)
console.log(vbNesting(["endif"]) ==  -1)
console.log(vbNesting(["if", "endif"]) == 1)
console.log(vbNesting(["if", "else", "endif"]) == 1)
console.log(vbNesting(["if", "endif", "if", "endif"]) == 1)
console.log(vbNesting(["if", "if", "endif", "endif"]) == 2)
console.log(vbNesting(["if", "if", "if", "endif", "endif", "endif"]) == 3)
console.log(vbNesting(["if", "if", "if", "endif", "endif", "if", "endif", "endif"]) == 3)

APPROACH:




PSEUDO CODE:




Time Complexity: O(n)
Space Complexity: O(n)
#########################################*/

// Our attempt:
// N/A

// Test Cases:



// Solution: 



/* Explanation of Solution:
Here's our explanation of the solution:
- Keep a stack of keywords (initialize to empty), a variable tracking the max depth (initialize to 0).
- Iterate through the list of keywords:
- Push an if on the stack and check to see if this is a new max depth
- Pop from the stack on an endif (or return "Invalid" if there is nothing to pop)
- For an else, pop the current stop of the stack. If that keyword is an if, push the else. If it's an else, return invalid.
- At the end return the max depth if the stack is empty and "Invalid" otherwise.
*/
// Solution Test Cases:
console.log(vbNesting(["if"]) == -1);
console.log(vbNesting(["endif"]) ==  -1);
console.log(vbNesting(["if", "endif"]) == 1);
console.log(vbNesting(["if", "if", "if", "endif", "endif", "endif"]) == 3);
console.log(vbNesting(["if", "if", "if", "endif", "endif", "if", "endif", "endif"]) == 3);
console.log(vbNesting(["if", "else", "endif"]) == 1);
console.log(vbNesting(["if", "endif", "if", "endif"]) == 1);
console.log(vbNesting(["if", "if", "endif", "endif"]) == 2);
console.log(vbNesting(["else"]) == -1);
console.log(vbNesting(["endif", "if"]) == -1);
console.log(vbNesting(["if", "else", "if", "endif", "endif"]) == 2);
console.log(vbNesting(["if", "endif", "if", "elseif", "else", "endif", "endif"]) == -1);
console.log(vbNesting(["if", "elseif", "elseif", "elseif", "endif"]) == 1);
console.log(vbNesting(["if", "elseif", "else", "endif"]) == 1);
console.log(vbNesting(["if", "if", "elseif", "else", "endif", "endif"]) == 2);
console.log(vbNesting(["if", "endif", "if", "elseif", "else", "endif"]) == 1);
console.log(vbNesting(["if", "else", "elseif", "endif"]) == -1);
console.log(vbNesting(["if", "else", "else", "endif"]) == -1);