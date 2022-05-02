/*#################################################
DATE: 05/01/2022
PROBLEM: Cell Tower
TYPE: Array
Partner: Gigi T.

Q. You are given an array representing the positions of cell towers along a 2 dimensional line. You are given a second array representing positions of customers across the same 2 dimensional line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to its left and right equally.

Examples : 

Let's say cell towers are at: [0, 2, 6, 10]
and customers are at: [0, 5, 11]
In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.

APPROACH
- find the difference for our listeners to match the cell tower strength
listener array and the towers array match the element's value
- two pointer approach

[0, 2, 6, 10] (tower's)
c1
[0, 5, 11] (customer's)
    c2
c1 - c2
= 1
= -1

EDGE CASES
- tower is empty array null case
- arrays aren't of equal length?

[0, 2, 6, 10] (tower's)
   c1
[0, 5, 11] (listener's)
   c2

[0, 2, 6, 10] (tower's)       i = 0  0 - 0 = 0 
       tP                            i = 1 0-5 = -5 

[0, 5, 11] (listener's)  0
   lp 
#################################################*/

// function search(listener, towers) {

//   let listenerPointer = 0
//   let towersPointer = 0

//   for (let i = 0; i < listener.length; i++) {
//     let signalStrength = towers[towersPointer] - listener[i];

//     // 

//     if (signalStrength === towers[towersPointer]) {
//       listenerPointer++;
//     } else if (signalStrength < towers[towersPointer]) {
//       listenerPointer++;
//     } else if (signalStrength > towers[towersPointer]) {
//       towersPointer++;
//     };
//   };

//   return signalStrength; 
// }

/*   n
[0, 2, 6, 10] (tower's)       
    t                        

[0, 5, 11] (listener's)  0 tInd = 0 
    l 
c
*/

function search(listener, towers) {
    let maxTowerDistance = Number.MAX_SAFE_INTEGER;
    let towerIdx = 0;
    for (let i = 0; i < listener.length; i++) {
        while (towerIdx + 1 < towers.length &&
            Math.abs(listener[i] - towers[towerIdx]) <= Math.abs(listener[i] - towers[towerIdx + 1])) {
            towerIdx++;
        }
        let currentTowerStrength = Math.abs(listener[i] - towers[towerIdx]);
        maxTowerDistance = Math.min(maxTowerDistance, currentTowerStrength);
    };
    return maxTowerDistance;
};

let tower1 = [0, 2, 6, 10];
let customer1 = [0, 5, 11];
let customer2 = [0, 4, 13];

console.log(search(tower1, customer1)); // 1
console.log(search(tower1, customer2)); // 3