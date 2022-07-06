/*########################
July 5, 2022
TYPE: ARRAY
Question:
Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in 
the list and in s. For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, 
since b comes before d in the original string.

Given an input string, return all subsequences of the string.
No repeated characters.

Example:
"ab" => ["", "a", "ab", "b"]
sol("abcd")
sol("bcd")
sol("cd") => ["", "c", "d", "cd"]
sol("d") => ["", "d"]
sol("") => [""]

Approach:
"" => [""]
abcd
      a
  b   c   d
c  d  d
d

arr[0] arr.slice(1)

Time: O(2^n)
Space: O(2^n)

Pseudo Code:
    1. An array to store our results [""].
    2. Iterate through each letters.
    3. Iterate through our array defined above.
    4. Create new subsequencess and append/push.
    5. return the result.
########################*/

function getSubsequences(str1) {
    // An array to store our results [""]
    let subsequences = [""]
    // Iterate through each letters
    for (let i = 0; i < str1.length; i++) {
        // Iterate through our array defined above
        const currLength = subsequences.length;
        for (let curr = 0; curr < currLength; curr++) {
            // Create new subsequencess and append/push
            subsequences.push(subsequences[curr] + str1[i])
        };
    };
    // return the result
    return subsequences;
};


function getSubsequences2(str) {
    // 'abcd'
    // 'bcd'
    if (!str.length) {
        return [""];
    };

    const currLetter = str[0]; // "a"
    const restSubsequences = getSubsequences2(str.slice(1)); // [] 'bcd'
    const restLength = restSubsequences.length;
    for (let i = 0; i < restLength; i++) {
        restSubsequences.push(currLetter + restSubsequences[i]);
    }

    return restSubsequences;
    //return helper(str);
};

// Test Cases:
console.log(getSubsequences2("ab")); // ['', 'b', 'a', 'ab' ]
console.log(getSubsequences2("abc")); // ['', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc' ]