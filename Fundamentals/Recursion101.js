// Here is a basic function that countdowns. We can do iteratively or recursively:

const countDownRecursive = (num) => {
    // base case
    if (!num) {
        console.log('All done!!');
        return;
    };
    console.log(num);
    num--;
    return countDownRecursive(num);
};

// Test Cases:
countDownRecursive(27);

// Iterative Approach

const countDown = (num) => {
    for (let i = num; i > 0; i--) {
        console.log(`Iterative Countdown: ${i}`);
        num--
    };
    console.log(`Iterative finished: ${num}`);
};

countDown(5);
console.log(`#############################`);
/*##########################
Common Recursive Functions
- Similar to Fibonacci
###########################*/

const sumRange = (num) => {
    // base case
    if (num === 1) return 1;

    // recursive case
    return num + sumRange(num - 1);
};

/* Whats Happening:
sumRange(3)
    return 3 + sumRange(2) 
                    return 2 + sumRange(1) // Turns into: 2 + 1 = 3
    3 + 3 = 6

    Call Stack
sumRange(1)   // 1
sumRange(2)   // 2 + 1
sumRange(3)   // 3 + 2 + 1

 - it awaits the sum of the subsequent and we go down the stack top to bottom.
*/
// Test Cases
console.log(`Example 2: ${sumRange(3)}`) // 6
console.log(`Example 2: ${sumRange(4)}`) // 10
console.log(`Example 2: ${sumRange(5)}`) // 15

console.log(`#############################`);

/*###############################
Example 3 - Factorial Recursion
################################*/

// Iterative Approach
const factorial = num => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    };

    return total;
};

// Test Case
console.log(`Example 3 (Iterative): ${factorial(3)}`); // 6
console.log(`Example 3 (Iterative): ${factorial(4)}`); // 24
console.log(`Example 3 (Iterative): ${factorial(5)}`); // 120

const factorialRecursive = num => {
    // base case
    if (num === 1) return 1;

    // recursive case
    return num * factorialRecursive(num - 1);
};

console.log(`Example 3 (Recursive): ${factorialRecursive(3)}`); // 6
console.log(`Example 3 (Recursive): ${factorialRecursive(4)}`); // 24
console.log(`Example 3 (Recursive): ${factorialRecursive(5)}`); // 120

/*###############################
HELPER METHOD RECURSION PATTERN
################################*/

// Pattern, code doesn't do anything but just a skeleton layout:
function outer(input) {
    let outerScopedVariable = [];

    const helper = (helperInput) => {
        // code here that modifies the outerScopedVariable
        helper(helperInput--);
    };

    helper(input);

    return outerScopedVariable;
};

console.log(`#############################`);

// Concrete Example: Collect all the odd values in an array:

const collectOddValues = (arr) => {

    let result = [];

    const helper = (helperInput) => {
        // base case
        if (helperInput.length === 0) {
            return;
        };

        // recursive case
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        };

        helper(helperInput.slice(1)); // do not start on zero based.
    };

    helper(arr);

    return result;
};

// Test Case
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1, 3, 5, 7, 9
console.log(`Helper Method Recursion Example: ${collectOddValues(array1)}`);

console.log(`#############################`);
