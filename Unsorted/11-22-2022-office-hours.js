// Didnt go to it so its raw
/*

- arrays are data structures that store content with contiguous blocks of memory
- the fact that the memory is contiguous allows us to know where any item in the array is in constant time as long as we have the starting memory address and the index

let arr = [a, b, c, d, e, f]
arr[3]

- key in and fetch an item from an array in O(1) given the index
- O(N) to add an item to an array anywhere but the back
- O(1) to push an item to the back of an array
- same thing for removing ^

['a', 'b', 'c', 'd', 'e', undefined, undefined, undefined]

*/

class DynamicArray {
    constructor() {
      this.store = [];
      this.length = 0;
      this.maxSize = 4;
    }
  
    push(item) {
      if (this.length === this.maxSize) {
        this.maxSize = 2 * this.maxSize;
      }
  
      this.store.push(item)
      this.length++;
    }
  
    pop() {
      this.length--;
      return this.store.pop();
    }
  
    get(idx) {
      if (idx >= this.length) {
        return null;
      }
      return this.store[idx];
    }
  }
  
  /*
  
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
  
  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
                                                  ^
  result: [[1, 6], [8, 10], [15, 18]]
  
  Output: [[1,6],[8,10],[15,18]]
  
  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
  
  O(NlogN)
  
  */
  
  /*
  
  O(N^2)
  bubble sort
  insertion sort
  selection sort
  
  O(NlogN)
  heap sort
  merge sort
  quick sort
  
  https://visualgo.net/en/sorting
  
  */
  
  /*
  
  Binary search: 
  
  target: 100
  
  [3, 8, 12, 14, 14, 19, 23, 25, 50, 100, 101, 104, 494]
  
  1024
  512
  256
  128
  64
  32
  16
  8
  4
  2
  1 (2^0)
  
  2^10
  
  */
  
  const testInput = [3, 8, 12, 14, 15, 19, 23, 25, 50, 100, 101, 104, 494];
  
  const binarySearch = (input, target) => {
    let left = 0;
    let right = input.length - 1;
    
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (input[middle] === target) {
        return middle;
      } else if (input[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  
    return -1;
    // left , right = 0 , length(testInput) - 1
    // middle = left + (right - left) / 2
    // while left < right:
  
    // if testInput(middle) == target:
    //   return middle
  
    // if testInput(middle) > target:
    //   right = middle - 1
  
    // elif testInput(middle) < target:
    //   left = middle + 1
   
    // return -1
  
  }
  
  console.log(binarySearch(testInput, 104))
  console.log(binarySearch(testInput, 8))
  console.log(binarySearch(testInput, 500))
  console.log(binarySearch(testInput, 9))
  
  // https://leetcode.com/problems/powx-n/
  