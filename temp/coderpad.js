// TODo: Group me

/*
'''
Given an array of integers, return an array representing the longest increasing subsequence.

EXAMPLE(S)
[1, 2, 3] => [1, 2, 3]
[5, 1, 4, 2, 3] => [1, 2, 3]
[] => []?
[5, 4, 3, 2, 1] => []
[1] => []

 
sliding window?
[5, 1, 4, 2, 3]

naive approach
lol sort()
[5, 1, 4, 2, 3]
[1, 2, 3, 4, 5] == will give increasing order longest and sub if its sorted
O(n log n)

using of a stack

= []
[5, 0, 4, 2, 3, 1]

             

FUNCTION SIGNATURE
function longestIncreasingSubSequenceLength(sequence: [Int]) -> Int:
'''
*/

function longestIncreasingSubSequenceLength(sequence) {
    const stack = []; // curr increasing subarrayh
    let longest = [];
  
    for (let num of sequence) {
      if (!stack.length) {
        stack.push(num);
      } else {
        while (num < stack[stack.length - 1]) stack.pop();
        
        stack.push(num);
      }
  
      if (longest.length < stack.length && stack.length > 1) longest = [...stack];
    }
  
    return longest;
  }
  
  
  const lengthOfLIS = (sequence) => {
    // Keep track of LITS at each index of input
    const lengths = Array(sequence.length).fill(1);
  
    // Iterate through array with two pointers, find LIS for each index of input
    for (let i = 0; i < sequence.length; i++) {
      for (let j = 0; j < i; j++) {
        if (sequence[j] < sequence[i]) {
          lengths[i] = Math.max(lengths[i], lengths[j] + 1);
        }
      }
    }
  
    // Return max of LIS array
    return Math.max(...lengths);
  };
  
  console.table([
    {
      output: JSON.stringify(longestIncreasingSubSequenceLength([5, 0, 4, 2, 3, 0])),
      expected: JSON.stringify([0, 2, 3]),
    },
    {
      output: JSON.stringify(longestIncreasingSubSequenceLength([1, 2, 3])),
      expected: JSON.stringify([1, 2, 3]),
    },
    {
      output: JSON.stringify(longestIncreasingSubSequenceLength([5, 4, 3, 2, 1])),
      expected: JSON.stringify([]),
    },
  ])
  
  