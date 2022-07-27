// const allTreePaths = (root) => {
//     const recordedPaths = [];
//     //base case:
//     if (!root) return null;

//     const pathTraversal = (root) => {
//         let writingPath = [];

//         // record path
//         if (root.val) {
//             writingPath.push(root.val);
//         };

//         if (root.left === null && root.right === null) {
//             recordedPaths.push(writingPath);
//         }

//         // recursive case:
//         pathTraversal(root.left);
//         pathTraversal(root.right);
//     };

//     return recordedPaths;
// };