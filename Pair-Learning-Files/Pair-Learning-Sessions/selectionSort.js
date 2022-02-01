/*▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an aray: [1] // returns [1]
• Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]

  
[3, 1, 2, 4]
 i        j
 minValX = 1
 
 [1, 3, 2, 4]
     i     j
minValX = 2

[1, 2, 3, 4]
          i  j
minValX = 2


*/

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let minValX = i;
      
      for (let j = i; j < array.length; j++) {
        if (array[j] < array[minValX]) {
          minValX = j;
        }
      };
        [array[i], array[minValX]] = [array[minValX], array[i]];
        
    }
    
    return array;
    
  };
  
  // Test Cases
  console.log(selectionSort([])) // []
  console.log(selectionSort([1])) // [1]
  console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]