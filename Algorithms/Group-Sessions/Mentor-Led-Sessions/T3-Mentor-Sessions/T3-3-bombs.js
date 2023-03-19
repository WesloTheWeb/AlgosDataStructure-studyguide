// TODO: Bomb problem mentor March 9th
/*
TYPE: Array
DATE: March 9th, 2023

QUESTION:
Given an array of mines where each mine has an *x* and *y* position and blast radius *1*, 
determine how many mines will explode given an initial mine by index that will explode.

When a mine explodes, it triggers all unexploded mines that are within its blast radius.

EXAMPLE(S)
const mines = [
  { x: 1.0, y: 0.0 },
  { x: 1.0, y: 1.0 }, // index 1
  { x: 1.0, y: 2.0 },
  { x: 1.0, y: 3.0 },
  { x: 2.0, y: 2.0 },
  { x: 3.0, y: 0.0 } // index 5
]
(Note: X/Y positions can have decimal values such as 0.5 or 0.25)

 * Math.sqrt((x2-x1)^2 + (y2-y1)^2)

4 |
3 |  X
2 |  X  X
1 |  X
0 |__X_____X___
  0  1  2  3

Triggering the mine at index 1 will explode 5 mines in total becuase they are within 1 distance radius away:
* x: 1.0, y: 0.0
* x: 1.0, y: 1.0
* x: 1.0, y: 2.0
* x: 1.0, y: 3.0
* x: 2.0, y: 2.0

Trigger the mine at index 5 will explode 1 mine in total because no other mines are within 1 distance radius away.
 * x: 3.0, y: 0.0
 

FUNCTION SIGNATURE
function getNumExplosions(mines, mineIndex): number
'''
*/

/**
 * 
 * Math.sqrt((x2-x1)^2 + (y2-y1)^2)
 */



function getNumExplosions(mines, mineIndex) {
    const visited = new Array({ length: mines.length }).fill(0);  // O(n)
    let exploded = 0;
    const queue = mines.length ? [mineIndex] : [];   //O(n)
  
    visited[mineIndex] = 1
  
    while (queue.length > 0) {
      const bombIndex = queue.shift();
      const bomb = mines[bombIndex];
  
      exploded += 1;
  
      // enqueue the next bomb in radius
      // loop through neighbors, check distance if less than or equal 1 = boom 
      for (let i = 0; i < mines.length; i++) {
        if (visited[i] === 1) continue;
  
        const neighbor = mines[i];
        const distance = calculateDistance(bomb.x, bomb.y, neighbor.x, neighbor.y);
  
        if (distance <= 1) {
          visited[i] = 1;
          queue.push(i);
        }
      }
    }
  
    return exploded;
  };
  
  
  const calculateDistance = (x1, y1, x2, y2) => {
      // console.dir({ x1, y1, x2, y2 })
      return Math.sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2)
  }
  
  
  const mines = [
    { x: 1.0, y: 0.0 },
    { x: 1.0, y: 1.0 },
    { x: 1.0, y: 2.0 },
    { x: 1.0, y: 3.0 },
    { x: 2.0, y: 2.0 },
    { x: 3.0, y: 0.0 }
  ];
  
  /*
    For mines:
  
     x  0    1    2    3
   y ___________________
   0 |       x         x        
   1 |       x            
   2 |       x    x   
   3 |       x  
        
  */
  
  console.log(getNumExplosions(mines, 1)); // Output: 5
  console.log(getNumExplosions(mines, 5)); // Output: 1
  