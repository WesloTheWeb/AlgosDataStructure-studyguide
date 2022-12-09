/* Algo Marathon
Date: December 8th, 2022
PARTNERS: Andrea R.

QUESTION:
Given a string of random words, figure out if each word cancels itself out.
For example, "what no no what" cancels itself out (and is balanced). For every word in this arrangement, there is a word that cancels it out, in order.

Example1: what no no what
=> true Cancels itself out.

Example2: what
=> false

'what what what what what what' => true
'what' => false
'what what what what what' => false
'what what no no yes yes' => true
'what no no what' => true
'' => false

- Any remainders would be false, we only want to return true if it all cancels out

APPROACH 1: Hash-map way
- hash map, track the occcurrences of the words
store each word as we go through the string
- split string into words, turn into an array.
- as we iterate through the array each element added to our hashmap.
each element will be a word.
- limit it to the array length.
- iterate through the hashmap key-values. If the values % == 0 (no remainder) return true, else return false.

APPROACH 2: STACK
- create a stack array
- split string into words, turn into an array.
- push the word into the stack
- if we come across the same word, pop off the word if it's already in the stack
- if the stack is empty then return true if it has contents return false

['what' 'no' 'what' 'no' 'what' 'no']


stack: what no

no
what

PSEUDO CODE:




Time Complexity:
Space Complexity:
#########################################*/

const what = 'what what what what what what'


// Our attempt:
function theLastWord(str) {
  let matchCount = 0;
  let generalCount = 0
  // creates our hashmap
  const occurrences = new Map();

  //turn string into array, iterate over array
  const newStr = str.split(' ');

  // constructs hashmap
  for (const el of newStr) {
    if (occurrences.has(el)) {
      let existingValue = occurrences.get(el);  // reads the hashmap
      let new_value = existingValue + 1; // adds 1 to the counter
      occurrences.set(el, new_value);
      matchCount++;
    } else {
      occurrences.set(el, 1);
    }
    generalCount++
  }
  console.log(matchCount)
  console.log(generalCount)
  // let sum
  // // iterate through hashmap with our completed data
  // for ( const [key, value] of Object.entries(occurrences)) {
  //   return value.reduce((acc, cV) => acc + cV) // total sum?
  // }
  // // sum of all values to a variable (count) and if its even return true

  if (matchCount % 2 !== 0) {
    return true;
  }

  return false;
}


// Test Cases:
const test1 = "what no no what"
const test2 = "what what what what what what" // => true
const test3 = 'what' // => false
const test4 = 'what what what what what no no' // false
const test5 = 'what what no no yes yes' // => true
const test6 = 'what no what no' // => true


console.log(theLastWord(test4))

theLastWord(test4) // what no no what | cancels each other out


// Solution: 
const theLastWord = (str) => {
  const stack = [];
  const sentence = str.split(" ");

  for (const word of sentence) {
    if (stack.length) {
      if (stack[stack.length - 1] !== word) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  return !stack.length;
};


// Solution Test Cases: