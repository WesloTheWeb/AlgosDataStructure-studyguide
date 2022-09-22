/*
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 
if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

*/

// leet code plain starter
var strStr2 = function(haystack, needle) {
    
};

// FORMATION WORK SESSION ATTEMPT
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    if (haystack.length < needle.length) return -1;


    let i = 0;
    let j = 0;

    while (i < haystack.length && j < needle.length) {

        if (haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else {
            i = (++i) - j;
            j = 0;
        }
    }
    if (j === needle.length) return i - j;

    return -1;
};

// Write test cases here