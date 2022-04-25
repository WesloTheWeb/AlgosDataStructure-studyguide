/*##################
 Tier 2 Algorithm
 NAME: Three Sum
 TYPE: Array
####################
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals zero (a + b + c = 0).

Examples:
• Given an array: [1, 2, 0] returns: []
• Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
• Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]

#########################
HIGH LEVEL APPROACH:
##########################
triplets = [[-1, 0, 1]]
currSum = 0
  0   1  2  3  4  5
[-1, -1, 0, 0, 1, 1];
  C  
         L
                  R

NOTES:
2 Sum
  - Unsorted Input
  - To solve -> use a dictionary
2 Sum II
  - Sorted Input
  - Use two pointers
*/

function tns(input) {
    // Write your code here.
    let triplets = [];
    input.sort((a, z) => a - z);

    for (let i = 0; i < input.length - 2; i++) {
        let left = i + 1;
        let right = input.length - 1;
        if (i > 0 && input[i] === input[i - 1]) continue;

        while (left < right) {
            let currentSum = input[i] + input[left] + input[right];

            if (currentSum === 0) {
                triplets.push([input[i], input[left], input[right]]);
                left++;
                while (input[left] === input[left - 1]) { // skips duplicates for the 2SUM part
                    left++
                };
            } else if (currentSum < 0) {
                left++;
            } else if (currentSum > 0) {
                right--;
            };
        };
    };

    return triplets;
};


// test cases
console.log(tns([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0),
      [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1]]) // wrong, 4 triplets

console.log(tns([-2, 0, 1, 1, 2], 0), [[-2, 0, 2], [-2, 1, 1]]) // correct
console.log(tns([-1, 0, 1, 2, -1, -4], 0), [[-1, -1, 2], [-1, 0, 1]]) // correct

console.log('from test harness below')
console.log(tns([-1, -1, 1, 1, 0, 0]), [[-1, 0, 1]])
console.log(tns([-5, -1, 0, 1, 4, -1]), [[-1, 0, 1], [-5, 1, 4]])


class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }

    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }

    testMatchAny(expected_outcome, outcome, case_num) {
        if (this.isEqual(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    isEqual(array1, array2) {
        var sortedArr1 = []
        var sortedArr2 = []
        for (var a1 of array1) {
            sortedArr1.push(a1.sort())
        }
        for (var a2 of array2) {
            sortedArr2.push(a2.sort())
        }
        return this.compareArrays(sortedArr1.sort(), sortedArr2.sort())
    }

    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}

var test = new Test("")

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

// Test Cases
test.startProblem("Three Number Sum")
test.testForArrays([], tns([]), 1)
test.testForArrays([[-1, 0, 1]], tns([-1, 0, 1]), 2)
test.testForArrays([[-1, 0, 1]], tns([-1, -1, 1, 1, 0, 0]), 3)
test.testMatchAny([[-1, 0, 1], [-5, 1, 4]], tns([-5, -1, 0, 1, 4, -1]), 4)
test.endProblem()