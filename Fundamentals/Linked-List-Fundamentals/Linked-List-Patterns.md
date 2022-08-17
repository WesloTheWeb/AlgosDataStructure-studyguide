# Patterns Documentation
This folder is a place of common patterns found as well as explanations. This will be in JavaScript.
This doc will attempt to summarize each but has folders for specific cases. To see individual pattern:
`cd Algorithms/patterns` and `node` a specific pattern.

# Table of Contents
1. [Traversing](#Traversing)
2. [Adding a Node](#addNode)
3. [Deleting a Node](#deleteNode)

NOTE: Do this later but grab from Notion

# Traversing <a id="Traversing"></a>
Traversing a Linked List can do it iteratively or recursively. Iterative is pretty straight forward with a `while loop` while
include:

### Example problems:
- Group Anagrams
- Repeated Number of Elements in an Array


## Group Anagram
Given a list of strings, return a list of string lists that groups all anagrams together. Two strings are anagrams if rearranging one string results in another. For the purpose of this question, a string is an anagram of itself.

Each group of anagrams should be in alphabetical order. The output should be in alphabetical order by the first elements of each group of anagrams.

### **Solution 1**
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

### **Solution 2**
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

# Adding a Node <a id="addNode"></a>

Since "two pointers" is kind of a broad topic, there is no singular way to implement it. Depending on the questions you encounter, you need to implement the answer differently. Generally speaking, a two pointer algorithm has these characteristics:

1. Two moving pointers, regardless of directions, moving dependently or independently;
2. A function that utilizes the entries pointing at the two pointers that relates to the answer in a way;
3. An easy way of deciding which pointer to move;
4. Optionally a way to process the array when the pointers are moved.

Also problems where you would want to either check the beginning annd end of an array, check against two arrays. A great
alternative to using double for loops that typically improves your time & space complexity.

Two pointers are helpful because it often offers a more efficient solution than the naive solution. From the examples above, if we use the naive solution and use two loops to iterate through the array, the **time complexity** is often `O(n^2)`, which is often not enough. If we use two pointers for this type of problem, we are often only passing through the array once with the two pointers, which means that the **time complexity** is often `O(n)`.

### Example problems:
- Two Sum
- Binary Search

## Same Direction Problems
These questions have two pointers that move in the same direction.

### Example problems:
- Remove Duplicate
- Sliding Windows

### How it Works:
The moving condition of the two pointer is that:
- if the previous check match, only the fast pointer moves.
- Otherwise, the slow pointer moves, perform the process of setting the value at the slow pointer to the value at the fast pointer, and then the fast pointer moves.

Problem: Longest substring without repeating characters
```
const longestSubstringWithoutRepeatingCharacters = (s) => {
  const n = s.length // length of longestSubString
  let longest = 0; // longest pointer we will return our answer (range of substrings)
  let l = r = 0; 
  const window = new Set();

  while ( r < n) {
    if (!window.has(s.charAt(r))) {
      window.add(s.charAt(r));
      r++;
    } else {
      window.delete(s.charAt(l));
      l++
    }
    // here we get the "range" of substrings. Look more into math.max()
    longest = Math.max(longest, r - l);
  };

  return longest;
}
```

## Notes & Breakdown
This makes it a classic sliding window problem. A sliding window is defined by two pointers. We move the window (incrementing pointers) whilst maintaining a certain invariant. For this particular problem, the invariant is the characters inside the window being unique. We use a set to record what's in the window. And when we encounter a character that's already in the window, we want to move the left pointer until it goes past the last occurrence of that character.


