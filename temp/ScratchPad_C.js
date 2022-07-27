function solution(root) {
    const queue = root ? [root] : [];
    let results = [];

    while (queue.length) {

        results.push(root.val);
        if (root.left) queue.push(root.left);
        if (root.right) queue.push(root.right);

    };

    return results;
};