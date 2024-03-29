def reverseKGroup(head: ListNode, k: int) -> ListNode:        
        # Check if we need to reverse the group
        curr = head
        for _ in range(k):
            if not curr: return head
            curr = curr.next
                
                
        # Reverse the group (basic way to reverse linked list)
        prev = None
        curr = head
        for _ in range(k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
        
        # After reverse, we know that `head` is the tail of the group.
        # And `curr` is the next pointer in original linked list order
        head.next = reverseKGroup(curr, k)
        return prev