# Patterns Documentation
This folder is a place of common patterns found as well as explanations. This will be in JavaScript.
This doc will attempt to summarize each but has folders for specific cases. To see individual pattern:
`cd Algorithms/patterns` and `node` a specific pattern.

# Hashmap or Dictionary approach
Problems where you will need to keep track or a tally of elements are best done with a hashmap. Some of the common problems
include:

### Example problems:
- Group Anagrams
- Repeated Number of Elements in an Array


## Group Anagram
Given a list of strings, return a list of string lists that groups all anagrams together. Two strings are anagrams if rearranging one string results in another. For the purpose of this question, a string is an anagram of itself.

Each group of anagrams should be in alphabetical order. The output should be in alphabetical order by the first elements of each group of anagrams.

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
