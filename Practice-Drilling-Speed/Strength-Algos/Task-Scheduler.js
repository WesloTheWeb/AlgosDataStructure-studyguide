import Test from "./Test-dependency";

/*################################
LEETCODE: https://leetcode.com/problems/task-scheduler/
✏️ Description
Q. Given an array of strings representing tasks, return the least number of units of times need to complete all given tasks. 
##################################
*/

function taskScheduler(tasks, n) {
    // Write your code here.
}

// Test Cases
test.startProblem("Task Scheduler")
test.test(6, taskScheduler(["B","B","B","A","A","A"], 0), 1)
test.test(8, taskScheduler(["E","E","E","D","D","D"], 2), 2)
test.test(16, taskScheduler(["A","A","A","A","A","A","B","Y","Z","E","F","G"], 2), 3)
test.endProblem()

{Test}