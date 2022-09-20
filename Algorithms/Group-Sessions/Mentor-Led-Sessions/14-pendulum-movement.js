/*########################
TYPE: ARRAY
Key Take-Away: Similar to clock movement. Best to go over pseudo-code and approach before code to really understand.
Question:
Given a distance d, a pendulum starts at d and swings from d to negative d and back. 
For example, given distance 3, the pendulum goes 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3 and back again. 
Given a time t, return the position that the pendulum is at, starting at time 0.


Example:
In this example, 0 returns 3, 1 returns 2, 3 returns 0 and so on.

d = 0, t = 0 -> 0
d = 0, t = 5 -> 0 
d = 3, t = 23 -> valid 
completes full cycle, swings indefinitely 
t is never out of bounds
never negative nums as input




Approach:
d = 3 t = 5 |  3 2 1 0 -1 -2  -> -2
_________________________________________________
d = 1
1, 0, -1, 0,

d = 2
2, 1, 0, -1, -2, -1, 0, 1 
Cycle = 8
0  1  2   3   4   5  6  7
d = 3
3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3

d = 4
4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4

cycle = "one swipe", start at d, end at d
1cycle = 4*d + 1


2*d +1 = number of elements in full cycle

t % sizeofCycle
d = 3
sizeofCycle = 13

time: 14
return 2

time: O(1)
Approach1:
-  Something with modulus 
- 4 % d = finds


d = 3, t = 9
3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3
   x
returns -2
cycle = 13

d = 3, t = 9
originalD = 3

while t > 0:
  if d == neg(d) or if d == originalD:
    d += 1
  t -= 1
  d -= 1
return d



p = 4 3 2 1 0 -1 -2 -3 -4 -3 -2 -1  0  1  2  3  4  3  2  1  0  -1  -2 
t = 0 1 2 3 4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20  21  22 

-3 -4 -3 -2 -1  0  1  2  3  4  3
23 24 25 26 27 28 29 30 31 32 33

  

time: O(t) space: O(4d+1) -> O(1)
Approach2:
- find the number of elements for 1 cycle
- oneCycle = 4 * distance + 1
- create an array of oneCycle size, depending on size of t
- iterate over the array until time is reached
- return the element at t

Approach3:
- d = 3, while pointer is < 13, stop pointer when we reach t 

- loop 0 to t, start 

d = 3 
d = -3

currentT = 0
d = 2
// -1, 0, 1 2

2, 1, 0, -1, -2

t = 10

11 % 5 = 2


ans = index: 6 or 7

*/

/**
d = 2
2, 1, 0, -1, -2, -1, 0, 1 
Cycle = 8
0  1  2   3   4   5  6  7
in the first half: d - time
in the second half: -2 + time-cycle/2
function pendulum(d, t){
  const cycle = 4 * d
  t = t % cycle
  if (t <= cycle/2){
    return d - t
  } else {
    return -d + t - cycle/2
  }
}

// d = 1
// 1, 0, -1, 0,
// ^
//  t= 3

########################*/
const timeAtpendulum = (d, t) => {
    let currD = d;
    let direction = 1;

    while (t != 0) {
        if (currD == d || currD == -d) {
            direction *= -1
        };

        currD += direction;
        t -= 1;
    };

    return currD;
};

// Test Cases
//3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3
console.log(timeAtpendulum(3, 0)) //3
console.log(timeAtpendulum(3, 1)) //2
console.log(timeAtpendulum(3, 3)) //0
console.log(timeAtpendulum(3, 9)) //0

//2, 1, 0, -1, -2, -1, 0, 1, 2
console.log(timeAtpendulum(2, 0)) //2
console.log(timeAtpendulum(2, 5)) //-1
console.log(timeAtpendulum(6, 33))

console.log('----')

function pendulum(d, t) {
    const cycle = 4 * d
    t = t % cycle
    if (t <= cycle / 2) {
        return d - t
    } else {
        return -d + t - cycle / 2
    }
}
console.log(pendulum(3, 25))

// 1,0,-1,0
// 2,1,0,-1,-2,-1,0,1,0