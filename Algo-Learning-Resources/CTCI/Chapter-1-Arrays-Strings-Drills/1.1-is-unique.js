/*
Name: Is Unique?
Problem: Implement an algorithm to determine if a string has all unique characters.

Follow-up: What if you cannot use additional data structures?

EXAMPLES
Input: 'Hello World'
Output: False

Input: 'Pen'
Output: true

Input: ' '
Output: false

Context Questions: 
1.) Do we mean unique characters as in only used once? No duplicates?
2.) Empty input will return false?
3.) Are we counting non-alphanumeric characters? Such as spaces, semicolons etc.?
4.) Are numbers considered characters in here?
5.) Are we dealing with capitalization?

APPROACH:
1.) Hashmap implementation
Time: O(1) look up
Space: O(n) n is size of array
--> We iterate through the string and add to our hashmap. As iterating through the string we add each character to the hashmap and if a character is already in the hashmap, we return false. If we finish iterating and every character appears only once, we can conclude that every character in the string is unique.

2.) Stack implementation
NOTE: Review stacks, may or may not be possible.


Pseducode for approach 1:
1. Create an empty hashmap.
2. sanitize the string to be lowercase.
3. iterate over the sanitized string, adding to hashmap each character.
4. if we encounter a character already in hashmap return early.
5. else if we continue and finish iterating return true.
*/

function determineUnique(str) {
  const map = new Map();

  const newStr = sanitizeString(str);

  for (let char of newStr) {
    if (map.has(char)) {
      return false;
    } else {
      map.set(char, 1);
    };
  };

  return true;
};

// Helper Function
const sanitizeString = (str) => {
  return str.toLowerCase();
};

// TEST CASES
const example1 = 'Hello World';
const example2 = 'Pen';

console.log(determineUnique(example1)); // false
console.log(determineUnique(example2)); // true

// ? Here is the Approach to the Follow up and worth noting to use it:
/* NOTES:
- Here we create an array of false and this is 
n this approach, we will use a boolean array to keep track of which characters we have seen. This array will be of size 
128 (assuming we're working with ASCII), as there are 128 unique ASCII characters. 

Each index of this array corresponds to an ASCII value. We set the value at an index to true 
when we see that character (after converting it to its ASCII value).

The following steps can be used for this approach:

1. Sanitize the string to be lowercase (same as before).
2. Initialize a boolean array of 128 elements to false.
3. Iterate over each character in the string, convert it to its ASCII value, and check if the \
value at that index in the boolean array is true. If it is, we return false, 
because that character is repeated in the string.
4. If the value at that index is false, we set it to true and continue to the next character.
5. If no repeated characters are found, we return true.
*/

function followUpDetermineUnique(str) {
  const newStr = sanitizeString(str);
  const checker = new Array(128).fill(false);

  for (let i = 0; i < newStr.length; i++) {
    let asciiValue = newStr.charCodeAt(i);
    if (checker[asciiValue]) {
      return false;
    }
    checker[asciiValue] = true;
  };

  return true;
};

console.log('Follow up solution:' + ' ' + followUpDetermineUnique(example1)); // false
console.log('Follow up solution:' + ' ' + followUpDetermineUnique(example2)); // true