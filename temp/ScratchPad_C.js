/* 
Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.


Target runtime and space complexity:
 Runtime: O(n)
Space: O(1)

Examples:
{"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5} => true
{"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5} => false
*/

const canMatchFellows = (input) => {

};

// Formation solution:
// Here's our explanation of the solution:
// Create an empty set to hold skill ratings.
//  Iterate through the input dictionary, 
// For each Fellow, if their skill rating already exists in the set, remove the element from the set and move on. 
// If the skill rating doesn't already exist in the set, add it and move on. At the end, return true if the set is empty (which means there are no Fellows without a match)
function matchFellows(input) {
  let skillSet = new Set()
  for (let fellow in input) {
    let skill = input[fellow]
    if (skillSet.has(skill)) {
      skillSet.delete(skill)
    } else {    
      skillSet.add(skill)
    }
  }
  return skillSet.size == 0
}

// Test Cases:
console.log(matchFellows({})) // true
console.log(matchFellows({ "oliver": 1 })) // false