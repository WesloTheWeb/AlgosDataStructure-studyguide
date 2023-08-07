/*
In this game, a group of players stands in a circle and passes a parcel around.
When the game starts, a player is chosen to hold the parcel.
The players then pass the parcel to their adjacent player in clockwise order.
At a random point in time, a timer goes off, and the player holding the parcel is removed from the circle.
The passing continues until only one player is left.

Example(s)
We have a list  ["Alice", "Bob", "Charlie", "David", "Eve"]
Assume we have a timer value of 3.
Iteration 1: David removed
Iteration 2: Charlie removed
Iteration 3: Eve removed
Iteration 4: Bob Removed
Winner: Alice.
 
  0 - Alice
  1 - Bob
  2 - Charlie
  3 - David
  4 - Eve

  STARTS at idx 0
  Alice -> Bob -> Charlie -> David
  DAVID is removed idx 3
  0 + 3 = 3 idx to be removed
  
  0 - Alice
  1 - Bob
  2 - Charlie
  3 - Eve
  STARTS at idx 3
  Eve -> Alice -> Bob -> Charlie
  CHRLIE is removed idx 2
  3 + 2 = 5 
  5 % 3 = 2 idx to be removed

  0 - Alice
  1 - Bob
  2 - Eve
  STARTS at idx 2
  Eve -> Alice -> Bob -> Eve
  EVE is removed at idx 2
  2 + 3 = 5
  5 % 3 = 2 idx to be removed

  0 - Alice
  1 - Bob
  at this point idx is 2 so it starts at Alice (?)
  Alice -> Bob -> Alice -> Bob
  Bob is removed at ix 1;
  2 + 3 = 5
  5 % 2 = 1 idx to be removed

  ALICE IS THE ONLY ONE LEFT
  so we return ALICE;
*/

function passTheParcel(players, timer) {
    const circle = players.slice();
    while (circle.length > 1) {
      for (let i = 0; i < timer; i++) {
        circle.push(circle.shift());
      }
      circle.shift();
    }
    return circle[0];
  }
  
  console.log(passTheParcel(["Alice", "Bob", "Charlie", "David", "Eve"], 3))