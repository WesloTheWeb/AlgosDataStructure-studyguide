
/*

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]))

Consider a foreman responsible for a number of tasks on the factory floor. Each task starts at a fixed time and ends at a fixed time. The foreman wants to visit the floor to check on the tasks. Your job is to help him minimize the number of visits he makes. In each visit, he can check on all the tasks taking place at the time of the visit. A visit takes place at a fixed time, and he can only check on tasks taking place at exactly that time. For example, if there are tasks at times [0,3],[2,6],[3,4],[6,9], then visit times 0,2,3,6 cover all tasks. A smaller set of visit times that also cover all tasks is 3,6. In the abstract, you are to solve the following problem.

You are given a set of closed intervals. Design an efficient algorithm for finding a minimum sized set of numbers that covers all the intervals.


0 1 2 3 4 5 6 7 8 9
0 0 0 0 
1 1 1 1

[0,3],[2,6],[3,4],[6,9]
0     2      3



          F
task1 0   3
task2    2     6
task3     3 4
task4          6    9

*/


let numbers = [1,2, 3,4]
numbers.unshift(0)

function matrixMultiply(a, b) {
  var result = Array.from(Array(a.length), () => new Array(a.length).fill(0))
  for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a.length; j++) { 
          let value = 0
          for (var k = 0; k < a.length; k++) {
              value += a[i][k] * b[k][j]
          }
          console.log(i, j, value, result)
          result[i][j] = value
      }
  }
  return result;
}

// console.log(Array.from(Array(2), () => new Array(4).fill(0)))
console.log(matrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
/*

```
[19 22]
[43 50]
```
*/
function angle(time) {
  const timeComponents = time.split(':').map((component) => parseInt(component));

  const hour = timeComponents[0];
  const minute = timeComponents[1];

  const minuteSegment = 6 * minute;
  const hourSegment = 30 * hour + 0.5 * minute;

  const difference = Math.abs(hourSegment - minuteSegment);

  return Math.min(difference, 360 - difference);
}

const time = '12:00';
console.log(angle(time));