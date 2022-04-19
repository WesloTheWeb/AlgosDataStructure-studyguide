############################
# SESSION 7 | Feb 22
############################
# 
# Your previous JavaScript content is preserved below:
# 
# // Given an array where each number is located at most k places away from its sorted position, fully sort the array.
# 
# /*
# // Examples
# // [1, 3, 4, 2, 6, 5], k = 2, return [1, 2, 3, 4, 5, 6]
# 
# min heap of size n 
# 
#           2
#       3       4
#    4     6  5   
#         
# 1, 2, 3
# 
# 
# [1, 4, 5, 3, 7, 8], k = 2 return [1, 3, 4, 5, 7, 8]
#           ^
# 
# assume we have a working heap 
# - build a heap  
# - add an element
# - remove an element 
# 
# time: O(n log k)
# space: O(n)
# min heap of k+1 
#      
# 
# 
# assumptions: 
# - k both ways 
# - k within the length of the array
# - possible for duplicate numbers in array
# 
# [1, 2, 3, 4, 5, 6], k = 3
#  i  j    
#       
# time: O(n*k)
# space: O(1) in-place 
#  
# [1, 3, 2, 4, 6, 5], k = 2, return [1, 2, 3, 4, 5, 6]
#     i     
#        j
#           k
# 
# */
# 
# // Function Signature
# // def k_sort(input, k)
# 
# 

def k_sort(input, k):
    
    for i in range(len(input)):
        min_i = i
        for j in range(i, i+k):
            if j < len(input):
                if input[min_i] > input[j]:
                    min_i = j
            
        
                    
    return input
