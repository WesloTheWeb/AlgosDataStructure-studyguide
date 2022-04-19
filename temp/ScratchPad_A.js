/**

Prompt:
You are given an array representing the positions of cell towers along a 2 dimensional line. You are given a second array representing positions of customers across the same 2 dimensional line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to its left and right equally.

Function Signature:
def search(listener=[0, 4, 13], towers=[0, 2, 6, 10]) -> int:

Examples

listener = customer = [0, 4, 13]
tower = cell towers = [0, 2, 6, 10]
In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.

max([0, 2, 3]) = 3

step 1 = find min distance from a tower for each customer
step 2 = get the min distance to cover all customers which is the max of step 1


  minDistance = 0, 2, 2, 3
               j  
listener = [0, 4, 13]  positions of customers
         
if current tower distance is greater than last listener distance:
  incr j
                   i
towers = [0, 2, 6, 10] positions of towers
[]

0      2              3
c      c              c
t  t       t      t     
0--------5-------10---13

distance = towers[i] - listener[j]
              l
                 m  
                    r
  listener = [0, 4, 13] 
            l    
                  m   
                     r
  towers = [0, 2, 6, 10] 

  compute distance at mid:
    distance @ mid = towers[mid] - listeners[mid] = 2
    distance @ left = towers[mid] - listeners[left] = 6
    distance @ right = towers[right] - listeners[mid] = 6
    if distance @ mid is less than left distance:

**/

/*function search(listener, towers) {
  let currMin = [...listener]

  for(let i = 0; i < towers.length; i++) {
    for(let j = 0; j < listener.length; j++) {
        currMin[j] = Math.min(currMin[j], Math.abs(towers[i] - listener[j])); //[0,2,3]
    }
  }
  return Math.max(...currMin)
}

https://leetcode.com/problems/minimum-cost-for-tickets/

*/

function search(listener, towers) {
  let maxTowerDistance = Number.MAX_SAFE_INTEGER;
  let towerIdx = 0;
  let count = 0
  for (let i = 0; i < listener.length; i++) {
    count += 1
    while(
      towerIdx + 1 < towers.length 
      && Math.abs(listener[i] - towers[towerIdx]) <= Math.abs(listener[i] - towers[towerIdx + 1])
    ){
      towerIdx++;
      count += 1
    }
    maxTowerDistance = Math.min(
      maxTowerDistance,
      Math.abs(listener[i] - towers[towerIdx])
    );
  }
  console.log(`count=${count}`)
  return maxTowerDistance;
}


console.log(search([0, 4, 13], [0, 2, 6, 10]))