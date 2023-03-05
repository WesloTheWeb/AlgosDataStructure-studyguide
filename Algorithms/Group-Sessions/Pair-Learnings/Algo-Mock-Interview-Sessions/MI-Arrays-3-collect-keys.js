/* Algo Mock Interviews
Date: March 2nd
PARTNERS: Max
TYPE: Interval

❓ PROMPT:
Today, you will be given the problem to collect keys.
You are moving out the office and need to collect everyone's keys before they leave. 
Unfortunately, everyone has different schedules so you can't just collect all the keys at once. 

You want to visit the office as few times as possible to collect everyone's keys.
Given a [[Int]] representing people's schedules, return the least number of times you'll need to visit to collect keys.

**EXAMPLE(S)**
[[10, 16], [2 8], [1, 6], [7, 12]]

Should return 2. You could visit at 6 and then at 10 to collect all the keys.
worker 0      1      2         3
[[10, 16], [2 8], [1, 6], [7, 12]]

APPROACH:
- First sort the array to think of this as times. We need to account for overlaps in these intervals.
    Sort the array: array.sort((a,b)=>a[0]-b[0]) 

*/

//Initial Attempt
function minVisits(schedule) {
    const numOfVisits = 1; // should be a LET

    const sortedSchedule = schedule.sort((a, b) => a[0] - b[0]);
    let current = sortedSchedule[0]

    for (let i = 0; i < sortedSchedule.length - 1; i++) {
        // check of overlaps

        // console.log("current", sortedSchedule[i])
        // console.log("next", sortedSchedule[i + 1])
        if (sortedSchedule[i][0] > current[1]) {
            //[[1,6], [2, 8], [7, 12], [10, 16]]
            // console.log('start times', sortedSchedule[i][0])
            current = sortedSchedule[i];
            numOfVisits += 1;
        }
    };

    return numOfVisits;
}

const test1 = [[10, 16], [2, 8], [1, 6], [7, 12]]

console.log(minVisits(test1))

// Solution
function collectKeys(schedules) {
    // Sort schedules by their start times
    schedules.sort((a, b) => a[0] - b[0]);
    
    let numVisits = 0;
    let currentEnd = 0;
    
    // Merge overlapping schedules
    for (let i = 0; i < schedules.length; i++) {
      const [start, end] = schedules[i];
      
      if (start > currentEnd) {
        // Need to make another visit to collect keys
        numVisits++;
        currentEnd = end;
      } else {
        // Merge with current visit
        currentEnd = Math.max(currentEnd, end);
      }
    }
    
    return numVisits + 1; // Add one more visit to collect the last set of keys
  }