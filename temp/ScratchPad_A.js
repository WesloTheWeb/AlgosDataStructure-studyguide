// TODO: Mark this as a pair learning session for 2D arrays:

// '''
// Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has two sides, black and white, and after being placed, further moves cause other discs to flip colors. Specifically, a line of discs of one color gets flipped when sur rounded on both ends by discs of the opposite color.

// In this problem, you're given a 2-dimensional array representing the board. Each position will contain a value of “B” for black, “W” for white, or “*” to represent an empty spot. Additionally, we get a position that is currently empty. If it's black's turn to play, our task is to determine if this is a legal move.

// A move must meet all of the following criteria:
// 1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
// 2. The play must surround a series of pieces of the opposite color in a line, thereby flipping them.

// A simple, 1-dimensional example consider:

// * W W W B * * * 

// In this case, only the first position is a valid move for black to play because it would surround three white tiles. The remaining positions are invalid moves because they would not surround any white tiles.

// This is the starting state of the game with black's possible opening moves labeled with an L:

//   0 1 2 3 4 5 6 7
// 0 * * * * * * * *
// 1 * * * * * * * *
// 2 * * * * L * * *
// 3 * * * B W L * *
// 4 * * L W B * * *
// 5 * * * L * * * *
// 6 * * * * * * * *
// 7 * * * * * * * *

// The board will always be no more than an 8x8 matrix of these three symbols.
 

// EXAMPLE(S)
// isLegalMove(
//   [
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//     ['*', 'B', 'W', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//   ],
//   2, 3)
// Output:  true

// isLegalMove(
//   [
//     ['*', 'B', '*', '*', '*'],
//     ['*', '*', 'W', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//   ],
//   2, 3)
// Output:  true

// isLegalMove(
//   [
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', 'W', '*', '*'],
//     ['*', '*', '*', '*', '*'],
//     ['*', '*', 'W', '*', '*'],
//     ['*', 'W', '*', '*', '*'],
//   ],
//   2, 3)
// Output:  false
 

// FUNCTION SIGNATURE
// function isLegalMove(board, x, y)
// '''
/* APPROACH
Possible ways:
1. DFS 
2.

check if white stones within boundaries.
after breadth, go depth

*/



function isLegalMove(board,row,col) {
  let check = [[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1]]
  let boundary_row = board.length
  let boundary_col = board[0].length

  for (const offset of check) {
    let offset_row = offset[0]
    let offset_col = offset[1]

    console.log([row + offset_row,col + offset_col],[row + offset_row*2,col + offset_col*2],"outside")
    if (0 <= (row + offset_row) && (row + offset_row) < boundary_row && 0 <= (col + offset_col) && (col + offset_col) < boundary_col ) {
      // console.log(board[row + offset_row][col + offset_col],board[row + offset_row*2][col + offset_col*2])
      console.log([row + offset_row,col + offset_col],[row + offset_row*2,col + offset_col*2],"inside")
      if (board[row + offset_row][col + offset_col] === "W" && board[row + offset_row*2][col + offset_col*2] === "B") {
        return true
      }
    }
  }

  return false

}


  // for ref in check:
  //   check_row,check_col = ref[0],ref[1]
  //   if 0 <= ref[0] < boundary_row and 0 <= ref[1] < boundary_col:
  //     if board[row+check_row][col+check_col] == "W" and board[row+check_row*2][col+check_col*2] == "B":
  //         return True 
  
  // return False 






// // Ex 1
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   2, 3),
//   false
// );
// // Ex 2
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   2, 3),
//   false
// );
// // Ex 3
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   2, 4),
//   true
// );
// // Ex 4
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   3, 5),
//   true
// );
// // Ex 5
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   4, 5),
//   false
// );
// // Ex 6
// console.log(isLegalMove(
//   [
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', 'B', 'W', '*', '*', '*'],
//     ['*', '*', '*', 'W', 'B', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//     ['*', '*', '*', '*', '*', '*', '*', '*'],
//   ],
//   5, 5),
//   false
// );
// // Ex 7
console.log(isLegalMove(
  [
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  0, 7),
  true
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  2, 2),
  false
);
































































































// # Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.
// # For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.


// # next_greater_element([2, 7, 3, 5, 4, 6, 8]) // [7, 8, 5, 6, 6, 8, -1]
// # next_greater_element([5, 4, 3, 2, 1]) // [-1, -1, -1, -1, -1]


// Approach:
// -Iterate through the input array
//    - at each index, iterate through all elements in the array to the 
//      right of the current element, grab the first element that is 
//      greater than our current element. 



// function findNextGreaterElements(input){
//   let answer = [];
//   for(let i = 0; i < input.length; i++){
//     let currentElement = input[i];
//     for(let j = i; j < input.length; j++){
//       let potentialNGE = input[j];
//       if(potentialNGE > currentElement){
//         answer.push(potentialNGE);
//         break;
//       };
//     };
//     if(!answer[i] && answer[i] !== 0)answer.push(-1); 
//   };
//   return answer;
// };


// [8,7,6,5,3,2,1,4]


// function findNextGreaterElements(input){
//   let ans = new Array(input.length).fill(-1);
//   let stack = [];

//   for(let i= 1; i<input.length;i++){
//     let continue_ = true;
//     while(continue_){
//       let [index, value] = stack.pop();
//       if (input[i] > value){
//         ans[index] = input[i]
//       } else {
//         continue_ = false 
//       }
//       stack.push([i,input[i]])
//     }
//   }
//   return ans
// }


function findNextGreaterElements(input){
  let ans = new Array(input.length).fill(-1);
  let stack = [];

  for(let i= 1; i<input.length;i++){

    // if(stack.length){
    //   let flag = true
    //   while(flag && stack.length){
    //     let popped = stack.pop();
    //     let [index,value] = popped
    //     if(input[i]>value){
    //       ans[index] = input[i]
    //     }else{
    //       // one thing we forgot to do is put the popped back 
    //       //  into its place if input[i] isn't greater than the 
    //       // value from the top of the stack 
    //       stack.push(popped)
    //       flag = false 
    //     }
    //   }
    // }

    let flag = true
    while(flag && stack.length){
      let popped = stack.pop();
      let [index,value] = popped
      if(input[i]>value){
        ans[index] = input[i]
      }else{
        // one thing we forgot to do is put the popped back 
        //  into its place if input[i] isn't greater than the 
        // value from the top of the stack 
        stack.push(popped)
        flag = false 
      }
    }


    stack.push([i,input[i]]);

  }
  return ans
}

// hey Jesse I can't get back into the google meet. You wanna just communicate through the comment? haha

//lol, yeah we can do that. 

// ah the do while runs once at least but the stack still is empty. ah wait. we could put the empty stack conditional at the top. Check the stack the first thing well actually now that brings me back to the if conditional earlier. I think I was leaning on the if conditional outside of while because of when the stack would be empty. Yeah go ahead. actually that would still have a problem cause we are popping the moment we go into the while  

// I think I have a solution. I'm gonna give it a shot. 

// You see what i mean? or yeah we could start with the stack with the first element and start from index 1 

//IDK lol. I can give it some more thought and send you whatever solution I come up with via Mattermost. 

// k it's cool. I think I might just put if conditional outside of the while and have the else from in the begining.



//ok. send me whatever solution you come up with. I wanna see it. 

// yeah, I might actually tinker with it now 

//  kk 



// // TestCases
// console.log(findNextGreaterElements([]))
// console.log(findNextGreaterElements([1]),[-1])
// console.log(findNextGreaterElements([1, 2, 3, 4]),[2, 3, 4, -1])
// console.log(findNextGreaterElements([2, 7, 3, 5, 4, 6, 8]),[7, 8, 5, 6, 6, 8, -1])
// console.log(findNextGreaterElements([5, 4, 3, 2, 1]),[-1, -1, -1, -1, -1])

// #Test Cases
// # next_greater_element([]) // []
// # next_greater_element([1]) // [-1]
// # next_greater_element([1, 2, 3, 4]) // [2, 3, 4, -1]
// # next_greater_element([2, 7, 3, 5, 4, 6, 8]) // [7, 8, 5, 6, 6, 8, -1]
// # next_greater_element([5, 4, 3, 2, 1]) // [-1, -1, -1, -1, -1]


//Jesse's Solution_______________________________________


function findNextGreaterElements(input){
  let ans = new Array(input.length).fill(-1);
  let stack = [[0,input[0]]];

  for(let i= 1; i<input.length;i++){
    let continue_ = true;
    while(continue_ && stack.length){
      let [index, value] = stack.pop();
      if (input[i] > value){
        ans[index] = input[i]
      } else {
        stack.push([index, value]);
        continue_ = false 
      }
    }
    stack.push([i,input[i]]);
  }
  return ans
}


















































































































































// # Given a linked list and an integer k, reverse the list in groups of k.
// # Function Signature: 
// # def reverseKGroup(head: ListNode, k: int) -> ListNode
// # Target runtime and space complexity:
// # O(N)


// # Examples:
// # Input: 
// # 1→2→3→4→5→6
// # K=2

// # Output:
// # 2→1→4→3→6→5


// from typing import no_type_check_decorator


// class ListNode:
//     def __init__(self,val,next=None) -> None:
//         self.val=val
//         self.next = next 
    

// def print_ll(node):
//     pt = node 
//     while pt != None:
//         print(str(pt.val)+"->",end=" ")
//         pt = pt.next 



// def reverseKGroup(head: ListNode, k: int) -> ListNode:


//     def helper(node):
//         if node is None or node.next is None:
//             return node
//         ans = helper(node.next)
//         node.next.next = node
//         node.next = None

//         return ans 

//     # Check if we need to reverse the group
//     curr = head
//     for _ in range(k):
//         if not curr: return helper(head)
//         curr = curr.next

//     # Reverse the group (basic way to reverse linked list)
//     prev = None
//     curr = head
//     for _ in range(k):
//         nxt = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nxt

    
//     # After reverse, we know that `head` is the tail of the group.
//     # And `curr` is the next pointer in original linked list order
//     head.next = reverseKGroup(curr, k)
//     return prev
    

    






// # Input: 
// # 1→2→3→4→5
// # K=3

// # Output:
// # 3→2→1→5→4

// ll1 = ListNode(1,ListNode(2,ListNode(3,ListNode(4,ListNode(5)))))

// ll3 = ListNode(1)
// # print_ll(reverseKGroup(ll1,3))

// # Input: 
// # 1→2→3→4→5
// # K=5

// # Output:
// # 5→4→3→2→1
// # print_ll(reverseKGroup(ll1,5))

// # Input: 
// # 1→2→3
// # K=5

// # Output:
// # 3→2→1

// ll2 = ListNode(1,ListNode(2,ListNode(3)))
// print_ll(reverseKGroup(ll2,5))

























































// # # Given the head node of a linked list and any number (k), break your list into (k) consecutive chunks, with no two chunks should have a size differing more than one.
// # # The result chunks should be in the same original order, and chunks occurring earlier should never be smaller than later chunks.


// # # 
// # #  if k == 0 -> []
// # #  k == 1 -> [original]
// # #  k > length of LL -> [[val1],[val2]...[]]

// # #  in case k doesn't evenly divide the length of LL
// # #   remaing = length of LL % k 


// # from re import L


// # class ListNode:
// #     def __init__(self,val,next=None):
// #         self.val = val
// #         self.next = next 

// # def LLtoArr(head):
// #     ans = [] 
// #     pt = head 
// #     counter = 0
// #     while pt:
// #         ans.append(pt.val)
// #         counter += 1 
// #         pt = pt.next 
    
// #     return (ans,counter)

// # def chunkSegments(head, n):
// #     arrLL,length = LLtoArr(head)
// #     ans = [] 

// #     if n == 0: return []
// #     # if n == 1: return [arrLL]

// #     remainder = length % n 
// #     numb_batch = length // n 
// #     counter = 0 

// #     for i in range(n):
// #         batch = [] 
// #         if counter < len(arrLL):
// #             if remainder > 0:
// #                 batch = arrLL[counter:counter+numb_batch+1]
// #                 remainder -= 1 
// #                 counter += numb_batch+1
// #             else:
// #                 batch =  arrLL[counter:counter+numb_batch]
// #                 counter += numb_batch

// #         ans.append(list(batch))
    
// #     return ans


// # ll1 = ListNode(1,ListNode(2,ListNode(3,ListNode(4,ListNode(5)))))
// # ll2 = ListNode(1,ListNode(2,ListNode(3)))
// # ll3 = ListNode(2,ListNode(2,ListNode(3,ListNode(4,ListNode(5,ListNode(6,ListNode(4,ListNode(8,ListNode(9,ListNode(10))))))))))



// # # print(chunkSegments(ll1,5)==[[1],[2],[3],[4],[5]])
// # # print(chunkSegments(ll1,6)==[[1],[2],[3],[4],[5],[]])
// # # print(chunkSegments(ll1,0)==[])
// # # print(chunkSegments(ll1,1)==[[1,2,3,4,5]])
// # # print(chunkSegments(ll3,3)==[[2,2,3,4],[5,6,4],[8,9,10]])





// # # Test Cases:
// # # [head = [1, 2, 3, 4, 5], k = 5] => [[1], [2], [3], [4], [5]]
// # # [head = [1, 2, 3], k = 5] => [[1], [2], [3], [], []]
// # # [head = [2, 2, 3, 4, 5, 6, 4, 8, 9, 10], k = 3] => [[2,2,3,4],[5,6,4],[8,9,10]]
// # # [head = [1, 2, 3], k = 5] => [[1], [2], [3], [], []]


