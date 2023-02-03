/**
You're given an array containing either '.', 'L', or 'R' values. These values represent a starting state of a row of dominoes. L means the domino has been pushed to the left. R means the domino has been pushed to the right. All elements to the left  of an L get pushed to the left and all elements to the right of an R get pushed to the right. If a domino is pushed in both directions simultaneously, it stays up.

Given the starting state array, return the updated array representing the final state of the dominos. All dominos should be L, R or . if it stays standing upright.
 

EXAMPLE(S)
[., L, ., R, .] -> [L, L, ., R, R]
[., R, ., ., L, .] -> [., R, R, L, L, .]
[., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
[., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]

. R . . L .
. R R L L .
| / / \ \ |

. R . . . L .
. R R . L L .
| / / | \ \ |
 

[., R, ., ., L] -> [., R, R, L, L]

[., L, ., R, .]
from left going right -> [., L, ., R, R]
from right going left -> [ L   L  .   R   .]
[L, L, ., R, R]


[., R, ., ., L, .] ->

 . R R . L .
  .  . .  L  L  .
  . R R 
 [., R, R, L, L, .]


FUNCTION SIGNATURE
def finalDominosState(dominosRow: list[str]):

[., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]
[-1, 1, 3, 5, 7, 9]
[-1, 1] => [. R] - NO-OP
[1, 3] => [R . L] -> [R . L]
[3, 5] => [L . L] -> [L L L]
[5, 7] => [L . R] -> [L . R]
[7, 9] => [R .]   -> [R R]

[R R . L L]

left_domino(R) = 0
right_domino(L) = 4

set left_domino+1 to R -> [1]
set right_domino-1 to L -> [3]

want to set left_domino+1 [2] to R
want to set right_domino-1 [2] to L
  BUT, left_domino+1==right_domino-1


Subproblems:
- [R |R| R |L| L] -> [R R . L L]
queue: [2] 
pop 3: want to push: 2 -> q: [2, 2]



- [L . . . R] -> no-op
- [R . R]     -> [R R R]
- [L . L]     -> [L L L]

- [. R]       -> no-op
- [R .]       -> [R R]
- [L .]       -> no-op
- [. L]       -> [L L]

Notes:
- cancels out if R . L 
- Letters prompts actions either Left or Right
- Will need to consider index before and after
- Important values: 
  - moving domino pieces (R, L)
  - boundaries of the array
  - The position of those specific dominos
= two possible cases: 
  1. in between 
  2. edges

- How do we find the cases?
  - 
- What do we do when we find the cases?
  - 

[R . . . L] -> [R R . L L]

[R . . . . L . . L . R .]
- [R . . . . L] -> [R R R L L L]
- [L . . L]     -> [L L L L]
- [L . R]       -> [L . R]
- [R .]         -> [R R]
[R R R L L L L L L . R R]


2 Approaches:
- BFS // Queue
  - 1 pass through the array to find pertinent indices 
  - Store pertinent indices into the queue (L/R values)
  - Process the current index with your last_index
    - fill_dominos(curr_index, last_index)

2 pointer skeleton:
  - fast and slow pointer
  - fast pointer moves until {some_condition}
  - then do {some_action} based on the two Pointers
  - move the slow pointer
  - repeat until the end

- 2 Pointers // Sliding window
  - fast and slow pointer
  - fast pointer moves until you reach L, R or end
  - process the fast and slow pointer
    - fill_dominos(slow, fast)
  - move the slow pointer to the fast pointer
  - repeat

fill_dominos(left, right):
- looks at the value at left and right
- if arr[left] == arr[right]  
  - everything in between becomes arr[left]
- if arr[left] == 'L' and arr[right] == 'R':
  - do nothing
- if left == R and right == L:
  - collapse inwards filling in the dominos appropriately
- if left = R and right = .:
  - fill everything with R
- if right = L and left = .:
  - fill everything with L

2 Components:
- Find the segments to process
  - fast and slow pointer
  - fast pointer moves until you reach L, R or end
    - process_segments(left, right)
  - move the slow pointer to the fast pointer
  - repeat
- Process the segments
  - looks at the value at left and right
  - if arr[left] == arr[right]  
    - everything in between becomes arr[left]
  - if arr[left] == 'L' and arr[right] == 'R':
    - do nothing
  - if left == R and right == L:
    - collapse inwards filling in the dominos appropriately
  - if left = R and right = .:
    - fill everything with R
  - if right = L and left = .:
    - fill everything with L
**/
















// Test Cases
const test1 = ['.', 'L', '.', 'R', '.']; 
// [L, L, ., R, R]
const test2 = [".", "R", ".", ".", "L", "."]; 
// [., R, R, L, L, .]
const test3 = [".", "R", ".", ".", ".", "L", "."];
 // [., R, R, .,  L, L, .]
const test4 = [".", "R", ".", "L", ".", "L", ".", "R", "."]; 
// [., R, ., L, L, L, ., R,R]







/**
https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
https://docs.google.com/document/d/1AlvBk1M_vYvDm_d6LBEVR645qSoCay6d2BX_4jBXql8/edit?usp=sharing


3 Levels to Algorithm Mastery
1. Understanding the Base Algorithm
    - Sort problems by topic
    - Sort by difficult, easy -> hard
    - Grind out the easy questions and try to understand them as much as you can.
    - Look at the discussion/solution to get clarity if stuck.
2. Identifying Algorithm in Questions
    - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
    - Do every question within 1-level-higher of the similar questions.
    - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.
3. Modifying Algorithm for Specific Questions
    - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
    - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure

Study Guide:
- Copy/Paste the Question and Implementation
- Write a paragraph summary in human-readable format explaining the solution
* Keep track of the questions that you didn't do well on
    - Come back to that question a week later
A week before any of your big interviews, allocate time to do questions filtered by company/frequency
    - These will have questions you'll most likely getsa
    - You should be more comfortable around questions like this, that you haven't seen before
    - And you'll get more exposure around those questions
    - NOTE: I got a shit ton of those most-frequent questions in my interviews
**/