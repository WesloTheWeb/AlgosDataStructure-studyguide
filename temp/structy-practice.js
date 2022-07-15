// DFS - Iterative

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
/*
APPROACH:
- Use DFS to pathfind especially from root to furthest
- write visited path into array
- if not in the tree return null
visited array [path-to-target]
PSEUDO CODE:
1. Create variables stack, result array
2. while loop runs that will add to the stack and pop
3. record track visited node
4. have checks only push if target value found
*/
const pathFinder = (root, target) => {
    // const stack = root ? [root] : []
    // const resPath = [];
    // const currentPath = [];

    // while (stack.length) {
    //     const current = stack.pop();

    //     currentPath.push(current.val);
    //     if (current.left) currentPath.push(current.left);
    //     if (current.right) currentPath.push(current.right);

    //     if (currentPath.includes(target)) {
    //         resPath = [...currentPath];
    //     } else {
    //         return null;
    //     }

    //     return resPath;
    // };

    // base case
    if (!root) return [];

    const result = [];

    const path(root, )
};


const pathFinderRecursive = (root, target) => {
    const currentPath = [];

    if (!root) return null;
    if (root.val === target) return [root.val];


    // const DFS = (root, target) => {

    //     if (!root) return null;
    //     if (root.val === target) return [root.val];


    //     const leftPath = pathFinderRecursive(root.left, target);
    //     const right = pathFinderRecursive(root.right, target);

    //    if (leftPath !== null) {
    //     return [root.val + ...leftPath]; 
    //    };

    //    if (rightPath !== null) {
    //     return [root.val + ...rightPath];
    //    }
    // };



    const leftPath = pathFinderRecursive(root.left, target);
    const right = pathFinderRecursive(root.right, target);

    if (leftPath !== null) {
        return [root.val + ...leftPath];
    };

    if (rightPath !== null) {
        return [root.val + ...rightPath];
    };

    return null;

};