/*
August 21st, 2023
- Check video for replay and notes.
##################
Question #1: 
Imagine an array that contains both integers and nested arrays, such as the following: [8, 4, [5, [9], 3], 6]. 
The depth sum is described as the weighted sum of each integer, weighted by their respective depths. 
In the example, 8's depth is 1, while 9's is 3.

Given such an array, calculate its depth sum.

For example:
Example 1
Input: [4, [5, 6]]
Output: 1 * 4 + 2 * 5 + 2 * 6 = 26

Example 2
Input: [8, 4, [5, [9], 3], 6]
Output: 1* 8 + 1 * 4 + 2 * 5 + 3 * 9 + 2 * 3 + 1 * 6 = 61


Findings:
- starting at 1 (array starts at 0) 1 as in depth
- depth determined by the layer within the array root layer is 1* each layer we go by is incremented by 2 and that we multiply


iterate through the array
- decide when we are  entering depth
- to determine subarray [][]

- counter each time go into depth, acts as multiplier within that level 

[8, 4, [5, [9], 3], 6]
        ^
4 elements, 3 ints, 1 subarray
arr[2[0]] = 5
counter: 1
add element * current counter value

determineArrayDepth(array)

// Input: [4, [5, 6]]
// Output: 1 * 4 + 2 * 5 + 2 * 6 = 26

 [4, [5, 6]]
      ^
 4, 
*/
// ATTEMPT:
function determineArrayDepth(arr) {
    let multiplier = 1;
    let sum = 0;

    depthMultiplier(arr, multiplier)

    return sum;

};

const depthMultiplier = (arr, depth) => {
    let results = 0;

    for (let num of arr) {
        results += num * depth
        if ()
  }

    return results;
};

// * SOLUTION CHAT GPT AND NOTES:
function solutionDepthSum(arr, depth = 1) {
    let sum = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {
            // If the element is an array, recursively compute the depth sum of the subarray
            sum += solutionDepthSum(element, depth + 1);
        } else {
            // If the element is a number, multiply it by the depth and add to the sum
            sum += element * depth;
        };
    };

    return sum;
}

// Test cases
let arr1 = [4, [5, 6]];
console.log(solutionDepthSum(arr1));  // 26

let arr2 = [8, 4, [5, [9], 3], 6];
console.log(solutionDepthSum(arr2));  // 61

// ! TAKE AWAYS:
/*
1. To identify array or data type all languages has some built in kit, in this case it was Array.isArray.
2. Recursively doing it to add sum

It seems you're on the right track. The problem can be solved using a recursive approach. 
You can iterate through the list and whenever you come across a number, you multiply it by the depth. 
When you come across a list, you recursively call the function to get the depth sum of that list and 
multiply the result by the depth.
*/

/*#######################
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

// * SOLUTION
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

// ! TAKE AWAYS
/*
The approach to find the lowest common ancestor of two nodes in a binary tree with parent pointers 
is relatively straightforward:

1. Calculate the depths of both nodes.
Align the two nodes so they are at the same depth by moving the deeper node up.
Traverse up through the tree with both nodes until they are the same, which is the lowest common ancestor.
Here's the detailed step-by-step algorithm:

2. Get the depth of each node: Traverse up from each node to the root, incrementing a counter for each step.
Calculate the difference in depth between the two nodes.
Align them at the same depth: Move the pointer of the deeper node up by the difference.
Move both pointers up in tandem until they meet, which is the lowest common ancestor.

This was a modifier with parent pointers, ironically was a bit more difficult to me than the traditional leetcode one.
*/