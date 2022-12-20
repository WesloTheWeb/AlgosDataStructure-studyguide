function findLevelAverages(root) {
    const queue = root ? [root] : [];
    const values = [];

    while (queue.length) {
        let len = queue.length;
        values.push(getAverage(queue));

        while (len--) {
            const cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        };
    };

    return values;
};

const getAverage = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.val, 0) / arr.length;
};

// tree problem
const allTreePaths = (root) => {
    // base cases
    if (!root) return [];
    if (root.left === null && root.right === null) return [[root.val]]; // just return the node value.

    const paths = []

    // recursive cases:
    const leftSubPaths = allTreePaths(root.left);
    //    [
    //     [b, d],
    //     [b, e]
    //    ]
    for (subpath of leftSubPaths) {
        paths.push([root.val, ...subpath]); // iterates to add the root val to the paths
    };

    const rightSubPaths = allTreePaths(root.right);
    // [
    //     [c, f]
    // ] 
    for (subpath of rightSubPaths) {
        paths.push([root.val, ...subpath]); // iterates to add the root val to the paths
    };

    return paths;
};
// Tree Diagram
/*
        a
       /  \
      b    c
     / \    \
    d   e    f
*/