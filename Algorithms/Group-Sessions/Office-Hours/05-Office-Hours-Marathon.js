/* Office Hour - Algo Marathon
Date: 
TOPIC:
Contains:
- Longest Common subsequence
- Min. num of moves for 0s and 1s
- Swap node pairs
-
-
#########################################*/

/*############################
QUESTION: 1: Longest common subsequence
Given two strings text1 and text2, return the length of their longest 
common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original 
string with some characters (can be none) deleted without changing the 
relative order of the remaining characters.

A common subsequence of two strings is a subsequence that is common to both strings.


Example 1:
Input: text1 = "ace", text2 = "abcde" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

APPROACH:
- take 1st char of 1st string
- search 2nd string for matching char
- if I find it, increment "result" by 1 and repeat

#############################*/

/*############################
QUESTION: 2: 
Given an array of 0s and 1s, what is the minimum number of moves needed to 
group all 0s on one side and 1s on the other side. 

A "move" is a swap between any adjacent positions.

Examples
[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.

[0, 1, 2, 3, 4] => Idxs
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1
[1, 1, 0, 1, 0]
[1, 1, 1, 0, 0]

[0, 0, 0, 1, 1, 0, 0]
                     ^
numOnes: 2
totalMoves: 4

0 1 => 1 move
0 0 1 => 2 moves
0 1 1 => 2 moves
0 0 1 1 => 4 moves
0 0 1 1 1 => 6 moves
0 0 0 1 1 => 6 moves

#############################*/

// will return how many moves it will take to move ALL "target" elements to the right
const numSwapsToMoveTargetElementToRight = (input, target) => {
    let numTargetElements = 0;
    let totalMoves = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === target) {
            numTargetElements++;
        } else {
            totalMoves += numTargetElements;
        }
    }

    return totalMoves;
}

// console.log(numSwapsToMoveTargetElementToRight([0, 0, 0, 1, 1, 0, 0], 0),'6')
// console.log(numSwapsToMoveTargetElementToRight([0, 0, 0, 1, 1, 0, 0], 1),'4')

const minSwapsToGroupZerosAndOnes = (input) => {
    return Math.min(numSwapsToMoveTargetElementToRight(input, 0), numSwapsToMoveTargetElementToRight(input, 1))
}


console.log(minSwapsToGroupZerosAndOnes([0, 0, 0, 1, 1, 0, 0])) // 4 moves
console.log(minSwapsToGroupZerosAndOnes([0, 0, 0, 1, 1, 1, 1])) // 0 moves
console.log(minSwapsToGroupZerosAndOnes([1, 1, 1, 1, 1, 1, 0])) // 0 moves
console.log(minSwapsToGroupZerosAndOnes([])) // 0 moves


/*############################
QUESTION 3: Swap Nodes in Pairs. https://leetcode.com/problems/swap-nodes-in-pairs/
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem
without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

....x -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 ... ->
    ^              nodeBeforePairToSwap
         ^         firstNode
              ^    secondNode
 
nodeBeforePairToSwap.next = secondNode        // x points to 2
firstNode.next = secondNode.next;             // 1 points to 3
secondNode.next = firstNode                   // 2 points to 1
 
x => 2 => 1 => 3
1 -> 2 -> 3 -> 4 -> 5
2 -> 1 -> 4 -> 3 -> 5

x -> 2 -> 1 -> 4 -> 3 -> 5        
                    ^                                   nodeBeforePairToSwap


#############################*/

class LLNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    };
};

const testList1 = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5, new LLNode(6))))));
const testList2 = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5)))));

const swapNodesInPairs = (head) => {
    let dummyHead = new LLNode(0, head)
    let nodeBeforePairToSwap = dummyHead;

    while (nodeBeforePairToSwap.next && nodeBeforePairToSwap.next.next) {
        let firstNode = nodeBeforePairToSwap.next;
        let secondNode = firstNode.next

        nodeBeforePairToSwap.next = secondNode
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        nodeBeforePairToSwap = firstNode;
    };

    return dummyHead.next;
};

const printList = (head) => {
    let cur = head;
    
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    };
};

printList(swapNodesInPairs(testList2));