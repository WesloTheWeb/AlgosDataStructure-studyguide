/*
Q. Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.

In-order traversal:

Traverse the left subtree.
Visit the root.
Traverse the right subtree.
Example:

Given a binary tree:
           1
          / \
         2   3
// returns [2, 1, 3]
*/

//
// Binary trees are already defined with this interface:
function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}

// ATTEMPT: 0/0
function solution(root) {
    const stack = root ? [root] : [];
    const res = [];

    while (stack.length) {
        const node = stack.pop();

        res.push(stack.value);
        if (stack.left) stack.push(stack.left);
        if (stack.right) stack.push(stack.right);
    };

    return res;
};

/* TEST 1
Input:
    root:
    {
        "value": 1,
        "left": null,
        "right": null
    }
Output:
    [null]
Expected Output:
    [1]

TEST 2
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
                "value": 3,
                "left": null,
                "right": null
            }
        }
Output:
    [null]
Expected Output:
    [2, 1, 3]


TEST 3
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
                "left": null,
                "right": null
            }
        }
Output:
    [null]
Expected Output:
    [4, 2, 5, 1, 3]

TEST 4
Input:
    root:
    {
        "value": 1,
        "left": {
            "value": 2,
            "left": {
                "value": 4,
                "left": {
                    "value": 8,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 9,
                    "left": null,
                    "right": null
                }
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
    [null]
Expected Output:
    [8, 4, 9, 2, 5, 1, 6, 3, 7]


*/
