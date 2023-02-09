/*##################################################################################
TAG: Number of Duplicated Elements in an Array - 1m
#####################################################################################

QUESTION:
Given a binary tree and an integer K. Find the number of paths in the tree 
which have their sum equal to K.

A path may start from any node and end at any node in the downward direction.

Examples:
• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (duplicated elements: 3 and 1)
• Given an array: [1] // returns 0
*/

/* Algo Mock Interviews
Date: 
PARTNERS:



APPROACH:


PSEUDO CODE:


Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:




// Test Cases:



// Solution: 
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

function findCount(node, target) {
    let count = 0;

    function dfs(root, existing_possibilities) {
        if (root === null) {
            return null;
        }
        existing_possibilities = buildsPossibilities(root, existing_possibilities);
        for (const arr of existing_possibilities) {
            if (arr.reduce((a, b) => a + b) === target) {
                count++;
            }
        }
        dfs(root.left, existing_possibilities.map((x) => [...x]));
        dfs(root.right, existing_possibilities.map((x) => [...x]));
    }
    dfs(node, []);
    return count;
};

function buildsPossibilities(root, existing_possibilities) {
    for (const arr of existing_possibilities) {
        arr.push(root.val);
    }
    existing_possibilities.push([root.val]);
    return existing_possibilities;
}

const t1 = new Node(1, new Node(2), new Node(3));
console.log(findCount(t1, 5), 0);

const a = new Node(1);
const b = new Node(3);
const c = new Node(-1);
const d = new Node(2);
const e = new Node(1);
const f = new Node(4);
const g = new Node(5);
const h = new Node(1);
const i = new Node(1);
const j = new Node(2);
const k = new Node(6);

// Solution Test Cases:
const test1 = [[1]]
const test2 = [[1, 3], [3]]
const test3 = [[1, 3, 2], [3, 2], [2]]
const test4 = [1]
const test5 = [1, 3], [3]
const test6 = [1, 3, 2], [3, 2], [2]