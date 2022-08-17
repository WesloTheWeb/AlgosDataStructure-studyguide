/* Office Hour - Algo Marathon
Date: 08/16/2022
PARTNERS: Isaiah F.

QUESTION:
You are given an array representing the positions of cell towers along a 1-dimensional line. You are given a second array representing the positions 
of customers along the same line. 
Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. 
All cell towers must have the exact same signal strength and covers customers to their left and right equally.

These arrays can be imagined as street addresses along a road.
At each address, there might be a customer and there might also be a tower at that location.

Function Signature: 
def search(customers, towers):



Examples:
Let's say cell towers are at: [0, 2, 6, 10] and customers are at: [0, 5, 11]
In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10. 

Towers: [0, 2, 6, 10]
Customers:[0, 5, 11]
Result: 1
  
Towers: [3]
Customers: [3]
Result: 0
  
Towers: [2, 6]
Customers: [4]
Result: 2

APPROACH
- two arrays of customers & towers (strength)
- we want tower to cover the range of customers

- we need to find a way to get distance from the two arrays in terms of value
Towers: [0, 2, 6, 10]
               p1

Customers:[0, 5, 11]
              p2

subtracting tower @ i + i + 1 to customer[j]?


PSEUDO CODE:


Target runtime and space complexity:
Runtime: O(n)
Space: O(1)
#########################################*/

// Our attempt:
function search(customers, towers) {
    let towerPointer = 0;
    let customerPointer = 0;
    let max = -Infinity;

    for (let i = 0; i < towers.length; i++) {
        // want to move tower pointer but also compare it to our customer pointer
        for (let j = 0; j < customers.length; j++) {
            // compare customer at custmer[j] to tower[i + 1]
            // compare customer at custmer[j] to tower[i]
            let towerMin = Math.min(Math.abs(towers[i] - customers[j]), Math.abs(towers[i + 1] - customers[j]) || Infinity)
            // console.log(towers[i], customers[j], towerMin)
            max = !isNaN(towerMin) ? towerMin : max;
        };
    };

    return max;
};

// Test Cases:
console.log(search([0, 5, 11], [0, 2, 6, 10])); // 1
console.log(search([0, 4, 13], [0, 2, 6, 10])); // 3
console.log(search([3], [3])); // 0
console.log(search([2, 6], [4])); // 2

// Solution:
function Formationsearch(customers, towers) {
    let maxSoFar = 0
    let customerPointer = 0
    let towerPointer = 0

    while (customerPointer < customers.length) {
        let distanceToCurrentTower = () => Math.abs(customers[customerPointer] - towers[towerPointer]);

        while (
            towerPointer < towers.length
            && Math.abs(customers[customerPointer] - towers[towerPointer + 1]) < distanceToCurrentTower()
        ) {
            towerPointer += 1;
        }

        maxSoFar = Math.max(maxSoFar, distanceToCurrentTower());

        customerPointer += 1;
    }

    return maxSoFar;
};

// Solution Test Cases:
console.log(Formationsearch([0, 5, 11], [0, 2, 6, 10]));
console.log(Formationsearch([0, 4, 13], [0, 2, 6, 10]));

/* Solution Explanation


*/