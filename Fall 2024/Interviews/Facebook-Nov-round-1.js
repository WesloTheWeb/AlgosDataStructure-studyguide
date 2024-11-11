// TODO: Break these down and edge cases.
/*
# Write a function that returns true if a given string is a palindrome (a 
# palindrome is a string that is the same when reversed, if you ignore
# punctuation and capitalization).  Some examples of palindromes are:
#   "Race car!"
#   "A man, a plan, a canal, Panama!"

isLetter(char): boolean

let punctions = "!,."
  includes()

  charAt()

tacocat
    ^
   ^

  Race car!
  ^
          ^
*/

// Your previous Plain Text content is preserved below:

// Welcome to Meta!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the left bar.

// Enjoy your interview!

function isPalindrome(str) {
    // null case
    let newStr = str.toUpperCase();
    if (!str) return true;
  
  
    let left = 0;
    let right = str.length - 1;
  
    while (left <= right) {
      // return false if mismatch
      //  r      !
      //   ^     ^
      if (newStr.charAt('!')) {
        right -= 1;
      }
      if (newStr[left] !== newStr[right]) return false;
  
      // increment left and decrement right
      left += 1;
      right -= 1;
    };
  
    return true;
  }
  
  
  
  
  
  /*
  # Given a string representing an arithmetic expression with only addition and 
  # multiplication operators, return the result of the calculation.
  # For example, for "2*3+4", return 10
  
  Example
  "2*5+2" = 12
  "2*2" = 4
  "5+5" = 10
  "5+0" = 5
  "5*2+7+3*3" = 26
  "10*2+3" = 23
  
  only additions (+)s and only multiplication (*).
  
  - expect positive numbers
  - convert sum or product to integer
  
  
  "2*5+2" = 12
   ^
     ^
  
  "10*2+3" = 23
   ^
      ^
  APPROACH
  1. iterate over the string
   
  if come across * we multiply the next element
  if come across + we add the next element
  multiplication takes priority
  
  2. right pointer goes until hits operator / delimiter.
  
  3. store our running sum or running product
  4. convert result string into integer
  
  time: O(n) n is length of the string
  space: O(1) constant
  
  "10 * 2 + 3" = 23
   ^
        ^
  
  
  */
  
  function arithmeticExp(str) {
    // pointers
    let left = 0;
    let right = left + 1;
  
    let runningTotal;
    let number;
    let operation;
  
    for (let i = 0; i < str.length; i++) {
      if (str[right] !== "*" || str[right] !== "+") {
        right++;
      };
  
      // range from left to right
      for (let i = left; i < right; i++) {
        let number += str[i]  
      };
  
      operation = str[right];
      right++;
  
      // type of operation
      if (operation === "*") {
        number = number * str[right];
      };
  
      if (operation === "+") {
        number = number + str[right];
      };
  
      left = right + 1;
    };
  
  };