"""
A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. 

Given a matrix, return true if it is a Toeplitz matrix and false otherwise.

This is a Toeplitz matrix:
1  2  3  4
5  1  2  3
9  5  1  2
7  9  5  1

This is not a Toeplitz matrix:
1  2
2  2


1234
x123
_x12
?_x1
"""

test_input = [
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2],
    [7,9,5,1]
]

def is_toeplitz_sana(matrix):
    rows = len(matrix)
    
    for i in range(1,rows):
        if matrix[i-1][:-1] != matrix[i][1:]:
            return False
    
    return True

test_input2 = [
    [1,2,3,4],
    [5,1,2,3],
    [10,5,1,2],
    [7,9,5,1]
]

print("Sana's test cases (l to r): ")
print(is_toeplitz_sana(test_input)) # True
print("should be True")
print(is_toeplitz_sana(test_input2)) # False
print("should be False")
print("************")


def is_toeplitz_frank(matrix):
    
    
    for i in range(1, len(matrix)):
        arr = [*matrix[i-1]]
        if arr[:-1] != matrix[i][1:]:
            return False
            
    return True
    
print(is_toeplitz_frank(test_input))
print(is_toeplitz_frank([[1,1,1],[2,2,2,]]))
print(is_toeplitz_frank([[1,1,1],[1,1,1]]))
            
        


def is_toeplitz_daniel(matrix):
    def topLeftToBotRight(row = 0, col = 0):
        startVal = matrix[row][col]
        while row < len(matrix) and  col < len(matrix[row]):
            if matrix[row][col] != startVal:
                return False
            row += 1
            col += 1

        return True

    # Start along top row.
    for rowIndex in range(len(matrix[0])):
        if not topLeftToBotRight(rowIndex):
            return False
            
    # Start along left column.
    for colIndex in range(len(matrix)):
        if not topLeftToBotRight(0, colIndex):
            return False

    return True

print("START running is_toeplitz_daniel")
print(is_toeplitz_daniel(test_input)) # Expect True
print(is_toeplitz_daniel([[1]])) # Expect True
print(is_toeplitz_daniel([[1, 1, 1], [1, 1, 1], [1, 1, 1]])) # Expect True
print(is_toeplitz_daniel([[1, 1, 1], [1, 1, 0], [1, 1, 1]])) # Expect False
print("END running is_toeplitz_daniel")


def is_toeplitz_funky(matrix, ltr=True):
    prev = [*matrix[0]]
    for i in range(1, len(matrix)):
        target_idx = 0
        if not ltr:
            target_idx = len(prev)-1
            
        new_item = matrix[i][target_idx]
        cur_row = matrix[i]
        target = [new_item, *prev[:-1]]
        if not ltr:
            target = [*prev[1:], new_item]
        if cur_row != target:
            return False
        prev = target
    return True

test_input_rtl = [
    [4,3,2,1],
    [3,2,1,5],
    [2,1,5,6],
    [1,5,6,7]
]

result = is_toeplitz_funky( test_input_rtl, False)
print(f"is_toeplitz_funky rtl result: {result}")