# Given the root of a binary tree, collect a tree's nodes as if you were doing this:
# 1) Collect all the leaf nodes.
# 2) Remove all the leaf nodes.
# 3) Repeat until the tree is empty.

# input
#              1
#             /  \
#            2    3
#           / \
#          4   5
#

# output
# [[4,5,3], [2], [1]]

#  DFS vs BFS no diff

# step 1 check if parent has leaves 
# step 2 child is a leaf => store in response, prune parent of leaf
#        child is not a leaf => recurse on child


class Node:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

tree = Node(1, Node(2, Node(4, Node(6), Node(7)), Node(5, Node(8, Node(9), Node(10)))), Node(3))
#              1
#             /  \
#            2    3
#           / \
#          4   5
#         / \   \
#        6   7   8
#               / \
#              9  10

# root.value = 1
# root.left.value = 2
# root.right.value = 3


def isLeaf(node):
    if not node or node.left or node.right:
        return False
    return True

def prune(root, leaves):
    if root is None:
        return leaves

    if isLeaf(root.left):
        leaves.append(root.left.value)
        root.left = None
    else:
        prune(root.left, leaves)

    if isLeaf(root.right):
        leaves.append(root.right.value)
        root.right = None
    else:
        prune(root.right, leaves)
        
    return leaves

def destroyTree(root):
    leaf_nodes = []
    while root is not None:
        if isLeaf(root):
            leaf_nodes.append([root.value])
            root = None
        else:
            leaf_nodes.append(prune(root, []))
    
    return leaf_nodes

# assert destroyTree(tree) == [[4,5,3], [2], [1]]

tree2 = Node(1, Node(2))

assert destroyTree(tree2) == [[2], [1]]

assert destroyTree(tree) == [[6,7,9,10,3], [4,8], [5], [2], [1]]