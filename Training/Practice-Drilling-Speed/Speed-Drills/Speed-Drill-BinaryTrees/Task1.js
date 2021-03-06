/* 
Q. Given a binary tree, count the number of nodes that are equal to a given target.

Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
*/

function solution(root, target) {
    const queue = root ? [root] : [];
    let count = 0;
    
    while (queue.length) {
        const node = queue.shift();
        
        if (target === node.value) {
            count += 1;        
        };      
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    };
    
    return count;
};

// OLD SOLUTION:
// function solution(root, target) {   
//     const stack = root ? [root] : [];
//     let count = 0;
    
//     while (stack.length) {
//         const node = stack.shift();
//         count += 1;
        
//         if (count === target) {
//             return count;
//         } else {
//             return 0;
//         };
//     }; 
    
//     return count;
// };
