var rightSideView = function (root) {
    const queue = root ? [root] : [];
    const rightSide = [];

    while (queue.length) { // as long as there is element in the queue
        const n = queue.length; // number of nodes in current level
        rightSide.push(queue[0].val) // only append the first node we encounter since it's the rightmost

        for (let i = 0; i < n; i++) {  // dequeue each node in the current level
            const node = queue.shift();
            // we add right children first so it'll pop out of the queue first
            for (child of [node.right, node.left]) {
                if (child) queue.push(child);
            };
        };
    };

    return rightSide;
};
