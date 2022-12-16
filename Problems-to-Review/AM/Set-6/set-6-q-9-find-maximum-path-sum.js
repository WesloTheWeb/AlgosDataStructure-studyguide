/*
Q. Given a non-empty binary tree, find the maximum path sum.

A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
Example:

Given a tree:
           1
          / \    
         2   3
        /     
      -1   
// returns 6 (1 + 2 + 3)
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// attempt
function solution(root) {
  // base cases
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.value;
  
  const maxPath = Math.max(solution(root.left), solution(root.right));
  return root.value + maxPath;
}

// Test Cases
/*
TEST 1
Input:
root:
{
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": -1,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": null,
        "right": null
    }
}
Output:
4
Expected Output:
6

TEST 2
Input:
root:
{
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 3,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": null,
            "right": null
        }
    }
}
Output:
11
Expected Output:
18

TEST 3 (passed)
Input:
root:
{
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": -4,
        "left": null,
        "right": null
    }
}
Output:
3
Expected Output:
3

TEST 4
Input:
root:
{
    "value": 1,
    "left": {
        "value": -5,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 5,
        "left": null,
        "right": null
    }
}
Output:
6
Expected Output:
7
*/