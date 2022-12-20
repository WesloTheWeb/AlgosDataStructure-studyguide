'''
/*
The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result.

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.

Examples
Possible commands = ['000', '1110', '01', '001', '110', '11']
Input -> Output
'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']

autocomplete(input: String) → List[String]

- check the characters of the input and iterate through the array if it has the 
matching characters or if we can .filter?

for loop
if input === commands[i][0] newArray.push(commands[i])

class Predictor {

  List<String> possibleCommands;

  Predictor(List<String> pComm){
    this.possibleCommands = pComm;
  }

  public List<String> autocomplete(String input);
}

*/
['000', '1110', '01', '001', '110', '11']

'00'

function autocomplete(input, pCommands) {
  let resCommands = [];

  for (let i = 0; i < pCommands.length; i++) {
    let eq = true;
    for (let j = 0; j < input.length; j++) {
      if (pCommands[i].length < input.length || input[j] !== pCommands[i][j]) {
        eq = false;
        break;
      }
    }
    // compare the first len(input) chars of pCommands[i] to input
    // if it matches, add pCommands[i] to resCommands
    if (eq === true) {
      resCommands.push(pCommands[i])
    }

  };

  return resCommands;
};

/*
    ['000', '1110', '01', '001', '110', '11']
    ['000', '1110', '01', '001', '110']


           0        1
          /  \       \
         0    1(*)     1(*)
        /  \          /  \
       0(*) 1(*)     0(*) 1
                          /
                         0(*)
*/
'''

class Node:
  def init(self, isCommand, children):
# isCommand is use to mark the end of a valid command
self.isCommand = isCommand
self.children = children

class Solution:
  
  def build(self, commands):
    trie = Node(False, {})
    for command in commands:
      current = trie
      for char in command:
        if not char in current.children:
          current.children[char] = Node(False, {})
        current = current.children[char]
      current.isCommand = True
    self.trie = trie
  
  def autocomplete(self, command):
    current = self.trie
    for char in command:
      if not char in current.children:
        return []
      current = current.children[char]
commands = []
self.dfs(current, command, commands)
return commands

  
def dfs(self, node, prefix, commands): if node.isCommand: commands.append(prefix) for char in node.children: self.dfs(node.children[char], prefix + char, commands)
s = Solution()
s.build(['000', '1110', '01', '001', '110', '11'])
print(s.autocomplete('00'))
['000', '001']