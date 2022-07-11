// Add this to Tree fundamental pattern. in this file

var levelOrder = function (root) {
    if (!root) return []

    let result = []
    let q = [root]


    while (q.length > 0) {
        let currLvl = []
        let nextLvl = []

        q.forEach((node) => {
            currLvl.push(node.val)
            if (node.left) nextLvl.push(node.left)
            if (node.right) nextLvl.push(node.right)
        })

        q = nextLvl
        result.push(currLvl)
    }

    return result
};
