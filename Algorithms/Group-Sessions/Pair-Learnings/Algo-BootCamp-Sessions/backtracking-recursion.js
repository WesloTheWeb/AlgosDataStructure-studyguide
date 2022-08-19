/*
Find all unqiue combinations of [B,G,N] -> 3!, 6 permutations
                                [B, G, N, A, C] -> 5!

[][][]
[][][]
[][][]
- iterate through whole grid, each cell
- drill down to each individual cell
- if cell is empty:
- if cell is populated:

problems to try
1 - sudoku
2 - n-queens
3 - anagrams
4 - anagrams + valid word
*/

function fn(input) {
    const solutions = [];
    fnHelper([], input, solutions);
    return solutions;
}

function fnHelper(partialSoln, choices, solutions) {
    if (!isValid(partialSoln)) {
        return;
    }

    if (choices.length == 0) {
        // Might want to check if partialSoln is 'correct'.
        // For example, for sudoku, you can get partialSolns
        // that are incorrect.
        solutions.push(partialSoln);
        return;
    }

    for (var i = 0; i < choices.length; i++) {
        const choice = choices[i];

        // 1. "Take a path": Add that choice to my partial soln.

        // 2. Remove that choice from my list of choices.

        // 3.
        fnHelper(partialSoln, choices, solutions)

        // 4. Undo 2: Add that choice back to the list of choices.
        // 5. Undo 1: Remove that choice from the partial solns.
    }

}

// getSeatingArrangements(['B', 'G', 'N'])
// > [ ['B', 'G', 'N'], ['B', 'N', 'G'], ...]
/*
3! = 3 * 2 * 1
 
*/

function getSeatingArrangements(students) {
    const solutions = [];
    getSAHelper([], students, solutions);
    return solutions;
}

function getSAHelper(partialSoln, choices, solutions) {
    if (choices.length == 0) {
        solutions.push(partialSoln);
        return;
    }

    for (var i = 0; i < choices.length; i++) {
        const choice = choices[i];

        // 1. "Take a path": Add that choice to my partial soln.
        const partialSolnCopy = [...partialSoln];
        partialSolnCopy.push(choice);

        // 2. Remove that choice from my list of choices.
        const choicesCopy = [...choices];
        choicesCopy.splice(i, 1);

        // 3.
        getSAHelper(partialSolnCopy, choicesCopy, solutions);
    }
}

console.log(getSeatingArrangements(['B', 'G', 'N']));
console.log(getSeatingArrangements(['B', 'G', 'N', 'A', 'C']));