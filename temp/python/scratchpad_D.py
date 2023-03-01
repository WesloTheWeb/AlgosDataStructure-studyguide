# /*
# /*
'''
Assume you are given a Node class for an n-ary tree like so:

class Node:
    Node[] children
    int val

Given an n-ary tree, convert it to a collection of linked lists by level. 
Return the head of each level.
 

EXAMPLE(S)
Given:
       1
     / | \
     2 3 4
       | |
       5 6 

Output:
1
2 --> 3 --> 4
5 --> 6

Return the 1, 2, and 5 Node instances as a list
 


# Edge cases/Observations/Assumptions : 
# - print each linked list to Return
# - null/None -> return null/None, console log a message
# - there are no cycles
# - linked list made of new nodes


# Approach : 
# - breadth first traversal using a queue
# #1 have an additional function that translates a level list of nodes to a linkedList
#   - create a sentinel node, curr pointer pointing to sentinel node
# - begin at root of tree, putting root node in queue
# - while our queue is populated:
#   - popleft node off of queue, have currNode = node popped off of this queue
#   - if the length on our queue is = 0 (queue is empty)
#     - create a new level for our tree

#   - if this currNode has children:
#     - add these children to the queue
#     - 
  
#   #3
#   - create variable that stores length of the queue
#   - while i is less than the length of the queue
#   - pop the queue and store the node into a variable
  

# var solution = array
# #2 while queue is not empty
#   variable to keep track of nextLevel
#   create head of linked list
#   for n in queue:
#     add new node to linked list with value from n
#     add all children of n to nextLevel
#   add linked list to solution
#   replace nodes in queue with nextLevel
    




#   #4 add a null node to the queue at the end of the level

# FUNCTION SIGNATURE
# def toLinkedList(root: Node)
Follow up: 
Given a binary tree , join the cousins nodes together, try the same question for n-ary tree

Given an n-ary tree join the siblings together 

 '''
# */
import collections
class Node:
    def __init__(self, value = None, children = []):      
        self.value = value
        self.children = children

class LLNode:
    def __init__(self, value = None, next = None):
        self.next = next
        self.value = value

def printLL(linkedList):
    curr = linkedList
    while curr:
        if not curr.next:
            print(curr.value)
            break
        print(curr.value, "-> ", end='')
        curr = curr.next

def toLinkedList(nodeValues):
    sentinel = LLNode(-1)
    curr = sentinel
    head = curr.next
    numberOfNodeVals = len(nodeValues)
    nodeValueCntr = 0
    while curr and nodeValueCntr < numberOfNodeVals:
        curr.next = LLNode(nodeValues[nodeValueCntr])
        nodeValueCntr += 1
        curr = curr.next    
    printLL(sentinel.next)  

def bfsV1(root: Node):
    queue = collections.deque([root])
    while len(queue) > 0:
        size = len(queue)
        nodesInLevel = []
        for i in range(size):
            curr = queue.popleft()
            nodesInLevel.append(curr.value)
            #for every child within the curr node
            for child in curr.children:
                queue.append(child)
        toLinkedList(nodesInLevel)
        print("############")
        
def bfsV2(root: Node):
    if not root: return []
    sol = []
    currLevel = [root]
    while currLevel:
        head = LLNode(currLevel[0].value)   
        nextLevel = currLevel[0].children
        currLevel.pop(0)
        curr = head
        for n in currLevel:
            curr.next = LLNode(n.value)
            nextLevel.extend(n.children)
            curr = curr.next
        sol.append(head)
        currLevel = nextLevel
    return sol

treeOne = Node(1, [Node(2),Node(3),Node(4)])
treeTwo = None
print(bfsV1(treeOne))
#print(bfsV1(treeTwo))

print()
print("bfsV2:")
for LL in bfsV2(treeOne):
   printLL(LL)

'''        
JavaScript : 

function toLinkedList(arr = []){
    let sentinel = new Node(-1)
    let curr = sentinel
    head  = curr.next
    for( const x of arr){
        curr.next = x
        curr = curr.next
    }
    console.log(curr.value)
    return head    
}
function bfs(root){
    const queue = [root]
    while(queue.length > 0){
        const level = []
        let size  = queue.length
        for(let i = 0; i < size; i++){
            const node = queue.shift()
            
            level.push(node.value)

            for(const child of node.children){
                queue.push(child)
            }
        }
        toLinkedList(level)
    }
}

'''
'''
C# 

'''
'''
    public class Node{
       public Node[] children;
       public  int val;
    }
    public class LinkedList{
       public LinkedList next;
       public int val;
    }

    public static LinkedList[] Convert(Node root){
        Queue<Node> queue= new Queue<Node>();
        List<LinkedList> result= new List<LinkedList>();
        if(root==null) return result.ToArray();
        if(root!=null) queue.Enqueue(root);
        queue.Enqueue(null);
        LinkedList level=null;
        LinkedList head=level;
        while(queue.Count>0){
            var temp=queue.Dequeue();
            if(temp!=null){
                if(level==null){
                    level=new LinkedList();
                    level.val=temp.val;
                    head=level;
                }else{
                    var newNext=new LinkedList();
                    newNext.val=temp.val;
                    level.next=newNext;
                    level=level.next;
                }
                foreach(var v in temp.children){
                    queue.Enqueue(v);
                }
            }else{
                result.Add(head);
                level=null;
                head=level;
                queue.Enqueue(null);
            } 
        }
        return result.ToArray();
    }
'''

'''


JavaScriipt - Wesley
# #2 while queue is not empty
#   variable to keep track of nextLevel
#   create head of linked list
#   for n in queue:
#     add new node to linked list with value from n
#     add all children of n to nextLevel
#   add linked list to solution
#   replace nodes in queue with nextLevel


class Node {
    constructor(children, node) {
        this.children = [],
        this.node
    },
};

class LinkedListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    };
};

function toLinkedList(head) {
    const queue = root ? [] : null;
    let dummy = new LinkedListNode(27, head);
    dummy.next = head;
    let nextLevel;
    
    while (queue.length > 0 ) {
        const curr = queue.shift();
        
        
        
    }
};











'''

