/*#############################################
Leet Code:  https://leetcode.com/problems/isomorphic-strings/  
TYPE: ARRAY / STRINGS

Q. Given two strings, determine if they are isomorphic. Two strings are "isomorphic" if each unique character from 
the first string can be replaced to match the second string, without changing the ordering of the characters.
Different characters must map to different characters, but a character can map to itself.

Time: O(n), where n is the size of the strings
##########################################*/

/* Approach 
- Isomorphic strings can only map to one character per character
- Must be equal lengths.
- We can use a hashmap for each letter string to char 
- Different characters must map to different characters, but a character can map to itself.
*/

function isIsomorphic(str1, str2) {
    const isoMap = new Map();
    const used = new Set();
    // null case
    if (str1.length !== str2.length) return false;
    // we want to iterate the same time index counters
    const n = str1.length; // check against one of the strings length since they need to be equal.
    for (let i = 0; i < n; i++) {
        // will hold character code at each part we iterate.
        const aChar = str1.charAt(i);
        const bChar = str2.charAt(i);

        if (isoMap.has(aChar)) {
            if (isoMap.get(aChar) != bChar) {
                return false;
            };
        } else {
            if (used.has(bChar)) {
                return false;
            };
            isoMap.set(aChar, bChar);
            used.add(bChar);
        };
    };

    return true;
};