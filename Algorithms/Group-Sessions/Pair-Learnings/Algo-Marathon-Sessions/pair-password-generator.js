/* Office Hour - Algo Marathon
Date: July 14th
PARTNERS: Gibson

QUESTION:
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between the minimum and maximum lengths (inclusive).

This algorithm by it's nature requires a lot of both time and space. You should be able to get this to either time or run out of memory even on small-ish input sizes

Examples:

 generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
  "aaab",
  "aaac",
  "aab",
  "aaba",
  "aabb",
  "aabc",
  "aac",
  "aaca",
  "aacb",
  "aacc",
  "ab",
  ...
  "ac",
  ...
  "ba",
  ...
  "bb",
  ...
  "bc",
  ...
  "ca",
  ...
  "cb",
  ...
  "cc",
  ...
]

Function Signature: 
def generatePasswords(chars: List[str], minLength: int, maxLength: int) -> List[str]
Target runtime and space complexity:
 O(L^maxLength), where L is the length of the list

APPROACH:
// Recursive problem
// combination problem

      2 to 4
      a    prefix = 2, 4
     a
    a
   a

        abc min 2 , max 4

        3 3 3 27 N^(number of char)
        _ _ _ 
        _ 
      a
    a              i
   b            [a, b ,c]

/*

get all subsequences


abc
subsequences: a, b, c, ab, ac, bc, abc


              exhuastive search     true backtracking
permuation

combination/subset                      subset                          

         []
    []            [a]
  []    [b]    [a]       [ab]
[] [c]           [ac]  [ab]   [abc]


//base Cases
  if (prefix.length === min || max) append to reuslt
    return 

// recursive case
  //choice a char
    let choice = set[i]
  //explore
    explore(set, prefix + choice)
  //unchose
    -we dont do this


PSEUDO CODE:
  if (prefix.length === min || prefix.length === max) {
    result.push(prefix)
  }
  else {
    for loop i < set.length i++
      char = set[i]
    
      explore(prefix+char)
  }



Time Complexity:

Space Complexity:
#########################################*/
//O(h) max length of password

// Our attempt:




// Test Cases:



// Solution: 

function generatePasswords(list, min, max) {
    let set = new Set()
    const result = [];
    genHelper('')
    console.log(set)
  
    function genHelper(prefix) {
      if (prefix.length >= min && prefix.length <= max) {
        if (!set.has(prefix)) {
          set.add(prefix)
          result.push(prefix)
        }
      }
      if (prefix.length === max) return
  
      for (let i = 0; i < list.length; i++) {
        const letter = list[i]
        genHelper(prefix + letter)
      };
    };
    
    return result;
  }
  
  let res = generatePasswords(['a', 'b', 'c'], 2, 4)
  
  console.log(res.includes('bac')) // true
  console.log(res.includes('a'))   //false
  console.log(res.includes('bc'))   //true
  console.log(res.includes('cccc'))  //true
  console.log(res.includes('ccdc'))  //false
  
  // Solution Test Cases:
  
  // Here's our explanation of the solution:
  // Each recursive step adds one character at a time; save the password when it's between the right lengths.
  
  function generatePasswords(validCharacters, minLength, maxLength) {
    const passwords = [];
    const letters = [];
  
    function recursiveHelper() {
      if (letters.length >= minLength && letters.length <= maxLength) {
        passwords.push(letters.join(''));
      }
      if (letters.length === maxLength) return;
  
      for (let i = 0; i < validCharacters.length; i++) { //O(n^L, L is of charchters)
        //choose
        letters.push(validCharacters[i]);
        //explore
        recursiveHelper();
        //unchoose
        letters.pop();
      }
    }
  
    recursiveHelper();
  
    return passwords;
  }
  Test Cases:
  Start with the examples, then test different length ranges.You probably don't want to test too passing long lists of characters since the output will grow VERY fast. Even this three character example needs to be truncated here.