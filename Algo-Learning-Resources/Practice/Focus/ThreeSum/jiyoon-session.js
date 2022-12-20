/*################################################
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals to a target sum (a + b + c = targetSum).

Examples:
• Given an array: [1, 2, 0] returns: []
• Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
• Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]
#################################################*/
/*
[-1, 0, 1, 0, 1]  target 0 
- sort the initial array
- instantiate our 3 pointers

target sum = 1
[-1, 0, 0, 1, 2]
  C
            L
              R  

  [-1, 0, 1] === 0 
  [0, 0, 1] !== 0

      i
      l 
              r
    1 1 2 3 4 5

    sum = 8
    target = 10

  1. sort the array, and create array variable for triplets
  2. for loop C-pointer which will iterate through the array 
  3. Create our pointers Lo and Hi 
  4. instiantiate currentSum variable sum of array[C] + array[lo] + array[hi] 
  5. if currentSum === targetSum push to the triplet array 
  6. if currentSum < targetSum move our Lo pointer to the right
  7. if currentSum > targetSum move our Hi pointer to the left
  8. move C pointer if duplicates found - we want to avoid having duplicates in our triplet result.
      
  
  
  1. iterate through array
    - 3 pointers
    - current = i low = i + 1, high = len(array) - 1
  2. for each iteration in step 1, skip iteration where we've seen array[i] before.
  3. while loop for low < high, 
    - current sum comparison to 0, move low or high as appropriate
    - skip iteration where we've seen array[low] or array[high] before.


            c
              l 
                  h
      -1 -1 0 0 1 1
*/
function tns(input) {

  input.sort((a, z) => a - z);
  let triplets = [];

  for (let i = 0; i < input.length; i++) { //top for loop, control c-pointer
    let lo = i + 1;
    let hi = input.length - 1;

    // skip duplicates of i if i've seen that value before
    while (input[i] === input[i - 1]) {
      i++;
    }

    while (lo < hi) {
      let currentSum = input[i] + input[lo] + input[hi];
      // check for low and high duplicates here 
      /*

          l
                      h
      1 1 1 2 3 4 5 5 5
      */
      while (input[lo] === input[lo - 1]) {
        lo++;
      }

      if (currentSum === 0) {
        triplets.push([input[i], input[lo], input[hi]]);
        lo++;
        hi--;
      } else if (currentSum < 0) {
        lo++;
      } else if (currentSum > 0) {
        hi--;
      }
    }
  };

  return triplets;
};


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

function arrayify(head) {
  var ptr = head
  var array = []
  while (ptr != null) {
    array.push(ptr.value)
    ptr = ptr.next
  }
  return array
}

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}

function arrayifyTree(root) {
  if (!root) { return [] }
  var queue = []
  var array = []
  queue.push(root)
  while (queue.length !== 0) {
    var node = queue.shift()
    array.push(node.value)
    if (node.left) { queue.push(node.left) }
    if (node.right) { queue.push(node.right) }
  }
  return array
}

// Test Cases
test.startProblem("Three Number Sum")
test.testForArrays([], tns([]), 1)
test.testForArrays([[-1, 0, 1]], tns([-1, 0, 1]), 2)
test.testForArrays([[-1, 0, 1]], tns([-1, -1, 1, 1, 0, 0]), 3)
test.testMatchAny([[-1, 0, 1], [-5, 1, 4]], tns([-5, -1, 0, 1, 4, -1]), 4)
test.endProblem()