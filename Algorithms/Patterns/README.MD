# Patterns Documentation
This folder is a place of common patterns found as well as explanations. This will be in JavaScript.
This doc will attempt to summarize each but has folders for specific cases. To see individual pattern:
`cd Algorithms/patterns` and `node` a specific pattern.

Table of Contents
### PATTERN: Hashmap or Dictionary
### PATTERN: Two Pointers
 
# Table of Contents
1. [Hashmap or Dictonary](#Hashmap)
2. [Two Pointers](#TwoPointers)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)


# Hashmap or Dictionary <a id="Hashmap"></a>
Problems where you will need to keep track or a tally of elements are best done with a hashmap. Some of the common problems
include:

### Example problems:
- Group Anagrams
- Repeated Number of Elements in an Array


## Group Anagram
Given a list of strings, return a list of string lists that groups all anagrams together. Two strings are anagrams if rearranging one string results in another. For the purpose of this question, a string is an anagram of itself.

Each group of anagrams should be in alphabetical order. The output should be in alphabetical order by the first elements of each group of anagrams.

### Solution 1
- This use the `Map` function from JavaScript:
``` 
function groupAnagrams(strs) {
    const anagram_map = new Map();

    for (const entry of strs) {
        const anagram_id = Array.from(entry).sort().join('');
        if (anagram_map.has(anagram_id)) {
            anagram_map.get(anagram_id).push(entry);
        }
        else {
            anagram_map.set(anagram_id, [entry]);
        };
    };
    return Array.from(anagram_map.values());
};
 ```
 ## Notes & Breakdowns
For this problem, consider what happens when two strings are anagrams: if we sort them both by character, then they will result in the same string. When two strings are not anagrams, then this value will always be different.

In that case, we can use a hashmap to store the information, with the key being the "`anagram ID`" (the sorted value of the string), and the entry being a list of strings with the same anagram IDs. Everything under the same ID must be anagrams, while everything outside of it are not.

It has a time complexity of `O(n * mlog(m))`, where n is the number of strings and m is the max size of each string.

### Solution 2
 - Another alternative that does the same thing as the above example is writing like this:
 1. `Hashmap dictionary` approach, if its sorted, have a key, add to counter.
 2. if its an anagram, create sub-array.
 3. return array of sub array of anagrams as we iterate through strs.

 ```
 function groupAnagrams(strs) {
    let anagramCount = {};
    for (let str of strs) {
        let sortedKey = str.split('').sort().join(''); // sorts the letters of input to be key

        // here we create a key if not existing, if is existing we push it to subarray:
        (!anagramCount[sortedKey]) ? anagramCount[sortedKey] = [str] : anagramCount[sortedKey].push(str);
    };

    return Object.values(anagramCount);
};
```
## Notes & Breakdowns
The part where you do `sortedKey` and then ...`anagramCount[sortedKey]` is possible and works because we turn the key into a string. 
An example is this:
```
let anagramCount = {
    'aet': ['eat', 'tea', 'ate'],
    two: 'owo'
  };
  
  console.log(anagramCount['aet']) // eat, tea, ate
  console.log(anagramCount[two]) // invalid key
  ```

# Two Pointers <a id="TwoPointers"></a>

Problems where you would want to either check the beginning annd end of an array, check against two arrays. A great
alternative to using double for loops that typically improves your time & space complexity.

### Example problems:
- Two Sum
- Binary Search