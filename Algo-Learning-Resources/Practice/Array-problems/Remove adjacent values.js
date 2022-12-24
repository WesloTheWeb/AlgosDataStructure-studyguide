/*######################################################################################
QUESTION:
Given a binary tree with node values represented as integers, find and return the most frequent node value.
You can assume there will always be a most frequent node and that there are no ties.

##########
EXAMPLES
##########
Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"
 
#################
Expected Runtime
##################
Time:
Space: 

APPROACH:
- We want to constantly remove adjacent duplicates
- Use a stack, that we are constantly reading and popping from
- if there's a match we remove the element else we push to stack.


PSEUDOCODE:

######################################################################################*/
 
const solution = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[s.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    };
  };

  return stack.join('');
};

/*###########
TEST CASES
#############*/
const string1 = "abbaca";
const string2 = "azxxzy";

console.log(removeDuplicates(string1)) // ca
console.log(removeDuplicates(string2)) // ay
