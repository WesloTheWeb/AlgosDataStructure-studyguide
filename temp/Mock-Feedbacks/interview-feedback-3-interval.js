// TODO: August 15
/*
Aug. 15th, 2023 
Interviewer: Andrew Miner
Question:
We need to figure out when a certain factory machine is available for scheduling work. We are told when the shifts are (i.e., when it is possible to work), and when the breaks are (i.e., when it is not possible to work).  However, neither list has any guarantees about:

* being any particular size
* being in any particular order
* not overlapping with other shifts / breaks

The output should be a list of time periods during which the machine is available for work.  This list must be ordered and non-overlapping.

# Example Scenarios

1. Day shift with a lunch break
shifts = [(9, 17)]
breaks = [(12, 13)]
output = [(9, 12), (13, 17)]
- 

2. Down for maintenance all afternoon
shifts = [(9, 17)]
breaks = [(12, 13), (12, 17)]
output = [(9, 12)]

3. Three shift rotation with meal breaks
shifts = [(9, 17), (16, 24), (23, 31)]
breaks = [(12, 13), (19, 20), (26, 27)]
output = [(9, 12), (13, 19), (20, 26), (27, 31)]

4. National holiday
shifts = [(9, 17)]
breaks = [(9, 17), (12, 13)]
output = []
- holiday, break time just covers the whole shift, resulting no outpuit
- cant break if two breaks overlap

5. Machine breaks down during shift
shifts = [(9, 17), (23, 31)]
breaks = [(15, 20)]
output = [(9, 15), (23, 31)]

shift - where work is starting, people working
breaks - when work cannot proceed. machine or human not there break
output - availability

we are given a shifts and breaks array, figure output.
we want to figure output of availability array of tuples.
- Start inclusive, end is exclusive.
APPROACHES: 
- sort the breaks and shifts array.
  - gives us structure to find overlaps and gaps of breaks and shifts.

1. Day shift with a lunch break
shifts = [(9, 17)]
breaks = [(12, 13)]
moments = [9ss, 12bs, 13be, 17se]
                                   ^
index = 4
inShift = false
inBreak = false
output = [(9, 12), (13, 17)]





let results = []
for (let moment of moments) {
  if (moment.kind === "shift-start") {
    ... new TimePeriod(moment.timestamp, null, "shift")
    if (moment.break ) will be our timePeriod.end
  } else (...) {
    ...
  }
}

for
if
while
assignment
expression

start - (moments[0], moments[1]), (moments[2], moments[3]) 

- iterate over moments,
 - we hit breaks[0].start, that will give us the range 9 - 12
 - breaks[0].end is the new start go to 17, 13 - 17
 

output = []          //       [(9, 12), (13, 17)]
-  compare the 0th index of the shift tuple and break tuple,

shifts[0].start to breaks[0].start --> our first output tuple
shifts[0].end to breaks[0].end



*/

function computeAvailability(shifts, breaks) {
    // shifts: Array[TimePeriod]
    // breaks: Array[TimePeriod]
    // return Array[TimePeriod]
  }
  
  class TimePeriod {
    constructor(start, end, kind) {
        this.start = start; // int: ms since 1970
        this.end = end; // int: ms since 1970
        this.kind = kind; // string: "shift" | "break"
    }
  
    addMoments(moments) {
        moments.push(new Moment(this.start, this.kind + "-start"));
        moments.push(new Moment(this.end, this.kind + "-end"));
    }
  }
  
  class Moment {
      constructor(timestamp, kind) {
          this.timestamp = timestamp; // int: ms since 1970
          this.kind = kind; // string: "shift-start" | "break-end" | ...
      }
  }

  /* INTERVIEW TAKE-AWAYS
  - Don't be afraid to ask for help if stuck. Its a meter, worth asking for help than to waste time. 
  - All else fail diagram of approach drawing on comments.

  */