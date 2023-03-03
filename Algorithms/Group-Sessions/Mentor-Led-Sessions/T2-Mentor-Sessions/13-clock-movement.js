/*########################
TYPE: Algorithm
Question:
Given a time given in the hh:mm format, return the angle (to the closest whole degree) 
between the hour and the minute hands.

Examples:

12:00 returns 0
12:30 returns 165
6:00 returns 180

min is 0 , max is 180
am, pm doesnt matter
always return the smaller angle

2:03 - how do we compute this?
min hand doesn't depend on the hour hand, but hour hand depends onthe min hand

degrees for min hand
60 * x = 360
x = 6deg

degrees for hour hand
12 * y = 360
y = 30deg

hr hand moves per min
60 * z = 30
z = 0.5deg

2:03
3minutes = 18degrees
2hours = 60degree + (3min * 0.5) = 61.5degrees

final = 61.5 - 18 = 43.5deg

9:55
55min = 330degrees
9hrs = 270 + (55min * 0.5) = 297.50
final = 330 - 297.50 = 32.5
find min of final and 360 - final

Approach:
- calculate minutes to degrees
  - calculatedMinutes = minutes * 6
- calculate the hrs
  - calculatedHrs = (hrs * 30) + (microMovement)
  - microMovement = (mins * 0.5)
- calculate the final degrees
  - abs(calculatedMinutes - calculatedHrs)
- return the min between final and 360 - final

- what is a minute in degrees?
- 1min = 6 degrees
- 15min = 90 degrees
- 45min = 270 degrees 
- 1hr = 30 degrees

For the hour hand:
- hour hand moves a micro movement every min, moves 0.5 degrees

hour hand at 2:30 will be half-way between 2 and 3
how much does the hr hand move per minute?

Time Complexity:
Space Complexity:

 
########################*/

const DEGREES_PER_MIN = 6;
const DEGREES_PER_HOUR = 30;

const findAngleBetweenClockHands = (hour, minute) => {
  const minuteInDegrees = minute * DEGREES_PER_MIN;
  const hoursInDegree = (hour * DEGREES_PER_HOUR) + (minute * 0.5);
  
  const finalDegree = Math.abs(minuteInDegrees - hoursInDegree)

  return Math.min(finalDegree, (360 - finalDegree));
  
}

// Test Cases:
console.log(findAngleBetweenClockHands(12, 0)); // 0
console.log(findAngleBetweenClockHands(12, 30)); // 165
console.log(findAngleBetweenClockHands(2, 3)); // 43.5
console.log(findAngleBetweenClockHands(9, 55)); // 32.5
console.log(findAngleBetweenClockHands(1, 50)); // 115
console.log(findAngleBetweenClockHands(6, 0)); // 180