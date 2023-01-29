/*########################
TYPE:
Question:
Given a linked list with each node representing a digit in an integer, add 1 to the number. The head holds the most significant digit and tail holds the least significant digit. Here is some starting code to implement and print out a linked list in Python.

Harder variations:
1. Do it both recursively and iteratively.
2. What if it's too big to be stored in an integer or long?
3. How can it be done in place without using another collection?
4. What about adding two linked lists? N linked lists?
5. What changes to add 2 linked lists that potentially have decimal values? (Submit your solution to this variation in #feedback-content so we can post it!)
 
EXAMPLE(S)

head = null
head = 0 -> None
head = 1 -> 9 -> 9 -> None
head = 9 -> 9 -> 9 -> None

head = 1 -> 2 -> 3 -> None
head = addOne(head)
printLL(head) # 1 -> 2 -> 4 -> None

head = 9 -> 9 -> 9 -> None
head = addOne(head)
printLL(head) # 1 -> 0 -> 0 -> 0 -> None
 
head = 1 -> 9 -> 9 -> None
head = addOne(head)
printLL(head) # 2 -> 0 -> 0 -> None

head = None
head = addOne(head)
printLL(head) # None

head = 0 -> None
head = addOne(head)
printLL(head) # 1 -> None

***BRAINSTORM***
1. Iterate until the tail. If it's less than 9 add 1. Otherwise go back and update the previous node(s)

2. Convert LL into an int, add 1. Update the original nodes with new int, add a new node if more digits than the original

3. Push elements to a stack. Popping from the stack, if the element is 9 set carryover variable to True otherwise to False. If the stack is empty and carryover is True, we need to add a new node to the beginning.

4. Recursively update the LL based on carryover variable

5. Turn it into a doubly linked list
okl,p 
FUNCTION SIGNATURE
def addOne(head: Node) -> Node:
'''
       A    B    C
head = 2 -> 0 -> 0 -> None
current = A
stack = []
carry = True




Approach:




Time Complexity:
Space Complexity:

Pseudo Code:




########################*/






// Test Cases:
console.log();
console.log();
console.log();

