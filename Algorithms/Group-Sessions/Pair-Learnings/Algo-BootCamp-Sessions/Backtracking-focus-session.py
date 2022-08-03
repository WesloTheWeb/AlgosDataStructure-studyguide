# getSeatingArrangements(['B', 'G', 'N'])
# > [['B', 'G', 'N'], ['B', 'N', 'G'], ['G', 'B', 'N'], ...]

# (3) * (2) * (1) = 3!
# (N) * (N - 1) * (N - 2) * ... * 2 * 1 = N!       

def fn(input):
    solutions = []
    fnHelper([], input, solutions)
    return solutions

def isValid(partialSoln):
    # Problem-dependent validity check
    # For example, check if there are more students
    # than we started off with; ...
    return True

def fnHelper(partialSoln, choices, solutions):
    if not isValid(partialSoln):
        return
    
    if len(choices) == 0:
        solutions.append(partialSoln)
        return

    for choice in choices:
        # 1. 'Make' that choice -- Add it to my partial solution.
        
        # 2. Remove that choice from my choices.

        # 3. Call recursively.
        fnHelper(partialSoln, choices, solutions)

        # OPTIONAL:
        # 4. Add that choice back to my choices.
        # 5. Remove it from partial solution.



def getSeatingArrangements(students):
    solutions = []
    getSAHelper([], students, solutions)
    return solutions

def isValid(partialSoln):
    # Problem-dependent validity check
    # For example, check if there are more students
    # than we started off with; ...
    return True

def getSAHelper(partialSoln, choices, solutions):
    if not isValid(partialSoln):
       return
    
    if len(choices) == 0:
        solutions.append(partialSoln)
        return

    for choice in choices:
        # 1. 'Make' that choice -- Add it to my partial solution.
        partialSolnCopy = partialSoln.copy()
        partialSolnCopy.append(choice)

        # 2. Remove that choice from my choices.
        choicesCopy = choices.copy()
        choicesCopy.remove(choice)

        # 3. Call recursively.
        getSAHelper(partialSolnCopy, choicesCopy, solutions)

        # OPTIONAL:
        # 4. Add that choice back to my choices.
        # 5. Remove it from partial solution.

print(getSeatingArrangements(['B', 'G', 'N']))

        