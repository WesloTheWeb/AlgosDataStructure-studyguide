//TODO: Review this interval problem
function minVisits(schedule) {
    let numOfVisits = 1;

    const sortedSchedule = schedule.sort((a, b) => a[0] - b[0]);
    let current = sortedSchedule[0]
    console.log(current[0], current[1])

    for (let i = 0; i < sortedSchedule.length - 1; i++) {
        // check of overlaps

        // console.log("current", sortedSchedule[i])
        // console.log("next", sortedSchedule[i + 1])
        // if (sortedSchedule[i][0] > current[1]) {
          if (current[1] < sortedSchedule[i][0]) {
            //[[1,6], [2, 8], [7, 12], [10, 16]]
            // console.log('start times', sortedSchedule[i][0])
            current = sortedSchedule[i];
            numOfVisits += 1;
        }
    };

    return numOfVisits;
}

const test1 = [[10, 16], [2, 8], [1, 6], [7, 12]]

console.log(minVisits(test1));