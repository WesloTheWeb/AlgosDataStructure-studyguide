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