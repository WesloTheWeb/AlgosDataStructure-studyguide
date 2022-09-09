class Node():
  def __init__(self, val):
self.val = val
self.next = None

def removeKAppearingNodes(head, k):
if not head.next:
return head

curr = head
prev = None

    # Use hashmap to track frequency per node
seen = {}

    # Iterate and adjust list in -place
while curr != None:
        # Check if already seen
alreadySeen = seen[curr.val]

        # If current already seen, check if meets threshold(k - 1)
if alreadySeen and alreadySeen >= k - 1:
            # Delete it
prev.next = curr.next
curr = curr.next
continue
        else if alreadySeen:
            # Increment it
seen[curr.val] += 1
        else:
            # Insantiate it
seen[curr.val] = 1

        # Move to next node
prev = curr
curr = curr.next

    # Return adjusted list by head node
return head