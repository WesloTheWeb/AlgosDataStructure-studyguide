/*
TODO: Review problem and solution when get a chance. Some syntaxc errors
TYPE: Array
DATE: March 3rd, 2023

QUESTION:
Given a dictionary (represented by an array of string) and a word, return an array containing all words 
that can be created by adding one letter to the word.

EXAMPLE(S)
dictionary: `["CAT", "CART", "ACTS", "BAT"]`
word: `"CAT"`
would return `["ACTS", "CART"]`

Because these words can be formed with the letters "C", "A", "T", and exactly one more letter.
- word return needs to be one character longer than the query word.
- needs all letters from query word at least.
- possible to have duplicate letters.
- List of valid words constrained to the dictionary.

word1 = CAT  => ACT
word2 = CART => ACRT

# APPROACH 1
Establish pointer to word1 and word2
Have a pass opportunity available for word2
Iterate through each letter of word1 and word2:
  If current letter of both pointers match then we continue
  If letters don't match then:
    check if pass opportunity is used
    if used then return false
    if not used then use pass and increment word two pointer

word2 = ACTS => ACTS

# APPROACH 2
wordMap (CAT) = A: 1
                C: 1
                T: 1

targetWordMap(CART) = A: 1
                      C: 1
                      R: 1
                      B: 1
            CATT
            CARB

if a character in wordMap doesn't exist in targetWordMap, break (not a valid answer)
if it does exist, update the freq in targetWordMap

FUNCTION SIGNATURE
def possibleWords(dictionary, word):
*/

// Python Code:
// from collections import Counter
// def get_all_words_created_by_adding_one_letter(word_list, word):
//   word_map = Counter(word)
//   for target_word in word_list:
//     if len(target_word) != len(word) + 1:
//       continue
//     target_word_map = Counter(target_word)
//     for character, freq in word_map.items(): #compare freq between both maps
//       if character not in target_word_map:
//         continue
//       target_word_map[character] -= freq
//       if target_word_map[character] < 0:
//         continue
//       if target_word_map[character] == 0:
//         target_word_map.pop(character)
//     if len(target_word_map) == 1 and target_word_map.values()[0] == 1:
//       result.add(target_word)

//   JavaScript Code:
function Counter(word) {
    const newStr = word.split('');
    let wordMap = new Map();

    // iterate over newStr (array) 
    for (let letter of newStr) {
        let c = 0;
        if (wordMap.get(letter)) {
            c = wordMap.get(letter) + 1;
        } else {
            c = 1;
        };
        wordMap.set(letter, c);
    };

    return wordMap;
};

function getAlllWordsCreatedByAddingOneLetter(word_list, word) {
    const word_map = Counter(word)
    const result = [];

    /*
     
    CAT
    ACTS
    
    word_map:
    {
      A: 1
      C: 1
      T: 1
    }
  
    target_word_map:
    {
      A: 1
      C: 1
      T: 1
      S: 1
    }
  
    freq: 1
     */

    for (const target_word of word_list) {
        let target_word_map = Counter(target_word)
        // console.log(target_word_map)
        for (let character in Object.keys(word_map)) {
            console.log(character)
            let freq = word_map[character];
            if (target_word_map.indexOf(character) == -1) {
                continue;
            }
            const x = target_word_map.get(character) - freq;
            if (x < 0) {
                continue;
            }
            console.log(`x = ${x}`)
            target_word_map.set(x);
            if (target_word_map.get(character) == 0) {
                delete target_word_map[character];
            }
        }
        if (target_word_map.size == 1 && target_word_map.values()[0] == 1) {
            result.add(target_word);
        }
    }
    return result;
};

const word_list = ["CAT", "CART", "ACTS", "BAT"];
let target_word = "CAT";

console.log(getAlllWordsCreatedByAddingOneLetter(word_list, target_word));

// CHAT GPT assist:

// function modified(word_list, word) {
//     const word_map = Counter(word)
//     const result = new Set(); // Use Set instead of Array to avoid duplicates
  
//     for (const target_word of word_list) {
//       let target_word_map = Counter(target_word)
  
//       for (let character of word_map.keys()) { // Use `of` instead of `in` to iterate over keys
//         let freq = word_map.get(character);
//         if (!target_word_map.has(character)) { // Use `has` instead of `indexOf`
//           continue;
//         }
//         const x = target_word_map.get(character) - freq;
//         if (x < 0) {
//           continue;
//         }
//         target_word_map.set(character, x); // Set the new value for the character
//         if (target_word_map.get(character) == 0) {
//           target_word_map.delete(character); // Use `delete` instead of `[]`
//         }
//       }
  
//       if (target_word_map.size == 1 && target_word_map.values().next().value == 1) {
//         result.add(target_word);
//       }
//     }
//     return Array.from(result); // Convert Set to Array for output
//   }
  
//   const word_list = ["CAT", "CART", "ACTS", "BAT"];
//   let target_word = "CAT";
  
//   console.log(modified(word_list, target_word));
  
/*
The changes I made are:
1. Use Set instead of an Array for result to avoid duplicates.
2. Use of instead of in to iterate over keys in the for loop.
3. Use has instead of indexOf to check if the character is in the target word map.
4. Set the new value for the character using set.
5. Use delete instead of [] to delete the character from the target word map.
6. Use Array.from to convert the Set to an Array for output.
*/