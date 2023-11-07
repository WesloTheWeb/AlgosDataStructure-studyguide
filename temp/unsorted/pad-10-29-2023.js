/*
❓ PROMPT
Given M sorted arrays, find the Kth smallest number among all the arrays.

Example(s)
Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
Output: 4
Explanation: The 5th smallest index among all the arrays is 4, this can be verified from 
the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Input: L1=[5, 8, 9], L2=[1, 7], K=3
Output: 7
Explanation: The 3rd smallest number among all the arrays is 7. [1,5,7,8,9]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function kthSmallest(lists, k) {
def kthSmallest(lists: list[list[int]], k: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

console.log('string is: abcabcbb')

function lengthOfLongestSubstring(s) {
  let start = 0;           
  let maxLength = 0;        
  let charMap = new Map();  

  for (let end = 0; end < s.length; end++) {
      console.log(`\nChecking character '${s[end]}' at index ${end}`);
      
      if (charMap.has(s[end]) && charMap.get(s[end]) >= start) {
          console.log(`Character '${s[end]}' previously seen at index ${charMap.get(s[end])} and previous start is ${start}`);
          start = charMap.get(s[end]) + 1;
          console.log(`Updated start to ${start}`);
      }

      charMap.set(s[end], end);
      console.log(`Updated last seen of ${s[end]} to index ${end}`);

      maxLength = Math.max(maxLength, end - start + 1);
      console.log(`Current maxLength: ${maxLength}`);
  }

  console.log(`\nFinal maxLength: ${maxLength}`);
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));


/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


/*
TODO: Review this in full detail later...
Question #2: 
Given two nodes on a tree try and find the first ancestor they have in common. Nodes have pointers to their parent 
and their children.

      A
    /   \`
   B     C
  / \   / \
 D   E F   G   
/         /
H        I

findings
- node can be thier common acestor
- return node

findCommonAncestor(node1, node2, parentNode) 

- search left tree and search right tree recursively and passing the two input nodes given
- case where found on separate subtrees, return root
- if on same side of the subtree return the parent

- use helper (node1, node2)

direct parent, parent.next 
*/

// * SOLUTION via CHatGPT
function solutionFindDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.parent;
    }
    return depth;
}

function findCommonAncestor(node1, node2) {
    let depth1 = solutionFindDepth(node1);
    let depth2 = solutionFindDepth(node2);

    // If node1 is deeper, swap the nodes.
    if (depth1 > depth2) {
        [node1, node2] = [node2, node1];
        [depth1, depth2] = [depth2, depth1];
    }

    // Move node2 up until both nodes are at the same depth.
    for (let i = 0; i < depth2 - depth1; i++) {
        node2 = node2.parent;
    }

    // Now, move both nodes up in tandem.
    while (node1 !== node2) {
        node1 = node1.parent;
        node2 = node2.parent;
    }

    return node1;
}


// TODO: Check this later:

function assignAlgorithms (fellows) {
  const n = fellows.length;
  const result = Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
      if (fellows[i] > fellows[i - 1]) {
          result[i] = result[i - 1] + 1;
      } else if (fellows[i] === fellows[i - 1]) {
          result[i] = result[i - 1];
      }
  }

  for (let i = n - 2; i >= 0; i--) {
      if (fellows[i] > fellows[i + 1] && result[i] <= result[i + 1]) {
          result[i] = result[i + 1] + 1;
      } else if (fellows[i] === fellows[i + 1] && result[i] < result[i + 1]) {
          result[i] = result[i + 1];
      }
  }

  return result;
}

// function assignAlgorithms(fellows) {
//   const output = new Array(fellows.length).fill(1)

//   if (fellows.length === 0)
//     return null;

//   if (fellows.length === 1)
//     return output;

//   // iterate through
//   for (let i = 1; i < fellows.length; i++) {
//     if (fellows[i] > fellows[i - 1]) {
//       output[i] = output[i - 1] + 1
//     }
//   }

//   for (let i = fellows.length - 2; i >= 0; i--) {
//     if (fellows[i] > fellows[i + 1]) {
//       output[i] = Math.max(output[i], output[i + 1] + 1)
//     }
//   }

//   return output
// }

console.log(assignAlgorithms([10,20,60,70,50,10,20]).toString() == "1,2,3,4,2,1,2")
console.log(assignAlgorithms([]) == null || assignAlgorithms([]).toString() == "")
console.log(assignAlgorithms([100]).toString() == "1")
console.log(assignAlgorithms([11,22]).toString() == "1,2")
console.log(assignAlgorithms([22,11]).toString() == "2,1")
console.log(assignAlgorithms([20,20]).toString() == "1,1")
console.log(assignAlgorithms([20,20,5]).toString() == "2,2,1")
console.log(assignAlgorithms([5,20,20]).toString() == "1,2,2")
console.log(assignAlgorithms([19,29,39]).toString() == "1,2,3")
console.log(assignAlgorithms([37,27,17]).toString() == "3,2,1")
console.log(assignAlgorithms([10,20,100,70,100,10,20]).toString() == "1,2,3,1,2,1,2")
console.log(assignAlgorithms([32,22,12,22,32]).toString() == "3,2,1,2,3")
console.log(assignAlgorithms([15,25,35,25,15]).toString() == "1,2,3,2,1")
console.log(assignAlgorithms([15,10,25,25,25,10,15]).toString() == "2,1,2,2,2,1,2")
