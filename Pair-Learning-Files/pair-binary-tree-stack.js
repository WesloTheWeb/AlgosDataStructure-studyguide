

/* 
Your previous Python 3 content is preserved below:

def say_hello():
    print('Hello, World')

for i in range(5):
    say_hello()

'''
Q. Given a binary tree, count the number of elements with odd values in the tree.
Q. Given a binary tree, count the number of elements with negative values in the tree.
*Q. Given a binary tree, return the the maximum sum of nodes from the root to any leaf.
Q. Given a binary tree, count the numbers of unique elements in the tree.
Q. Given a binary tree, count the number of leaf nodes.
Q. Given a binary search tree, return the value of the violating node. 
When there is a violation, return the lowest node. If there is no violating node, return -1.


'''


     5
   /   \
  3      7
 / \    / \
1   2  10 9

// 5 odd numbers

read: [5, 3]


X % 2 == 1 // X is odd
count += 1;

queue [, 7]
queue2 [1, 2, 10, 9]

stack.add(1)
stack.add(4)
stack.add(5)
stack.add(7)

7
5
4
1

stack.pop() // 7
stack.pop() // 5
stack.pop() // 4
stack.pop() // 1

queue.add(1)
queue.add(4)
queue.add(5)
queue.add(7)

1 4 5 7

queue.pop() // 1
queue.pop() // 4
queue.pop() // 5
queue.pop() // 7

     5*
   /   \
  3      7
 / \    / \
1   2  10 9

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

/*
def arrayifyTree(root: TreeNode):
    if root is None:
        return []
    queue = []
    array = []
    queue.append(root)
    while (len(queue) != 0):
        node = queue.pop(0)
        array.append(node.value)
        if (node.left):
            queue.append(node.left)
        if (node.right):
            queue.append(node.right)
    return array
*/

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

/*
stack.add(1)
stack.add(4)
stack.add(5)
stack.add(7)
 
7
5
4
1
 
stack.pop() // 7
stack.pop() // 5
stack.pop() // 4
stack.pop() // 1
 
     5*
   /   \
  -3     -7
 / \    / \
1   2  -10  9
 
*/


function solution(root) {
    const stack = root ? [root] : [];
    let count = 0;

    if (!stack) {
        return 0;
    }

    /*
    in 1 iteration, you want to:
    1. get the first item off the queue
    2. "process" it
    3. add left child to the back of queue, if exists
    4. do same as 3. to the right.
    
    print every node
    
    */
    // stack = [TreeNode(7), TreeNode(3)]
    while (stack.length > 0) {
        const curr = stack.pop();
        // curr =  TreeNode(7)  stack = [TreeNode(3)]

        console.log(curr.value); // print 7

        if (curr.left !== null) {
            stack.push(curr.left)

        }
        // stack = [TreeNode(10),TreeNode(3)]

        if (curr.right !== null) {
            stack.push(curr.right)

        }
        // stack = [TreeNode(9), TreeNode(-10), TreeNode(2), TreeNode(1), TreeNode(9), TreeNode(10), TreeNode(3)]

    }

}

const tree1 = new TreeNode(5,
    new TreeNode(-3,
        new TreeNode(1), new TreeNode(2)),
    new TreeNode(-7,
        new TreeNode(-10), new TreeNode(9)));


console.log(solution(tree1));
