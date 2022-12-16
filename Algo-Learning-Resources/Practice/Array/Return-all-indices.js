/*######################################################################################
QUESTION:
Given an array and a target value X, return an array of all indices containing value X.

##########
EXAMPLES
##########
console.log(indicesOfTarget([30,30,30], 30) == [0,1,2])
console.log(indicesOfTarget([3, 2, 5, 5, 1], 5) == [2,3])


Expected Questions
If you were presented with this question in an interview, these are some questions(s) you might want to ask:
Q. If the target does not appear in the original array, should I return an empty array?
A. Yes.
Q: Does the output order matter?
A: Yes and no. As long as every index is there only once, then that's fine. However, 
this problem should be done in the simplest way possible. What order will that put the output in?

#################
Expected Runtime
##################
Time: O(n) going through 1 pass
Space:  O(n) length of the array

- create results array
- Use a for loop traditional since we want the indices to return.
- If target value is found, push index into results array.
- return results aarray
######################################################################################*/

function indicesOfTarget(input, target) {
    const res = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === target) {
            res.push(i);
        };
    }

    return res;
};


/*###############
TEST CASES
    empty list
    array with 1 element and target is present
    array with 1 element and target isn't present
    array with multiple elements and target is present
    array with multiple elements and target isn't present
    array with multiple elements and target is present multiples times
    array with multiple elements and target is the only value
################*/

const solution = (arr, num) => {
    const indices = [];

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === num) indices.push(i);

    return indices;
}

/* Explanation of solution:
Create a results array. Iterate through the input array using a loop where you have access to the current index. 
Every time you see a value that matches the target, push the current index into the results array. Return the results array.
*/