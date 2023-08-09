# simple iterative (SI)
def inOrderSuccessorSI(root: Node, target: int) -> Node:
    successor = None
    curr = root

    while curr:
        if curr.val < target:
            curr = curr.right
        elif curr.val > target:
            successor = curr
            curr = curr.left
        else:  # curr.val == target
            break

    if not curr:
        return successor

    if curr.right:
        curr = curr.right
        while curr.left:
            curr = curr.left
        return curr

    return successor

# simple recursive (SR)


def inOrderSuccessorSR(root: Node, target: int, successor=None) -> Node:
    if not root:
        return successor

    if root.val < target:
        return inOrderSuccessorSR(root.right, target, successor)
    elif root.val > target:
        return inOrderSuccessorSR(root.left, target, root)
    else:  # root.val == target
        if root.right:
            root = root.right
            while root.left:
                root = root.left
            return root

    return successor

# concise iterative (CI)


def inOrderSuccessorCI(root: Node, target: int) -> Node:
    successor = None
    curr = root

    while curr:
        if curr.val <= target:
            curr = curr.right
        elif curr.val > target:
            successor = curr
            curr = curr.left

    return successor

# concise recursive (CR)


def inOrderSuccessorCR(root: Node, target: int, successor=None) -> Node:
    if not root:
        return successor
    if root.val <= target:
        return inOrderSuccessorCR(root.right, target, successor)
    elif root.val > target:
        return inOrderSuccessorCR(root.left, target, root)
