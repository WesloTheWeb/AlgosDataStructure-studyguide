/*#################################################
DATE: 04/17/2022
PROBLEM: Dutch National Flag
TYPE: Array
Partner: Aimee L.

QUESTION:  
Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:
• Given an array: [2, 1] // returns [1, 2]
• Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]

BRAINSTORM:
- sort 
- quick sort?
-3 pointers 

i  
       j        
             k
[2, 1, 0, 1, 0]


       i    
          j       
             k
[0, 1, 0, 1, 2]

[0, 0, 1, 1, 2]


i   
    j
             k
[2, 0, 2, 1, 1]

[1, 0, 2, 1, 2]
we check nums[i] < nums[j]
and then check nums[i] > nums[k]
                                 i     j        k
if nums[i] < nums[j] < nums[k]: [1, 2, 1, 1, 1, 3]
  incr j and i
  decr k
elif nums[i] > nums[j]:
  swap nums[i], nums[j]  # [1, 1, 2, 1, 1, 3]
  incr i and j              i  j  k
elif nums[k] < nums[j]:  # [3, 2, 1]
  if nums[i] > nums[j]:
    swap nums[i], nums[k]
  else:
    swap nums[k], nums[j]   # [3, 1, 2]
  decr k

  blue -> lowest
  red -> middle
  green -> highest

  input = ['red', 'red', 'green', 'blue'] -> ['blue', 'red', 'red', 'green']

Dry - Run of approach:
   l  
      m            
                  r
 [ 0, 1, 1, 0, 2, 2 ]
  
 l
         m
                  r
  [0, 1, 1, 0, 2, 2 ]
 
  ;
  l
            m        
                  r            l        m  r
 [ 0, 1, 1, 0, 2, 2 ] ->  [ 0, 1, 1, 0, 2, 2 ]
 ;
      l                      
            m                            
                  r                        
 [ 0, 1, 1, 0, 2, 2 ]  ->  [0, 0, 1, 1, 2, 2]
;
HIGH-LEVEL APPROACH:
  if middle value is the lowest val:
    swap arr[low] and arr[mid]
    incr low
    incr middle
  elif middle value is the middle val:
    incr mid.
  else:
    swap arr[mid], array[high]
    decr high

###################################################*/
function dnf(nums) {
  let left = 0
  let mid = 0
  let right = nums.length - 1

  while (mid <= right) {
    // if middle value is the lowest value: nums = [3, 0, 1]
    // we want to move the lowest value towards the left <-----
    // nums = [3, 0, 0, 0, 0, 1] 

    if (nums[mid] === 0) {  // nums = [0, 2, 1, 1, 2, 0]
      [nums[mid], nums[left]] = [nums[left], nums[mid]];
      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else { // nums[mid] == 2, move nums[mid] towards nums[right]
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    };
  };

  return nums;
};

const tests = [
  //[[1, 2], [1, 2]],
  [[2, 1, 1, 0], [0, 1, 1, 2]],
  [[0, 2, 1, 0, 1, 2], [0, 0, 1, 1, 2, 2]],
];

for (const test of tests) {
  console.log(dnf(test[0]))
  console.log(test[1])
};