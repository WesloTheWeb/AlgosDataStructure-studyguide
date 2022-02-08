# Your previous Plain Text content is preserved below:
# 
# '''
# Given a list of daily temperatures T, return a list such that, 
# for each day in the input, tells you how many days you would 
# have to wait until a warmer temperature. 
# 
# Examples
# Given the list of temperatures 
# T = [73, 74, 75, 71, 69, 72]
# 
# 
# 
# your output should be [1, 1, 0, 2, 1, 0].
# '''
# 
# [] -> []
# [45] -> [0]
# [52,36,60,54,40]->[2,1,0,0,0]
# 
# Loop over the input temperatures
# For every temp loop over the rest of the array
# If temp isn't greater, increment a days variable
# When you actually find the temp you're looking for, append days var to array
# reset days variables

# def daysUntilWarmerTemp(array):
#     result=[]
#     for i in range(len(array)-1):
#         days=1
#         for j in range(i+1,len(array)):
#             temp=array[i]
#             futureTemp=array[j]      
#             if temp>=futureTemp:
#                 days+=1
#             elif futureTemp>temp:
#                 result.append(days)
#                 break
#             if j==len(array)-1:
#                 result.append(0)
#     result.append(0)
#     return result


def daysUntilWarmerTemp(temps):
    output = [0] * len(temps)
    stack = []
    
    for i in range(len(output)):
        curr_temp = temps[i]
        while len(stack) > 0 and temps[stack[-1]] < curr_temp:
            index_of_lower_temp = stack.pop()
            output[index_of_lower_temp] =  i - index_of_lower_temp
        stack.append(i)
    
    return output

print(daysUntilWarmerTemp([52,36,60,54,40]),[2,1,0,0,0])