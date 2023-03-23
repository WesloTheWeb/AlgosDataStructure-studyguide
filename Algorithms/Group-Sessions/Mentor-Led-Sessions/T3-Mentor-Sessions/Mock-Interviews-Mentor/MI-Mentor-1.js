/**
QUESTION:
Implement a function that serializes a special type of JSON obj into the following format.

Example 1:
# input
{
  "a": 0,
  "b": [1, 2, 3],
  "c": {
      "d": 4,
      "e": 5
  },
  "g": [{"h": 6}, {"h": 7}]
}

# output
[
  ['a', 0],
  ['b', 1],
  ['b', 2],
  ['b', 3],
  ['c.d', 4],
  ['c.e', 5],
  ['g.h', 6],
  ['g.h', 7],
]


  "a": 0,
  "b": [1, 2, 3],
  "c": {
      "d": 4,
      "e": 5
  },
  "g": [{"h": 6}, {"h": 7}]

a    a
b   / \
c   b   c
BFS


          {}
a     b       c       g
0   1 2 3   d  e.  [0] [1]
        4    5.     h.  h
                    6.  7

        
- assume input always a valid object 
- output array of arrays, tuples of data with key and value 
  - if object, uses dot notation and then the value.
- Each key-value is a tuple
- For our value, we know if its a value if its a leaf node, (no children on left & right)

  APPROACHES
  Approach #1: 
    - iterating over the object and pushing the tuple into a result array
    for in loop ?

  Approach #2:
    - Think of it as a tree. Not a binary tree but DFS.
    - We would need to treat the value as leaf nodes.
    - Need a way to add to our recursive stack but it is not a tree so cannot do left or right.

  PSEUDO CODE - recursively
  1. create our results array 
  2. create helper function
    - need way to iterate through our input object key and values.
    - write for in loop of our key, push to subpath array
      - use the length of the subpath array?
      problem: iterating nested object in the value
 */


function serializesJSON(root) {
  const results = [];

  function dfs(node, path) {
    if (typeof node === 'number') { // condition to reach leaf of tree
      results.push([path.join('.'), node]);
    } else if (Array.isArray(node)) {
      node.forEach(ele => dfs(ele, path))
    } else if (typeof node === 'object') {
      for (const key in node) {
        // path.push(key);
        dfs(node[key], [...path, key]);
        // path.pop();
      };
    } else {
      throw new Error('Unknown node type');
    };
  };

  dfs(root, []);
  return results;
};


console.log(serializesJSON({
  "a": 0,
  "b": [1, 2, 3],
  "c": {
    "d": 4,
    "e": 5
  },
  "g": [{ "h": 6 }, { "h": 7 }]
}));

/* TAKE AWAYS:
1. JSON treat like a tree
2. use dfs to traverse
  a. identify base case
  b. how do I keep track of the traversed path
3. this "tree" has different types of nodes
*/