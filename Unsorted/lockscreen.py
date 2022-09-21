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

countPatterns(1) === 9

countPatterns(3) 
  countPatterns(2) // first number is 1
    countPatterns(1) // second number is 2
      countPatterns(0) // third number is 3
      countPatterns(0) // third number is 4
      countPatterns(0) // third number is 5
      countPatterns(0) // third number is 6
      countPatterns(0) // third number is 7
      countPatterns(0) // third number is 8
      countPatterns(0) // third number is 9
    countPatterns(1) // second number is 3
    countPatterns(1) // second number is 4
    countPatterns(1) // second number is 5
    countPatterns(1) // second number is 6
    countPatterns(1) // second number is 7
    countPatterns(1) // second number is 8
    countPatterns(1) // second number is 9
  countPatterns(2) // first number is 2
  countPatterns(2) // first number is 3
  countPatterns(2) // first number is 4
  countPatterns(2)
  countPatterns(2)
  countPatterns(2)
  countPatterns(2)
  countPatterns(2)

countPatterns(n, path)
  base case
  if n == 0:
    return 1

  total = 0
  for all nums i between 1 and 9 not in path
    path.add(i)
    total += countPatterns(n - 1, path)
  return total
  
Approach -> 

1. DFS approach to the 2d grid. Filter out patterns that have unused numbers. Count everything else.  

const countPatterns = (patternLength) => {

}

console.log(countPatterns(1)); // 9
console.log(countPatterns(2)); // 72
console.log(countPatterns(3)); // 504


path = "678"
num = 4

1 2 3
4 5 6
7 8 9

(1, 3) 2
(1, 9) 5
1, 7 4
2 -> 8 (5)
4 -> 6 (5)


isValid(num)
- check if num in path
    - false
- for i in between num and previous
    - if i is not in path
        - return false

{
    [source]: {
        [destination]: requirement
    }
}

1 2 3
4 5 6
7 8 9

JUMP_MAP = {
    1: {
        3: 2,
        7: 4,
        9: 5
    },
    2: {
        8: 5
    }, 
    3: {
        1: 2,
        7: 5,
        9: 6
    },
    4: {
        6: 5
    },
    6: {
        4: 5
    },
    7: {
        1: 4,
        3: 5,
        9: 8
    },
    8: {
        2: 5
    },
    9: {
        7: 8,
        1: 5,
        3: 6
    },
}


'''


def count_patterns(n, path = []):
    JUMP_MAP = {
        1: {
            3: 2,
            7: 4,
            9: 5
        },
        2: {
            8: 5
        }, 
        3: {
            1: 2,
            7: 5,
            9: 6
        },
        4: {
            6: 5
        },
        6: {
            4: 5
        },
        7: {
            1: 4,
            3: 5,
            9: 8
        },
        8: {
            2: 5
        },
        9: {
            7: 8,
            1: 5,
            3: 6
        },
    }
    if n == 0:
        return 1

    total = 0

    # if JUMP_MAP[path[-1]][i] && JUMP_MAP[path[-1]][i] in path

    for i in range(1, 10):
        if len(path) == 0 or i not in path and i in JUMP_MAP[path[-1]][i].keys() and JUMP_MAP[path[-1]][i] in path:
            # if JUMP_MAP[path[-1]][i] in path
            # if i in JUMP_MAP[path[-1]].keys() and JUMP_MAP[path[-1]][i] in path:
            path.append(i)
            total += count_patterns(n - 1, path)
            path.pop()
    
    return total

print(count_patterns(1)) # 9
print(count_patterns(2)) # 72
print(count_patterns(3)) # 504