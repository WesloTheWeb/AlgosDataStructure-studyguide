'''

Questions
How to improve understanding of backtracking/recursion problems? Looking for some insights into how to better think about backtracking problems such as: subsets, permutations, and combinations in order to be able to better approach them with ease. What do you believe are the best foundations to help with such problems to really work on if we still struggle with these types of problem?



Serialize and Deserialize N-ary Tree

Given a linked list, remove the center node. If the length of the list is even, remove the first of the two center nodes.

For example, given this list:
1 -> 2 -> 3 -> 4

Return:
1 -> 3 -> 4


'''

# Given an integer array nums of unique elements, return all possible subsets (the power set).
# The solution set must not contain duplicate subsets. Return the solution in any order.
def subsets(self, nums: list[int]) -> list[list[int]]:
  subsequences = []
  
  def getAllSubsequences(word, accum=[], i=0):
    if i == len(word):
      subsequences.append(accum)
      return

  # loop through X to Y
    # append to an array
    # call recrusively with updated array 
    # remove the appended thing from array

  getAllSubsequences(nums, [], 0)
  return subsequences

# TOP
'''
getAllSubsequences([], index=0) # line 24
'''
# BOTTOM

subsequences = ["ABCD", "ABC", ]
"ABCD"

# https://excalidraw.com/#json=lcgWxZmTKkH8zXDEv42ky,d21mrow5pQylYOcYIBB3GQ



#      1
#   2     4   5   1  2
# 5  3       7
#      18     20
#
#
#

"1,2,4,5,3,X,7,X,X,X,18,X,20"
"1,2,4,5,1,2,5,3,X,X,X"

#serialize5AryTree(root)
#deseralize5AryTree(string)

'''
Given a linked list, remove the center node. If the length of the list is even, remove the first of the two center nodes.

For example, given this list:
X -> 1 -> 2 -> 3 -> 4 = count is 4 / 2 = 2 - 1
^.   ^
c
1 -> 3 -> 4


X -> 1 -> 2 -> 3 -> 4 -> 5 = count is 5 / 2 = 2
^.   ^.   ^
c

dummy = Node(-1000)
dummy.next = head
cur = dummy

while (count >= 0):
  cur = cur.next
  count = count - 1

cur.next = cur.next.next

Return:
1 -> 3 -> 4


Algorithm #1:
1. 1st pass get the length of the linked list (in count variable)
2. go half way (count//2 or floor(count/2)) (if even, subtract count by 1)
3. start another pointer that begins at dummy, going until count = 0
4. hop over the node by doing cur.next = cur.next.next

Algorithm #2:
1. Start with a fast pointer and slow pointer both at the head, have a prev ptr at the dummy
2. by the time fast ptr is not able to move, slow ptr will be at the node to remove, prev ptr will be at the node jsut before.
3. have prev pointer hop over the curr node: prev.next = prev.next.next
'''

# https://chat.formation.dev/default/pl/idq87o1qttfpm8dru84z9wh53h

# dummy
# 0 -> 2 -> X
# s
# answer should be 2
def solution(head):
  if not head:
      return head
  dummy = Node(0)
  dummy.next = head
  slow = dummy
  hare = head
  
  while hare.next and hare.next.next:
  # while(hare and hare.next):
      slow = slow.next
      hare = hare.next.next
      
  slow.next = slow.next.next
  return dummy.next