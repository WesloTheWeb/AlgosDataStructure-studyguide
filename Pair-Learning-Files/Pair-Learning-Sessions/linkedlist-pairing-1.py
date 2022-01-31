# ###########################################
#  Paired with Jiyoon on 1/21/2022
#  Covered validating BST and LinkedLists.
#  Below is the raw coderpad.
 ###########################################
 # sum two linked lists (of equal lengths)
 # 
 # 3 7 10 None
 #        c1
 # 
 # 4 2 9
 #        c2
 # 
 # 7 9 19
 # 
 # function sumTwoLinkedLists(l1, l2)
 # {/ #   let res = []
 #   
 #   while (l1.next != null)
 #   {
 #     res.push(l1.value + l2.value)
 #     l1 = l1.next
 #     l2 = l2.next
 #   }
 #   
 #   return res
# } 
# 

class ListNode:
    def __init__(self, x):
        self.value = x
        self.next = None
        

class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right
        
'''
fibocacci

  n: 0 1 2 3 4 5 6
res: 0 1 1 2 3 5 8

fib(4) => 2 + 1
   fib(3) => 1 + 1
      fib(2) => 1 + 0
         fib(1) -> 1
         fib(0) -> 0
      fib(1) -> 1
   fib(2) => 1 + 0
         fib(1) -> 1
         fib(0) -> 0
   
'''
def fib(n):
    if n <= 1:
        return n
    
    return fib(n - 1) + fib(n - 2)

#print(fib(6))
    
'''
Q. Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 5

ct(1)
   ct(7)
       ct(4)
          ct(None)
          ct(None)
       ct(5)
          ct(None)
          ct(None)
   ct(3)
      ct(None)
      ct(None)
      
base: curr_node is None, then return 0

recursion: 1+ ct(left) + ct(right)

'''
def countTree(root: TreeNode) -> int:
    if root == None:
        return 0
    
    return 1 + countTree(root.left) + countTree(root.right)

# Test Cases
#print(countTree(None), 0)
#print(countTree(TreeNode(1, TreeNode(2), TreeNode(3))), 3)
#print(countTree(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9))))), 6)
#print(countTree(TreeNode()), 1)

'''
Find the first element that is repeated k times in an array

1 5 1 1 4, k = 3, ret 1

'''

def repeatedK(k, arr):
    dict = {}
    
    for i in arr:
        if i in dict.keys():
            dict[i] = dict[i] +1
        else:
            dict[i] = 1    

    for key in dict: 
        if dict[key] == k:
            return key

    return -1

# print(repeatedK(3, [1,5,1,1,4]), 1)

'''
problems to work on:

1. validate a binary tree is a BST

isNotBST: 
      2
    29  14
   6   12 20
           29

isBST:
   -inf inf
      10
      
-inf 10 10 inf
    9    14

-inf 9 10 14 
   6    12   20
               29
               
               
fn(14, 10, -inf)
    fn(12, 10
             
recursively

start with -inf / +inf as range

'''
isNotBST = TreeNode(2,
             TreeNode(29, 
                      TreeNode(6)),
             TreeNode(14,
                      TreeNode(12),
                      TreeNode(20,
                               None, 
                               TreeNode(29))))


isBST = TreeNode(10,
             TreeNode(9, TreeNode(26)),
             TreeNode(4,
                      None,
                      TreeNode(2,
                               TreeNode(9))))


def validate(root: TreeNode, min, max) -> bool:
    
    if root == None:
        return True
    
    if root.value > max or root.value < min:
        return False
    
    leftResult = validate(root.left, min, root.value)
    rightResult = validate(root.right, root.value, max)
    
    return leftResult and rightResult

print(validate(isNotBST, float('-inf'), float('inf') ), False)
#print(validate(isBST, float('-inf'), float('inf')), True)