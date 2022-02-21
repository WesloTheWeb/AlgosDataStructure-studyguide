

"""

cache = 1, 2, 3
size = 4

cache.get(2): cache =  2, 1, 3
cache.add(4): cache 4, 2, 1, 3
cache.add(5): cache 5, 4, 2, 1   3 gets evicted
cache.get(2): cache 2, 5, 4, 1



  h ->  2 <-> 5 <-> 4 <-> 1  <- t
^



add: O(1)
get: O(1)
delete: O(1)


---------------------------------^
"""


from typing import Dict, Optional, List



class Node:
    def __init__(self, val: int, prev: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.prev = prev
        self.next = next


class LRUCache:
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.head = Node(-1)
        self.tail = Node(-1)
        
        self.head.next = self.tail
        self.tail.prev = self.head
        #self.head.prev = self.tail
        #self.tail.next = self.head
        #               key  value
        self.hash: Dict[int, Node] = {}
    
    
    def items(self) -> List[int]:
        result = []
        current = self.head.next
        while current:
            result.append(current.val)
            current = current.next
        return result
    
    def length(self) -> int:
        return self.size
    
    def add(self, key: int) -> bool:
        if key in self.hash:
            self._moveToFront(key)
            return False
        if self.size == self.capacity:
            # evict the last item
            # h <-> 5 <-> 2 <-> t
            lastItemKey = self.tail.prev.val
            node = self.hash[lastItemKey]
            self._removeNode(node)
            del self.hash[lastItemKey]
            # add the new item
            newNode = Node(key)
            self.hash[key] = newNode
            self._addNode(newNode)
            # move new item to front
            self._moveToFront(newNode)
            return True
        else:
            self.size += 1
            newNode = Node(key)
            self._addNode(newNode)
            self.hash[key] = newNode
            return True

    def get(self, key: int) -> Optional[int]:
        if key not in self.hash:
            return None
        else:
            val = self.hash[key]
            # move to front
            self._moveToFront(val)
            return val
    
    def _addNode(self, n: Node):
        next: Node = self.head.next
        self.head.next = n
        n.next = next
        n.prev = next.prev
        next.prev = n
    
    
    def _removeNode(self, n: Node):
        # 5 <-> 2 <-> 3, removeNode(2)
        prev: Node = n.prev  # 5 <-> 2
        next: Node = n.next #  2 <-> 3
        prev.next = next
        next.prev = prev

    def _moveToFront(self, n: Node):
        self._removeNode(n)
        self._addNode(n)

        
if __name__ == "__main__":
    
    cache = LRUCache(3)
    cache.add(1)
    cache.add(2)
    print(cache.get(1)) 
    #cache.add(3)
    print(cache.length())
    print(cache.items())
    print(cache.get(2))
    print(cache.length())
    print(cache.items())
    cache.add(3)
    print(cache.items())    
    
    cache.add(4)
    print(cache.items())
