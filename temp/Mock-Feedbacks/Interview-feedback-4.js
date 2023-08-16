// ! actual mock
/*
Aug. 16th, 2023
Question: 
The Facebook company store sells stickers that say the word “facebook” on them. We just got a new shipment in, and we have way more than we know what to do with. We came up with a plan: we can make posters by cutting and pasting the letters in the word "facebook" to make other words. 
Given a particular source string representing a word on a sticker, write a function that tells me how many stickers of that string I need in order to make a given target string. Your function should take in both a source string and target string, and return the number of stickers.

Examples
source == "facebook", target == "fee": return 2 stickers
source == "facebook", target == "coffee kebab": return 3 stickers
source == "facebook", target == "cat" would not be a case

- we can expect all letters will exist in our target
- do not need to use all the letters.
- consider lowercase for now

APPROACH #1: Naive / Bruteforce
iterating over target, 
creating a hashmap
record each letter frequency

(we know "facebook" has a set number of specific characters and frequencies)
- we can count the letters in our target and compare to the chars "facebook" and that will determine 
(i.e "facebook" target = "face"   f = 1 a =1 c = 1 e = 1  )
compare frequencies of target and facebook.
*/

const source = "facebook"

// O()
function faceBookStickers(source, target) {
    const numberOfStickers = 0;
    // hashmaps frequencies
    const facebookMap = new Map();
    const targetMap = new Map();

    // facebook count 0(n)
    for (let char of source) {
        if (facebookMap.has(char)) {
            facebookMap.set(char, facebookMap.get(char) + 1);
        } else {
            facebookMap.set(char, 1);
        };
    };

    // target count o(m)
    for (let char of target) {
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) + 1);
        } else {
            targetMap.set(char, 1);
        };
    };

    // compare one map with the other O(m) 
    for (let [key, frequency] of targetMap.entries()) {
        let limiting = frequency / facebookMap.get(key); // o: 2, limiting: 3

        // Get the current number of sticker needed
        limiting = frequency % facebookMap.get(key) != 0 ? limiting + 1 : limiting;
        if (numberOfStickers < limiting) {
            numberOfStickers = limiting;
        }
        // if (frequency > limiting) { // key: 'o'
        //   numberOfStickers++;
        // };

        // // comparing frequencies
        // if (key === facebookMap.get(key) ) {
        //   // determine if need additional stickers
        //   if (frequency > facebookMap.get(key)) {
        //     numberOfStickers++ * facebookMap.get(value)
        //   }; 
        // };
    };

    return numberOfStickers;
};

// target: ffff

// target: ooooo (5)


/*
// source == "facebook", target == "fee": return 2 stickers

f: 1          f: 4
a: 1
c: 1
e: 1
b: 1
o: 2          o: 5
k: 1

check target
 f   f
 e   e
     e
 numberOfStickers++
 */

// !! Feedback
/*
Pros:
- clarifiying questions
- edge cases
- exploration

Cons:
- Don't make assumptions always ask questions (I should not have initialized stickers to 1)
- Really get used to hashmap manipulations particularly iterating through .entries() and destructuring.
speed issue
- When debugging, don't think too much about the code right away break it down logically THEN code. AKA avoid quickfixes.

Suggestions:
- Don't spend too much time on approach
- Mention approach and move on to algo (Saves time)
- Keep in mind you cannot use the 'Run'
- Get used to running code through comments step by step
- Break up and identify blocks of for loops and code with time complexity.

Remember about the interviewer:
- They are more interested in algorithm, efficiency and how think about the problem
- Be sure to validate with interviewer work with them, see this as a collaborative exercise.
- Finally it is NOT a memorization game, moreso it is how we think about the problem.
*/