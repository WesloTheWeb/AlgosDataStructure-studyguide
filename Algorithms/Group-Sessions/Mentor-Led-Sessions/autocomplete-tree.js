/*########################
July 1st 2022
TYPE: Binary Tree
Question:
The programming interface for a legacy motor controller accepts commands as binary strings of variable length. 
The console has a very primitive autocomplete feature: given an incomplete command, it will display possible commands 
that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', 
the interface should return '1010' as a possible autocomplete result.

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.

Examples
Possible commands = ['000', '1110', '01', '001', '110', '11']
Input -> Output
'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']


Possible Commands is M
Input String is N

Approach:
 Tree(Trie) Method 
  Possible Commands is M
  Input String is N



- Time Complexity:  
Runtime would be O(N) + O(M*N)
- Space Complexity:
Space would be O(M)

Pseudo Code:
  1. Build the tree with the list of possible commands by with generic root node with 0 going left and 1 going right.
  2. Traverse through the Tree with the Input String
  3. We return the node represeting a subtree of valid commands 
  4. We will then output the leaf node's values within the subtree.
Can do this either as an Tree (trie) or an array. We choose Tree.

########################*/

class Trie {

  constructor() {
    this.trie = new TrieNode();
  }

  insert(input) {
    let trie = this.trie;
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (!trie.children[char]) {
        trie.children[char] = new TrieNode(char);
      }
      trie = trie.children[char];
    }
    trie.end = true;
  };

  // search for commands given prefix
  prefix(prefix) {
    let trie = this.trie;
    for (let i = 0; i < prefix.length; i++) {
      const letter = prefix[i];
      if (trie.children[letter]) {
        trie = trie.children[letter];
      } else {
        return [];
      }
    }

    return outputTrie(trie, prefix)
  }

  outputTrie(trie, prefix = "") {
    const stack = [trie];
    const outputResult = []
    while (stack.length > 0) {
      let node = stack.pop();
      if (node.end) outputResult.push(`${prefix}${node.key}`);

      Object.keys(node.children).forEach(child => {
        stack.push(child);
      });
    }
    return outputResult;
  }
}

function getPrefix(node, prefix, command = "", result = []) {
  // base case
  // ["01"]
  // -> "010"
  if (prefix.length <= command.length && node.end) {
    result.push(command);
  }

  for (const key in node.children) {
    if (command.length >= prefix.length || key === prefix[command.length]) {
      getPrefix(node.children[key], prefix, command + key, result);
    } else {
      return;
    }
  }
}

class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }
}

function findCommands(input) {
  // loop though list of possible commands
  // check first character of each command and first character of input
  // if they are the Same
  // loop though each character of input
  // if input character !== command character
  // not a prefix
  // else command has input as prefix
  // push to result
}

