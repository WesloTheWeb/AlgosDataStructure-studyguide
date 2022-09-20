/* Office Hour - Algo Marathon
 Date: 09/19/2022  ****NOT FINISHED****
PARTNERS: Ryan S.
QUESTION:
Given an array of N integers, generate all permutations of the given array.

Examples:
[1] -> [1]
[1, 2] -> [[1, 2], [2, 1]]

[1, 2, 3] -> [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
]

[1, 2] -> [[1, 2], [2, 1]]

PSEUDO CODE:
for every element
  store first element
  remove first element
  recurse(remaining arr) -> return built subsets so far
  for each subsets
    append first element


O(N!) time, O(N) space; N = length of input

APPROACH:
arr: [1,2,3]
res: []
1 <- [2,3]
fn([2,3], res)

arr: [2,3]
res: []
2 <- [3]
fn([3], res) -> [[3]]


3 <- [2]
fn([2],res) -> [[2]]

arr: [3]
res:[]
return [[3]]

#########################################*/

// Our attempt:

function helper(arr, resObj) {
    if (arr.length === 1) {
        return [arr]
    }

    const arrCpy = arr
    for (let i = 0; i < arr.length; i++) {
        const elToApp = arrCpy.shift()
        let perms = helper(arrCpy, resObj)
        perms.forEach(perm => {
            perm.push(elToApp)
            resObj.res.push(perm)
        })
        arrCpy.push(elToApp)
    }


}

function get_permutations(arr) {
    let resObj = { res: [] }
    helper(arr, resObj)
}


// Test Cases:



// Solution:



// Solution Test Cases: