"""
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

Pseudo Code1:
- use 3 pointers for each number, 0P, 1P, 2P
- start the 3 pointers at the beginning of the array
- 

1. Count Solution

We’re going to implement one of the most basic solutions to this problem. This solution will require two passes through the array:

1. Create three variables, zeros, ones and twos.

2. Iterate through the array one time, keeping track of the number of zeros, ones and twos

3. Iterate through the array a second time, replacing the elements in the array with zeros number of 0s, ones number of 1s and twos number of 2s.
"""

def countSolution(array):
    # 1. Create three variables, zeros, ones and twos.
    counts = [0,0,0]

    #2. Iterate through the array one time, keeping track of the number of zeros, ones and twos
    for i in range(len(array)):
        counts[array[i]] += 1
    #3. Iterate through the array a second time, replacing the elements in the array with zeros number of 0s, ones number of 1s and twos number of 2s.
    # counts [0 0 1]
    # index = 1
    # array [0 0 1 1 2 2]
    
    for j in range(len(array)):
        index = next(idx for idx in range(3) if counts[idx] > 0)
        array[j] = index
        counts[index] -= 1

    return array
        
# [2, _ _ _ _ ]

        

array1 = [2,0,2,1,1,0] #[]
array2 = [2,0,1]
#print(countSolution(array1))
#print(countSolution(array2))


"""
2. One Pass Solution

We’re going to implement the most classic solutions to this problem. This solution only takes one pass through the array:

1. You have three pointers: zeroIndex, currIndex and twoIndex

2. Iterate through the array with currIndex

3. Every time you see a 0, swap it with zeroIndex and move currIndex forward.

4. Every time you see a 1, move on

5. Every time you see a 2, swap it with the item at twoIndex (and do NOT move currIndex, since the swapped value might be a 0 or another 2)
"""

def countSolutionOnePass(arr):
    
    # 1. You have three pointers: zeroIndex, currIndex and twoIndex
    zeroIndex = 0
    currIndex = 0
    twoIndex = len(arr) - 1

    # [1,0,2]
    #  z c t
    # 2. Iterate through the array with currIndex
    while currIndex <= twoIndex:
        # 3. Every time you see a 0, swap it with zeroIndex and move currIndex forward.
        if arr[currIndex] == 0:
            arr[zeroIndex], arr[currIndex] =  arr[currIndex], arr[zeroIndex]
            zeroIndex += 1
            currIndex += 1

        # 4. Every time you see a 1, move on
        elif arr[currIndex] == 1:
            currIndex += 1

        # 5. Every time you see a 2, swap it with the item at twoIndex (and do NOT move currIndex, since the swapped value might be a 0 or another 2)
        elif arr[currIndex] == 2:
            arr[currIndex], arr[twoIndex] =  arr[twoIndex], arr[currIndex]
            twoIndex -= 1

    return arr


array1 = [2,0,2,1,1,0] #[]
array2 = [2,0,1]
#print(countSolutionOnePass(array1))
#print(countSolutionOnePass(array2))

"""
Now, you’re going to implement a recursive version of the one pass solution. It is the exact same solution, except the function signature is going to contain the zeroIndex, currIndex and twoIndex. We’ve written a rough outline for you. Fill out the rest:

function recursive_dnf(input: [Int], zeroIndex: Int, currIndex: Int, twoIndex) {
    if (currIndex >= twoIndex) {
        return input
    }
    if (input[currIndex] == 0) {

    } else if (input[currIndex] == 1) {

    } else { //currIndex == 2

    }
}
"""

def countSolutionRec(input, zeroIndex, currIndex, twoIndex):
    if currIndex > twoIndex:
        return input
    if input[currIndex] == 0:
        #swap
        input[zeroIndex], input[currIndex] =  input[currIndex], input[zeroIndex]
        countSolutionRec(input, zeroIndex + 1, currIndex + 1, twoIndex)

    elif input[currIndex] == 1:
        countSolutionRec(input, zeroIndex, currIndex + 1, twoIndex)
    else:
        #currIndex == 2
        input[currIndex], input[twoIndex] =  input[twoIndex], input[currIndex]
        countSolutionRec(input, zeroIndex, currIndex, twoIndex - 1)
    return input

array1 = [2,0,2,1,1,0] 
array2 = [2,0,1]
countSolutionRec(array1,0,0,5)
countSolutionRec(array2,0,0,2)
print(array1)
print(array2)