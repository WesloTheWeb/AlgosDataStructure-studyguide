/* Algo Mock Interviews
Date: 
PARTNERS:

QUESTION:
Suppose you're a school headmaster and somebody has drafted a course list
for a new program. Each course has an ID associated with it, and 
they may have prerequisites.

There are a total of numCourses courses you have to take, labeled 
from 0 to numCourses - 1. You are given an array prerequisites 
where prerequisites[i] = [ai, bi] indicates that you must take course 
bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

EXAMPLE(S)
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

FUNCTION SIGNATURE
function canFinish(numCourses: int, prerequisites: list[list[int]])
'''

Input: numCourses = 1, prerequisites = [[5,8]]
Output: false

APPROACH:
Notes:
- We need to figure out if its possible to take the course, bi before ai.
figure out if we can take it if its not in this order:
[[1,0],[0,1]] is not okay
[[1,0]] is okay

- we need to check that for a given pair that its unique in the sense of the ordering.
check if bi != ai

  ai bi  ai bi
[[1, 0],[0, 1]] 
- make sure each pair / tuble is not an inverse of each other.
- since nested array, can use brackets to check index of ai,bi at each element.

edge / questions
- can there be duplicate numbers?
- is the array in a specific order?

Approach:
- Given a nested array, iterate through the array, and store each value we come across into a pair of variables of the previous tuble. 
  - check against their bracket index to see if its an inverse, if inverse return false else just continue


PSEUDO CODE:


 
PRO-TIP:
The trick here is to leverage the fact that if you do a depth first search traversal from a node, 
you can detect cycles if you end up in a node where you started. In computer science terms, this is called a back edge.

Similar to backtracking, we store a set of nodes visited from the start of a DFS call. 
If we end up in a node we already processed, we have a cycle. 

Time Complexity:
Space Complexity:
#########################################*/

// My attempt:
function canFinish(numCourses, preReqs) {
    // outer array
    for (let i = 0; i < preReqs.length; i++) {
        // inner array
        for (let j = 0; j < preReqs[i]; j++) {
            // do our check
            if (preReqs[i][j] === preReqs[i + 1][j + 1]) {
                return false;
            }
        }
    }

    return true;
};


// Test Cases:


// Solution: 
function detectCycle(adjacencyList, visited, pathTaken, currCourse) {
    if (visited.has(currCourse)) {
        return false;
    }

    if (pathTaken.has(currCourse)) {
        return true;
    };

    pathTaken.add(currCourse);
    let neighborCourses = adjacencyList[currCourse];
    for (let i = 0; i < neighborCourses.length; i++) {
        let neighborCourse = neighborCourses[i];
        if (detectCycle(adjacencyList, visited, pathTaken, neighborCourse)) {
            return true;
        };
    };

    visited.add(currCourse);
    pathTaken.delete(currCourse);
    return false;
};

function buildAdjacencyList(numCourses, prerequisites) {
    let output = {};
    for (let i = 0; i < numCourses; i++) {
        output[i] = [];
    };

    for (let i = 0; i < prerequisites.length; i++) {
        let [course, requiredCourse] = prerequisites[i];
        output[course].push(requiredCourse);
    };
    
    return output;
};

function canFinish(numCourses, prerequisites) {
    let adjacencyList = buildAdjacencyList(numCourses, prerequisites);
    let visited = new Set();

    for (let course in adjacencyList) {
        if (!visited.has(course)) {
            let hasCycle = detectCycle(adjacencyList, visited, new Set(), course);
            if (hasCycle) {
                return false;
            };
        };
    };

    return true;
};

// Solution Test Cases:
