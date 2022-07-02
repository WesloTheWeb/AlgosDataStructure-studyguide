'''

Given a 3x3 lock screen in the following arrangement:

1 2 3
4 5 6
7 8 9

count the total number of unlock patterns that use N numbers.
A pattern is valid if the following criteria is met:
- no number is used more than once
- a path from one number to another does not directly pass through an unused number. eg:

2 -> 1 -> 3 is valid but 1 -> 3 is not valid because it directly passes through the unused number 2

NOTE: L-shaped traversals such as 2->9 or 3 -> 4 are considered to not pass through any numbers and are therefore always valid if these numbers have not already been used.

Examples:

1 2 3
4 5 6
7 8 9

4 -> 1 -> 3 -> 6 is invalid because 1 -> 3 passes through the unused 2
2 -> 4 -> 1 -> 3 -> 6 is valid
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 is valid

                                            root
                            1   2   3   4   5   6   7   8   9
                2 3 4 5 6 7 8 9
        
1 2
4 5

N = 1, output = 4
N = 2, output = 12
1 2
2 1
1 5
5 1
1 4
4 1
2 5
5 2
2 4
4 2
4 5
5 4

numPatterns(4)              // nothing has been picked yet
    numPatterns(3)          // 1 =>
        numPatterns(2)      // 1 => 1 (doesn't count)
        numPatterns(2)      // 1 => 2
            numPatterns(1)  // 1 => 2 => 1 (invalid)
            numPatterns(1)  // 1 => 2 => 2 (invalid)
            numPatterns(1)  // 1 => 2 => 3 (counts)
            numPatterns(1)  // 1 => 2 => 4 (counts)
            numPatterns(1)  // 1 => 2 => 5 (counts)
            numPatterns(1)  // 1 => 2 => 6 (counts)
            numPatterns(1)  // 1 => 2 => 7 (counts)
            numPatterns(1)  // 1 => 2 => 8 (counts)
            numPatterns(1)  // 1 => 2 => 9 (counts)
        numPatterns(2)      // 1 => 3
        numPatterns(2)      // 1 => 4
        numPatterns(2)      // 1 => 5
        numPatterns(2)      // 1 => 6
        numPatterns(2)      // 1 => 7
        numPatterns(2)      // 1 => 8
        numPatterns(2)      // 1 => 9
    numPatterns(3)          // 2 =>
        ... same as above
    numPatterns(3)      // 3 =>
        ... same as above
    numPatterns(3)      // 4 =>
    numPatterns(3)      // 5 =>
    numPatterns(3)      // 6 =>
    numPatterns(3)      // 7 =>
    numPatterns(3)      // 8 =>
    numPatterns(3)      // 9 =>


brute force:
 if n equals 0 or number is in the set of used numbers, then return 
 on each iteration iterate from the numbers 1 to 9
   
   add each selected number to a set of used numbers

give me all patterns of length 3
    select 1 for 1st digit => give me all patterns of length 2 that don't use 1
    select 2 for 1st digit => give me all patterns of length 2 that don't use 2
    ...
    select 9 for 1st digit =>

{
    [source]: {
        [dest]: [requiredItems]
    }
}

{
    1: {
        3: 2,
        9: 5,
        7: 4
    },
    2: {
        8: 5
    },
    3: {
        
    }
}

'''

def numPatterns(n: int, used):
    if n == 0:
        return 1

    nPatterns = 0
    
    for i in range(1, 10):
        # last = used[-1]
        # if i not in used and used.includes(reqs[last][i]):
        if i not in used:
            used.append(i)
            nPatterns += numPatterns(n - 1, used)
            used.pop()

    return nPatterns

print(numPatterns(2, []))