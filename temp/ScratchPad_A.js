/*
  PROBLEM 1 https://leetcode.com/problems/intersection-of-two-linked-lists/
  
  
  L1. 1->2 -> 3 ->4-->null
       ^
   
  L2  5->6->2 ->3-> 4-->null
     ^.           
  
  
  Approach - Two Pointers: Run time = O(m + n) Space =  O(1)
  1. First Iteration - find the length of shorter linked list to start iterating the longer linked list at the node position that would give us the length of the shorter linked list
   - counter to get the extra node lengths of longer list
  2. Second Iteration - start longer list at the node position where would give the same length of the shorter list, then iterate one by one to find intersection point
  
*/
