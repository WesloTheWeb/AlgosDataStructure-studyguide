'''
Question : 

A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].

Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation.

Dishes can be prepared in any order and the chef can discard some dishes to 
get this maximum value.




Example 1:

Input: satisfaction = [-1,-8, 0,5,-9]
                      [-9, -8, -1, 0 , 5]
                       0.  0.  0
                       do i keep this 
                         or 
                       discard 

    recursive_func (time_idx, value, dish_idx): # state variables
            # base caase 
            if dish_idx >= len(dishes):
                return value
            

            # recurrence relationship
            discard_options = rf(time_idx, value, dish_idx+1)
            keep_this_value = rf(time_idx +1 , value + (time_idx * satisfactions_score), dish_idx+1)

            # what am i returning
            reutnr max(discard_options ,keep_this_value)

                         


        like-time.     -1     0 15
Output: 14
Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
Each dish is prepared in one unit of time.

Example 2:

Input: satisfaction = [4,3,2]
                    
                       
Output: 20
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)

Example 3:

Input: satisfaction = [-1,-4,-5]
Output: 0
Explanation: People do not like the dishes. No dish is prepared.


discarding dishes will affect time[i]

sort the dishes in ascending order

call the recurseive call to answer the question discard or dont,
return outptu

len(satisfaction value) > 0 


Follow up : 
https://leetcode.com/problems/cinema-seat-allocation/
https://leetcode.com/problems/largest-number/ <45 mins
https://leetcode.com/problems/bus-routes/

https://leetcode.com/problems/trapping-rain-water/

'''

# un memomized time compleixt is n**2
# memo... time complexity o(nlogn)

def max_satisfaction(array: list) -> int:
    
    #  cache {(dish_idx, time_idx): 10}
    def recurse(dish_idx, time_idx, sv):
        if dish_idx >= len(array):
            return sv

        
        discard_options = recurse(dish_idx+1, time_idx, sv)
        keep_this_value = recurse(dish_idx+1, time_idx+1, sv=(sv + (time_idx * array[dish_idx])))

        return max(discard_options, keep_this_value)


    # nlogn time (tim sort)
    array.sort()
    return recurse(0,1,0)
    


# print(max_satisfaction([-1,-4,-5]) == 0)
# print(max_satisfaction([4,3,2]) == 20)
# print(max_satisfaction([-1,-8, 0,5,-9]) == 14)

# one state : satisfaction_level and time 
# 1 <= time<= size_of_satisfaction_level_array

# hint for optimisation 
# use suffix sum over here

from math import inf 

def max_satisfaction(array: list) -> int:
    # sso = [-9, -16, -3, 0, 25]
   #          k.  c

    #  [] [-1,-8, 0,5,-9]
    #  [-9,-8,-1,-0,5]
    #    iterate throught all teh staisfiaction_levels
            #  sso[-1] 
    #        sso[dish_idx] = 1*-9
    
    array.sort()
    suffix_sum, _sum = 0, 0
    msf = 0
    for i in range(len(array)-1,-1,-1):

        suffix_sum += array[i]
        if suffix_sum < 0:
            return _sum
            
        _sum += suffix_sum


    return _sum


print(max_satisfaction([-1,-4,-5]) == 0)
print(max_satisfaction([4,3,2]) == 20)
print(max_satisfaction([-1,-8, 0,5,-9]) == 14)


    
# 5 , 0, -1 ,-8 , -9

# msf = 5 , 10, 14, 10, 18
# suffix_sum += satisfaction_level
# sum = sum + sufix_sum 

 
# ss = 5, (0+5) , (-1+0+5),  (-8,-1+0+5), (-9+-8, -1+0+5)
# s  = 5, 10, 14, 10, -3 

# s = 5, 5+(0+5) = (0*1)+(5*2), 5+(0+5)+(-1+0+5) = (-1*1)+(0*2)+(5*3), ...
    