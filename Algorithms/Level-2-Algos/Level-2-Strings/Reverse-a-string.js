/*##################
TYPE: String Manipulation
- Write a function that can reverse the following strings:
Example:
    - Lived -> Devil
    - uwu -> uwu
    - Lime -< Emil

APPROACH:
1.) Take a string, break it into each character in an array
2,) Now that it is an array format two options:

3A.) use the built in reverse method and join the string
3B.) iterate backwards from the array (most proper way to do it.)
####################*/

/*
Q. Given a string, reverse the string word by word.

Note:
• Remove any extra white space (e.g. "b a" -> "a b" // only keep 1 whitespace).
• Remove any leading or trailing white spaces (e.g. " Hi " -> "Hi").

Examples:
• Given a string: "I love programming" // returns: "programming love I"
• Given a string: " " // returns: ""


Put the input string into an array 
clone the str splice copy of int
2 ways:
- split, reverse(), join
- use for loop, reverse i--

result = ["there", "hi"]
"  hi there".split(" ") ["", "", "hi", "there"]

for each element in wordArray:
  if current element is not ""
    push to reverseWordArray
*/

function rw(input) {
    let newStr = input;
  
    let wordArray = newStr.split(' ') // converts string to array
    let reverseWordArray = [];
  
    for (let i = wordArray.length - 1; i >= 0; i--) {
      if (wordArray[i] !== "") {
        reverseWordArray.push(wordArray[i]);
      }; 
    };
  
    return reverseWordArray.join(' ');
  };
  
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
  
  // rw("  a");
  // rw("hello world!");
  
  
  // Test Cases
  test.startProblem("Reverse Words In String")
  test.test("world! hello", rw("  hello world!  "), 1)
  test.test("", rw(""), 2)
  test.test("", rw("   "), 3)
  test.test("a", rw("  a"), 4)
  test.endProblem()