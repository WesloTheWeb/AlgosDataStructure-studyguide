// TODO: Look at this later from session. Binary Search but emphasis on high level approach:
/*
Given a binary search tree and a target value, return the in -order successor.

//     5
//  2     8
// 1 4   6 9

=========================================
1. Explore
- Understand the problem by asking clarifying questions and clearing up ambiguities
- Convert the abstract into the concrete using examples
- Categorize the examples and make insightful & revealing test scenarios
=========================================
===Discoveries===
 In-order successor = next value in in-order traversal starting from target value
- in order: left root right
- The Tree is a Binary search Tree
- Use the above property instead of inorder traversal.

===Happy Cases===


===Edge Cases===
- tree with a single node:
- Node has no successor - Return Null
- if the target in not in the tree: return Null
===Bad Cases (can be same as edge cases)===

=========================================
2. Brainstorm
- Discuss possible algorithms
- Focus on problem-solving instead of implementation
- Discuss the space and time complexities of the solution(s)
=========================================
===Option(s)===

1. Do in-order traversal and save nodes in an array
    next pass find the target value and return the next node if there is one else None
t: O(n)

//     5
//  2     8
// 1 4   6 9

examples when successor is above target
1, 4, 6
leaf nodes

examples when successor is below target
2, 5, 8

//      5
//   2        8
// 1  4     6   9
//0 2 3 4  5 7 8 10

//     5
//  2     8
// 1 4   6  9


binary search tree: left < root < right

target 5, succ: 6



2. Binary search to find the target
    Check current node's left and right value for the target
        if left child is the target
            return current node
        if right child is the target:
            if that node has no children:
                if its a left node:
                    return parent
                else:
                    return parent.parent
            else:
                go right
                go left as much as you can

    ** idea: if right child is the target: (8)
                if target has children:
                    return target.right
t:
binary search to find target is: O(lg n)
find successor: O(lg n)


=========================================
3. Plan
- Agree on a solution to execute
- Avoid thought gaps by documenting a concrete outline, the level of detail is up to you
- The more detail, the easier the implementation becomes

As an engineer, you should determine when you're getting diminishing returns from
spending too much time in the Plan stage and move onto the Implement stage.
This balance is different for each person and each problem.
=========================================
===Outline===

Initialize a current node to the root
Initialize a successor node to null

Perform a binary search for the target value while the current node exists
  If the current node's value < target value
    Update the current node to be its right child
  Otherwise, if the current node's value > target value
    Track this node as a possible successor (in the stack or a single variable)
    Update the current node to be its left child
  Otherwise, if the current node's value == target value
    Complete the search

If the current node does not exist, the target value is not in the tree.
Depending on the discussion, the successor is either null, or the successor was the most recent ancestor larger than the target value

If the current node has the right child, set the current node to it
  While the current node's left child exists
    Update the current node to be its left child
  The current node is the successor
Otherwise, the successor was the most recent ancestor larger than the target value

=================================================
4. Implement
- Focus on implementation instead of problem-solving
- Refer back to your outline as needed
- Rely on your hours of coding practice
=================================================
*/
// simple iterative (SI)
function inOrderSuccessorSI(root, target) {
  let successor = null
  let curr = root

  while (curr) {
    if (curr.val < target)
      curr = curr.right
    else if (curr.val > target) {
      successor = curr
      curr = curr.left
    } else // curr.val === target
      break
  }

  if (!curr)
    return successor

  if (curr.right) {
    curr = curr.right
    while (curr.left)
      curr = curr.left
    return curr
  }

  return successor
}

// ! simple recursive (SR)
function inOrderSuccessorSR(root, target, successor=null) {
  if (!root)
    return successor

  if (root.val < target)
    return inOrderSuccessorSR(root.right, target, successor)
  else if (root.val > target)
    return inOrderSuccessorSR(root.left, target, root)
  else { // root.val === target
    if (root.right) {
      root = root.right
      while (root.left)
        root = root.left
      return root
    }
  }

  return successor
}

// ! concise iterative (CI)
function inOrderSuccessorCI(root, target) {
  let successor = null
  let curr = root

  while (curr) {
    if (curr.val <= target)
      curr = curr.right
    else if (curr.val > target) {
      successor = curr
      curr = curr.left
    }
  }

  return successor
}

// ! concise recursive (CR)
function inOrderSuccessorCR(root, target, successor=null) {
  if (!root)
    return successor

  if (root.val <= target)
    return inOrderSuccessorCR(root.right, target, successor)
  else if (root.val > target)
    return inOrderSuccessorCR(root.left, target, root)
}


