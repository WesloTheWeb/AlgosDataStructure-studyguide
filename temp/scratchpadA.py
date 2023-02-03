/*
The trick here is to leverage the fact that if you do a depth first search traversal from a node, you can detect cycles if you end up in a node where you started. In computer science terms, this is called a back edge.
Similar to backtracking, we store a set of nodes visited from the start of a DFS call. If we end up in a node we already processed, we have a cycle. 
/*
'''
Suppose you're a school headmaster and somebody has drafted a course list for a new program. Each course has an ID associated with it, and they may have prerequisites.

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

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

*/

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
/*
adjacencyList = {
  0: [a, b]
  1: []
  2: [c, d]
}

     0
    / \
   a   b  

*/
def detect_cycle(adjacency_list, visited, path_taken, curr_course):
    if curr_course in visited:
        return False
    if curr_course in path_taken:
        return True

    path_taken.add(curr_course)
    neighbor_courses = adjacency_list[curr_course]
    for neighbor_course in neighbor_courses:
        if detect_cycle(adjacency_list, visited, path_taken, neighbor_course):
            return True
        
    visited.add(curr_course)
    path_taken.remove(curr_course)
    return False

def build_adjacency_list(num_courses, prerequisites):
    output = dict()
    for course in range(num_courses):
        output[course] = []
        
    for course, required_course in prerequisites:
        output[course].append(required_course)
    return output

def can_finish(num_courses, prerequisites):
    adjacency_list = build_adjacency_list(num_courses, prerequisites)
    visited = set()
    for course in adjacency_list.keys():
        if course not in visited:
            has_cycle = detect_cycle(adjacency_list, visited, set(), course)
            if has_cycle:
                return False
    return True



// https://leetcode.com/problems/permutations/
// https://neetcode.io/
// https://www.techinterviewhandbook.org/grind75?weeks=6
// https://www.youtube.com/watch?v=oBt53YbR9Kk&t=179s








