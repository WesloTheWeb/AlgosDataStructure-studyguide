# Arrays and Strings
This section dealt more with hashmaps but have good drills. Here is a summary of things to keep in mind.

## 1.1 - Unique
This question naturally you would think hashmap. But the solution and follow up are interesting in it's own right. Pay attention to strings in terms of characters and ASCII values (128).
- One way to do this is a hashmap dictionary approach. If found the character then return early else add it in.
- The otherway is to think of the ASCII characters 128 characters with an array of boolean values.
- A very similar approach to [Group Anagram](https://leetcode.com/problems/group-anagrams/)