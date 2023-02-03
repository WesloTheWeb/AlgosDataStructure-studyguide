# // Given a binary tree and an integer K. Find the number of paths in the tree which have their sum equal to K.
# // A path may start from any node and end at any node in the downward direction.
import copy 

class Node():

    def __init__(self, val, left = None, right = None):
        self.val = val
        self.right = right
        self.left = left

def findCount(node, target):
    count = 0

    def dfs(root, existing_posibilities):
        #0(n) * 0(m) 
        nonlocal count
        if root is None:
            return None
        existing_possibilities = buildsPossiblities(root, existing_posibilities)
        print("existing poss",existing_possibilities)
        for arr in existing_possibilities:
            if sum(arr) == target:
                count += 1

        #build possiblities at the current root
        dfs(root.left, copy.deepcopy(existing_possibilities))
        dfs(root.right, copy.deepcopy(existing_possibilities))
        #counter
    dfs(node,[])
    return count

def buildsPossiblities(root,existing_possibilities):

    for arr in existing_possibilities:
        arr.append(root.val)
    existing_possibilities.append([root.val])
    return existing_possibilities

t1 = Node(1,Node(2),Node(3))
print(findCount(t1,5),0)

a = Node(1)
b = Node(3)
c = Node(-1)
d = Node(2)
e = Node(1)
f = Node(4)
g = Node(5)
h = Node(1)
i = Node(1)
j = Node(2)
k = Node(6)

# [[1]]

# [[1,3], [3]]

# [[1,3, 2], [3, 2], [2]]

# [1]
# [1, 3], [3]
# [1, 3, 2], [3, 2], [2]


# for item in stack:
#     if sum(item) == target: 
#         count+=1

# // Example 1:

# // Input:      
# // Tree = 
# //           1                               
# //         /   \                          
# //        2     3
# // K = 3
# // Output: 2
# // Explanation:
# // Path 1 : 1 + 2 = 3
# // Path 2 : only leaf node 3
# // Example 2:

# // Input: 
# // Tree = 
# //            1
# //         /     \
# //       3        -1
# //     /   \     /   \
# //    2     1   4     5                        
# //         /   / \     \                    
# //        1   1   2     6    
#   [1,-1,4,1] [1]
#   [4,1]
#   [4,2]

# // K = 5                    
# // Output: 8
# // Explanation:
# // The following paths sum to K.  
# // 3 2 
# // 3 1 1 
# // 1 3 1 
# // 4 1 
# // 1 -1 4 1 
# // -1 4 2 
# // 5 
# // 1 -1 5 
# // 
# [1]
# [1, 3], [3]
# [1, 3, 2], [3, 2], [2]

# /* return 0 if  path is not found */
# /* there are no unique values*/
# /* downward direction*/

# /* keeping track of paths values. */
# /*
# dfs(root.left)
# dfs(root.right)
# */
# left  value of left child
# right = value of right child 
# root +  left 
# root + right 

# /*
# root + left == k:
#   incrementCounter

#   keep track of total sum

# both paths are in consideration

# possible combinations

# */