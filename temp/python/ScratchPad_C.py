'''
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in 
the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, 
since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string. 

EXAMPLE(S)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
 

FUNCTION SIGNATURE
function getAllSubsequences(word) {
def getAllSubsequences(word: str) -> list[str]:

Planning 
1. curr [] keeps subsequence were building 
2. Have an index that keeps track of what were building to keep order 
3. Backtrack(curr, i)
    Base Case - Index >= len(input string)
    update the result ?
    return
update the result ? 
4. Iterate through string sequence 
    Add letter to curr sequence with index
    backtrack(curr, index + 1)
    curr.pop() 
    backtrack(curr, index + 1)
    
5. Init result as empty array 
6. Call backtrack([], 0)
7. Return result 
'''

def getAllSubsequences(word: str) -> list[str]:
    result = set()
    curr = []
    def backtrack(curr, i): 
        if i >= len(word): 
            return 
        curr.append(word[i])
        
        temp_string = "".join(curr[:]) 
        if temp_string not in result: 
            if temp_string != "":
                result.add(temp_string)
        backtrack(curr, i +1)

        curr.pop()
        
        temp_string = "".join(curr[:]) 
        if temp_string not in result:
            if temp_string != "":
                result.add(temp_string)
        backtrack(curr, i +1)
        return
    backtrack([], 0)
    # remove empty string from the set
    return list(result) 


print(getAllSubsequences("abc"))
print(getAllSubsequences(""))
print(getAllSubsequences("a"))
print(getAllSubsequences("abcdefghijklmn"))
## ["a", "b", "c", "ab", "ac", "bc", "abc"])


#  [a] [ab] [abc] [ab] [a] [b]

# index = 2 abc
# ab
# index = 5
# abd,abf 

'''
         i=0
    i=1           i=1
  i=2 i=2       i=2 i=2
i=3i=3 i=3i=3     ...

function getAllSubsequences(word) {
  const output = [];
  const stack = [];

  function permute(index) {
    if (index === word.length) {
      if (stack.length > 0) {
        output.push(stack.join(''));
      }
      return;
    }

    // without the character
    permute(index + 1);

    // with the character
    stack.push(word[index]);
    permute(index + 1);
    stack.pop();
  }

  permute(0);

  return output;
}
'''

def getAllSubsequences(word: str) -> list[str]:
  subsequences = []
  def getAllSubsequences(word, subseq, i):
    if i == len(word):
      if len(subseq) > 0:
        subsequences.append(subseq)
      return

    getAllSubsequences(word, subseq+word[i], i+1) # include the char
    getAllSubsequences(word, subseq, i+1) # omit the char

  getAllSubsequences(word, "", 0)
  return subsequences

# https://coda.io/d/Formation-Reference-Handbook_ddD_gKH7E1I/More-Backtracking_surFk#_lu1xw