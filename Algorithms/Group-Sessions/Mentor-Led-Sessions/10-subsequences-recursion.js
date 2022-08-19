/*########################
TYPE: STRING / RECURSION (INCOMPLETE)
Question:
Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in the list and in s.
For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, since b comes before d in the original string.
Given an input string, return all subsequences of the string.

Example:
    getAllSubsequences("abc") == [
      "a",
      "b",
      "c",
      "ab",
      "ac",
      "bc",
      "abc",
    ]

    "" -> ""
    "ab" -> "a", "b", "ab"
    "abcd" -> "a", "b", "c", "d"
              "ab", "ac", "ad",
              "bc", "bd", "cd",
              "abc", "acd", "bcd",
              "abcd",

Approach:
- variable that holds the subset to output
- loop over the string - iterates over each char in string
- string[index] we will pass into a recursion function
  - combine potential subsets on the current string[index]
  - pushes subset to variable for output
  - break out of this recursion, then continues the loop for the next string[index]
- return the output

Time Complexity:
Space Complexity:
 
Pseudo Code:
How to create subsets:

Iterate String from 0 to lenght of the string
   fc = Get first character
   Call recursive function with fc, 
                rest of the character from next index
end of first loop

recursion_fun(String subSet, String remaining) 
  - Base case if remaining is empty


function subSequence(input){
  for(let i in input){
    let firstC = input[0];
  }
}

subsequence("ab") -> ["a", "b", "ab"]


Run time : O(2 ^ n); n = length of string

########################*/


function subsequence(input) {
    // base case
    if (input === '') return [];
    if (input.length === 1) return [input];
    let output = [];

    for (let i = 0; i < input.length; i++) {
        let fc = input[0];
        let rest = input.slice(1);
        helper(fc, rest, output, output.length - 1);
    }
    // abcd
    // fc = a, rest = bcd
    // output[0]= a, fc = ab, rest = cd
    // output[1]= ab, fc = abc, rest = d
    // output[2]= abc, fc = abcd, rest = ""

    function helper(fc, rest, output, index) {
        if (rest.length == 0) {
            return output;
        };
        // a, ab, ac, ad, abc, acd, abcd
        // b, bc, bd

        output.push(fc);
        fc += rest[0];
        helper(fc, rest.slice(1), output, index);

    };

};



// Test Cases:
console.log();
console.log();
console.log();