/*#############################################
Leet Code:  https://leetcode.com/problems/isomorphic-strings/  
TYPE: ARRAY / STRINGS

Q. For this question we ask you to determine whether or not a string has valid parentheses.
 A string has valid parentheses if each bracket is closed and opened in the same order and has the same type. 
 Parentheses has 3 types (), {} and []

##########################################*/
 
function validParentheses(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (pairs.hasOwnProperty(c)) {
            if (stack.length > 0 && stack[stack.length - 1] == pairs[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        };
    };

    return stack.length == 0;
};