# 
# Your previous JavaScript content is preserved below:
# 
# /*
# You have been tasked with building an AB testing library. You are currently working on the logic to determine which group a user should be put in.
# 
# Assuming each user has a hash value and 0 <= hash < 1, bucket each user into groups according to the designated weights for each group.
# 
# javascript
# 
# getGroup(
#   hash,
#   [
#     { name: 'A', weight: 1 },
#     { name: 'B', weight: 1 }
#   ]
# )
# getGroup returns A if hash is between 0 and 0.5 and B if it is between 0.5 and 1
# 
# 
# getGroup(
#   hash,
#   [
#     { name: 'A', weight: 1 },
#     { name: 'B', weight: 0 }
#   ]
# )
# getGroup returns A for 100% of users.
# 
# getGroup(
#   hash,
#   [
#     { name: 'A', weight: 1 },
#     { name: 'B', weight: 1 },
#     { name: 'C', weight: 2 },
#   ]
# )
# getGroup returns A if hash is between 0-0.25, B if it's between 0.25-0.5, and C if it's between 0.5-1
# 
# Engineering Method:
# 1. Thoroughly understand the problem
# 2. Identify some possible solution(s)
# 3. Choose a solution
# 4. Build it
# 5. Test it 
# 
# -------
# Clarifying questions & edge cases:
# 
# Return value: just the name
# 
# Guaranteed to have at least one non-zero weight
# 
# Weights can be floats
# 
# Weights are all positive or 0
# 
# At least one entry with a non-zero weight
# 
# Inclusive or exclusive?
# - We "round down", so if there is a hash value in between two, we will go with the value at the top
# 
# 
# --------
# Potential solutions:
# 
# getGroup(
#   hash,
#   [
#     { name: 'A', weight: 1 },
#     { name: 'B', weight: 1 }
#   ]
# )
# 
# hash = 0.5
# 
# i    0  1
# n    A  B
# w    1  1
#      
#     0.5 1.0 
# 
# return A (A 'weight' = hash)
# 
# 
# getGroup(
#   hash,
#   [
#     { name: 'A', weight: 1 },
#     { name: 'B', weight: 1 },
#     { name: 'C', weight: 2 },
#   ]
# )
# 
# Sum of all weights: 4
# 
# Individual weights divided by sum:
# A -> 0.25 (1 / 4)
# B -> 0.5 (1 / 4)
# C -> 1 (2 / 4)
# 
# Hash value= 0.5
# 
# 
# 1. First find the sum of all the weights
# 
# 2. 
# {
# Divide the individual weights by the sum on the fly, and find cumulative sum
# 
# If hash value is greater than current cumulative sum, continue in loop
# If hash value is smaller or equal to current cumulative sum, break/return the name
# }
# 
# */

class Group:
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight

def getGroup(hashVal, groups):

    total_weight = 0
    cumulative_sum = 0
    # find sum of all weights
    # total_weight = 1
    # A's weight = 1
    # total_weight = 2
    # B's weight = 0.5
    for group in groups:
        total_weight += group.weight
        
    for group in groups:
        cumulative_sum += group.weight / total_weight
        if hashVal <= cumulative_sum:
            return group.name
    return None
'''  
hash = [0.1, 0.5, 0.7, 0.9, 1]
group = {....}

# A -> 0.25 (1 / 4)
# B -> 0.5 (1 / 4)
# C -> 1 (2 / 4)

Pre-compute another array with cumulative sums
Binary search in the pre-computed array
O(logn) time to find the group

return: [A, A, B, B, B]
'''
groups1 = [
    Group('A', 1),
    Group('B', 1)
]
print(getGroup(0.5, groups1), 'A')


groups2 = [
    Group('A', 1),
    Group('B', 1),
    Group('C', 2)
]
print(getGroup(0.4, groups2), 'B')

groups3 = [
    Group('A', 0.6),
    Group('B', 0)
]
print(getGroup(0.75, groups3), 'A')
print(getGroup(0, groups3), 'A')
print(getGroup(1, groups3), 'A')

print(getGroup(1, []), None)


