/* Q. Given an array of positive integers, find the first element that occurs k number of times. 
// If no element occurs k times, return -1, and you may assume k is greater than 0. 
// Examples:
// • Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
// • Given an array: [], k: 1 // returns -1

Approach:
 create dictionary keep track of the elments,
   key: element and value: count of element number of times.
 - iterate through and then check if the element occured
  - return the element that occurred k times.


k = 2


    1 8 8 8 3 3
          i

map // element : # of occurrences
k  v
1: 1
8: 2 -> 3


set: 
[ 1, 2, 2, 2, 2, 3] -> set([1, 2, 2, 2, 2, 3]) 

set values : 
1
2
3


map:
{
a - 1
b - 2
c - 3
...
z - 26


}

map.keys()
- a through z

map.values()
- 1 through 26

map.get('c')
- 3

map.set('c', 100)

map.get('c')
- 100

map.get(100)

- check if number occurred before and if not add it to key.
- if did, increase count += 1
- if map(key) === k, return the key (element)


for loop as long as the array.length
*/

// O(N) time
function firstKTimes(array, k) {

    const countMap = new Map();
    
    if (!array) return -1;
    
    for (const el of array)
    {
      // we've seen this element before
      if (countMap.has(el)) 
      {
        
        // being inside this if means we've seen this element before
        let key = el
        let existing_value = countMap.get(el) 
        let new_value = existing_value + 1
        
        countMap.set(el, new_value);
      }
      // we have _not_ seen this element before - this is the first time we're seeing this element.
      else
      {
        countMap.set(el, 1);
      }
  
      // check, has the current element occurred K times yet? 
      if (k === countMap.get(el)) return el;
    }
  
    return -1;
  
    
  };
  
  // Completion Time: Record Time Here...
  // Test Cases
  console.log(firstKTimes([1, 2, 3], 2)) // -1
  console.log(firstKTimes([2, 2, 2, 2, 2], 5)) // 2
  console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
  console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
  console.log(firstKTimes([1, 5, 5, 3, 3, 5, 5], 4)) // 5
  console.log(firstKTimes([], 1)) // -1
  console.log(firstKTimes([], 0)) // -1
  console.log(firstKTimes(null, 0)) // breaks
  
  
  
  // function firstKTimes_ForEach(array, k) {
  
  //   const countMap = new Map();
  
  
  //   array.forEach((el) => {
  //     // we've seen this element before
  //     if (countMap.has(el)) 
  //     {
        
  //       // being inside this if means we've seen this element before
  //       let key = el
  //       let existing_value = countMap.get(el) 
  //       let new_value = existing_value + 1
        
  //       countMap.set(el, new_value);
  //     }
  //     // we have _not_ seen this element before - this is the first time we're seeing this element.
  //     else
  //     {
  //       countMap.set(el, 1);
  //     }
  
  //     // check, has the current element occurred K times yet? 
  //     if (k === countMap.get(el)) return el;
  //   });
  
  //   return -1
    
    
  // };
  
  // console.log('foreach answers')
  // console.log(firstKTimes_ForEach([1, 2, 3], 2)) // -1
  // console.log(firstKTimes_ForEach([2, 2, 2, 2, 2], 5)) // 2
  // console.log(firstKTimes_ForEach([1, 2, 2, 3, 3], 2)) // 2
  // console.log(firstKTimes_ForEach([1, 2, 2, 3, 3], 3)) // -1
  // console.log(firstKTimes_ForEach([], 1)) // -1