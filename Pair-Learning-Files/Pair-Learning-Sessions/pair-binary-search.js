const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

/* 
Your previous Python 3 content is preserved below:

def binarySearch(array: [int], target: int) -> int:
    # Write your code here.
    pass

# Test Cases
array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
print(binarySearch(array, 1)) # 0
print(binarySearch(array, 200)) # 8
print(binarySearch(array, 8)) # 4
print(binarySearch(array, 154)) # -1
/*

[1,2 ,3, 6, 87, 92,]

target: 3   

*/

let left = 0;
    let right = array.length - 1;
  
  
    while (left <= right) {
      let mid = Math.floor((left + right)/2);
      
      if (target === array[mid]) {
        return mid;
      } 
      
      if (target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
  return -1;
  >

 */