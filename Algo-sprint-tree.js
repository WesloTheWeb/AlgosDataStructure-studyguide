/* Finding the height of a tree

1. Find of tree using recursion(basic)
2. Find height of tree using BFS(queue)
3. Find height of tree using DFS(stack)

class Node:
List < Node > children;
    int val;

      3
    / | \
    4  5  6
    / //\\
    1 1234


JEREMY's EXAMPLE
Finding a Node that has a value in a tree

            3
       /    |     \
      4     5     6
      /  / / \ \
     1  1 2  3  4
        ^
        find(root, 1)

base case:
if null -> return null

recursive case:
for every child of root.children:
foundNode = helperMethod(child)
if foundNode != null -> return foundNode

1. Find of tree using recursion(basic)

CONTRACT

base case:
if null -> 0

recursive case:
maxHeight = 0
for every child of root.children:
height = heightOfTree(child)
if height > maxHeight:
    maxHeight = height
return maxHeight

function heightOfTree(root) {
      base case:
    if (!root) = 0;

  recursive case:
    let maxHeight = 0

    for every child of root.children:
    height = heightOfTree(child)
    if height > maxHeight:
        maxHeight = height
    let children = root.children; // Array<Node>
    for (let i = 0; i < root.children.length; i++) {
        let child = children[i];
        let height = heightOfTree(child) + 1;
        if height > maxHeight;
        maxHeight = height;
    }

    return maxHeight
    return maxHeight;
}

3
    / | \
4  5  6
    |
    1

1
    |
    2
    |
    3
    |
    3
    |
    3
    |
    3
    |
    3
    |
    3

Call Stack:
*/

// heightOfTree(3); maxHeight = 2
// Time: O(n)
// Space: O(n)


console.log(heightOfTree())

const heightOfTree = (root) => {
    if (!root) return -1;

    let maxChild = root;
    height = 0;

    while (maxChild) {
        height += 1;
        return heightOfTree(maxChild);
        //    return 1 + Math.max(heightOfTree(children))
        //    return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right))
    };
};