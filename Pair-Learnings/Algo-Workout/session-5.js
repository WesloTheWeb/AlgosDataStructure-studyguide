/*You are given a series of inputs representing delivery events. Each event is represented by an array of length 3:
[1, 1591846068, 0]

    The first element is an order number
    The second is the timestamp
    The third is either 0 (representing a pickup) or 1 (representing a dropoff)

Given a series of events, return the total active time, calculated by the period of time where they have an active delivery (if they've dropped everything off, they are not considered active until they pick something up again).
                                                                                                                             
Input:
[1, 1591846068, 0] numOrders: 0 -> 1 | startTime = 1591846068
[2, 1591846070, 0] numOrders: 1 -> 2 | startTime = 1591846068
[1, 1591846071, 1] numOrder: 2 -> 1 | startTime = 1591846068
[2, 1591846080, 1] numOrder: 1 -> 0 | currTime = 1591846080 | currTime-startTime = 12
[3, 1591846090, 0] numOrder: 0 -> 1 | startTime = 1591846090
[3, 1591846102, 1] numOrder: 1-> 0 | currTime = 1591846102 | currTime-startTime = 12
Output: 24


Function Signature
func activeDeliveryTime(events: [Int]) -> Int

numOrders - number of orders
startTime
totalTime

loop through the events
  1. increase/decrease numOrders based on event type (pickup / drop off)
  2. If we have 1 order, and the event was a pickup
    a. Save startTime (ie. We became active)
  3. If we have 0 order now, that means we became inactive
    a. subtract current time - startTime & add to totalTime
return totalTime calculated
*/
// Assume events == 2D array [[1, 159184, 0], [2, 1591.., 0]]
function totalActiveTime(events) {
    // O(N) time 
    // O(1) space
    let startTime = 0;
    let totalTime = 0;
    let numOrders = 0;
    let currentTime = 0;
  
    events.forEach((order) => {
      numOrders += (order[2] == 0) ? 1 : -1;
  
      if (numOrders === 1 && order[2] == 0) {
        startTime = order[1];
      }
  
      if (numOrders === 0) {
        currentTime = order[1];
        totalTime = totalTime + (currentTime - startTime)
      }
  
    });
      
    return totalTime;
  
  };
  
  let events = [
    [1, 1591846068, 0],
    [2, 1591846070, 0],
    [1, 1591846071, 1],
    [2, 1591846080, 1],
    [3, 1591846090, 0],
    [3, 1591846102, 1]
  ]
  
  Event {
    orderNumber;
    timestamp;
    pickup/dropoff;
  }
  
  console.log(totalActiveTime(events), 24);
  console.log(totalActiveTime([]), 0);
  
  