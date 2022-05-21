/*##############
PROBLEM: Remove Duplicates
Q. Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

Input: [0, 0, 1, 1, 1, 2, 2].

Your function should modify the list in place so the first 3 elements becomes 0, 1, 2.
*/

function removeDuplicates(arr) {
    let slow = 0;
    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1;
}

/*#####################
EXPLANATION
If we could use extra memory, we can easily solve this by going through the list once and using a hashset to record elements we have seen.
 But we are not allowed extra memory so we have to look at the conditions and see if there's anything we could use. An important condition is that the numbers 
 are sorted, which means the same numbers are next to each other. 
 
 This means as we go through the list, once we see a number A, we will see all occurrences of A together, and will not see A again after we see B. 
 Using this key observation, we can devise a fast/slow pointer solution.

Time Complexity: O(n)

We simply traverse the array once moving from left to right.
####################*/

/*#################
-=SAME DIRECTION=-
####################
PROBLEM: Remove Duplicates
Q. Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. 
Do this in-place using constant auxiliary space.

Input: [1, 0, 2, 0, 0, 7]
Output: [1, 2, 7, 0, 0, 0]
*/

function moveZeros(nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        // If fast pointer is on a non-zero swap, otherwise keep going.
        if (nums[fast] != 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        };
    };
};

function twoSumSorted(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        const two_sum = arr[l] + arr[r];
        if (two_sum === target) {
            return [l, r];
        }
        if (two_sum < target) {
            l++;
        } else {
            r--;
        };
    };
};

/*
PROBLEM: Longest Substring without Repeating Characters
Q. Find the length of the longest substring of a given string without repeating characters.

Input: abccabcabcc
Output: 3

Explanation: longest substrings are abc, cab, both of length 3

Input: aaaabaaa
Output: 2

Explanation: ab is the longest substring, length 2
*/

function longestSubStringWithoutRepeatingCharacters(s) {
    const n = s.length;
    let l = r = 0; // two pointers
    const window = new Set();
    let longest = 0;

    while (r < n) {
        // if character is not encountered yet, move r pointer to right. While loop keeps going until reach end
        if (!window.has(s.charAt(r))) {
            window.add(s.charAt(r));
            r++;
        } else {
            // If duplicate exist we move l pointer at beginning to right
            window.delete(s.charAt(l));
            l++;
        };
        longest = Math.max(longest, r - l);
        // we compare what we have for longest, to r minus l and return biggest subsequent substring.
    };

    return longest;
};

/*####################
-=OPPOSITE DIRECTION=-
######################
PROBLEM: Remove Duplicates
Q. Given an array of integers sorted in ascending order, find two numbers that add up to a given target. 
Return the indices of the two numbers in ascending order. You can assume elements in the array are unique and 
there is only one solution. Do this in O(n) time and with constant auxiliary space.

Input: [2 3 4 5 8 11 18], 8
Output: 1 3
#################*/

function twoSumSorted(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        const two_sum = arr[l] + arr[r];
        if (two_sum === target) {
            return [l, r];
        }
        if (two_sum < target) {
            l++;
        } else {
            r--;
        };
    };
};

/*###########################################################################################
Q. Determine whether a string is a palindrome, ignoring non-alphanumeric characters and case. 
Examples:

Input: Do geese see God? Output: True
Input: Was it a car or a cat I saw? Output: True
Input: A brown fox jumping over Output: False
##############################################################################################*/

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !isAlphaNumeric(s.charAt(l))) {  // Note 1, 2
            l++;
        }
        while (l < r && !isAlphaNumeric(s.charAt(r))) {
            r--;
        }
        if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {  // ignore case
            return false;
        }
        l++;
        r--;
    };

    return true;
};

// regEx
const isAlphaNumeric = c => {
    /^[a-zA-Z0-9]*$/.test(c);
}