const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


/*

   3 
 1   2
4   5 6

q = []
curr = 6
count = 6

1. pop off the next node
2. "process it" count it
3. add its children to the queue

     [6, 2, 3, 1, 7, 9, 4, 10]
   [1, 2, 3, 6]   [4, 7, 9, 10]
  [2, 6]    [1, 3]
 [6], [2]   [3]  [1]
 
[2, 6]
      i1

[1, 3]
      i2
      
      [6, 2]
    [6]   [2]

[6]
i1
[2]
   i2


*/

function mergeSort(input) {
  if (input.length <= 1) {
    return input
  }
  
  let left = input.slice(0, input.length / 2)
  let right = input.slice(input.length / 2)
  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)
  
  return zip(sortedLeft, sortedRight)
}

function zip(input1, input2) {
  let res = []
  
  let i1 = 0
  let i2 = 0
  
  while (i1 < input1.length && i2 < input2.length) {
    if (input1[i1] < input2[i2]) {
      res.push(input1[i1])
      i1 += 1
    } else {
      res.push(input2[i2])
      i2 += 1
    }
  }
  res.push(input.slice(i1, input1.length), input.slice(i2, input2.length))
  return res
}


function count_bfs(node) {
  let queue = [node]
  let count = 0
  
  while (queue.length > 0) {
    let curr = queue.shift();
    count+=1
    /*
    if curr.left:
      queue.append(curr.left)
    */
    
    if(curr.left)
      queue.push(curr.left)
    if(curr.right)
      queue.push(curr.right)
  }
  return count;
}


function sum_bfs(node) {
  let queue = [node]
  // let sum = 0
  
  while (queue.length > 0) {
    let curr = queue.shift();
    // sum += curr.value
    
    if(curr.left)
      queue.push(curr.left)
    if(curr.right)
      queue.push(curr.right)
  }
  // return sum;
}

function count(node) {
  if(!node) return 0;
  let l = count(node.left);
  let r = count(node.right);
  return 1 + l + r;
}

/* 
Your previous Python 3 content is preserved below:

def say_hello():
    print('Hello, World')

for i in range(5):
    say_hello()
    
'''

7 -> 3 -> 5 -> 4 => 5

max(1) => max(rest, 1.value)
  rest = max(3)

'''
    
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None

        
def count(node):
    if node is None:
        return 0
    
    return 1 + count(node.next)

def maxValue(node):
    if node.next is None:
        return node.value

    return max(node.value, maxValue(node.next))


'''
Count number of elements in a binary tree, iteratively

    5
  1   3
 2 4 

     count(5) => l + r + 1
  l = 3   r = 1

'''


# 
# Your previous JavaScript content is preserved below:
# 
# /*
# 
# *1. Count number of elements in a linked list, recursively 
# *2. Find the max element in a linked list, recursively
# 3. Remove all elements with target value in a linked list, iteratively
# 4. Bubble Sort
# 5. Merge Sort
# *6. Find the first element that is repeated k times in an array
# ***7. Count number of elements in a binary tree, iteratively
# 8. Find target element in a binary search tree
# 9. Insert target in a binary search tree
# 10. Return the kth element in the fibonacci sequence
# 
# */
# 
# 
# /*
# 
# Count number of elements in a linked list, recursively 
# 
# */

 */ 