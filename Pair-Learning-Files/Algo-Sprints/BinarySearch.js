//############################
// SESSION 3 | Jan 29
//############################
//############################
// SESSION 1 | Jan 29
//############################

/*
Find the index of the first occurrence of a value. For example [1, 2, 2, 3, 3, 3, 4, 4], 4 => returns 6


1, 2, 2, 3, 3, 3, 4, 4 ,  target = 4
                     *                  
L              R
index=len(array)//2
if array[index]=target
  i=0
  while array[index-i]=target:
    result=index-i
    i++
*/
function binarySearch(array, target) {
  let leftbound = 0;
  let rightbound = array.length - 1;



  while (leftbound <= rightbound) {
    let index = Math.floor((rightbound + leftbound) / 2);

    if (target == array[index]) {
      if (array[index + 1] !== target) {
        return index;
      } else {
        leftbound = index + 1
      }
    }

    else if (target < array[index]) {
      rightbound = index - 1;
    } else {
      leftbound = index + 1;
    }

  }
  return -1;
}







/*
 
left = 0
right = length - 1
 
iterate while left <= right
  check if mid = target
  check if left adjacent !== current index
  
 
Given a string in the format of a * x, b * y, c * z, count the number of b's there are in the string.
ex: aaabbcccc => 2
       L
        R
 
time: o(n)
space: o(n)
 
time: o(log n)
space: o(1)
 
 
let leftbound = 0
let rightbound = string.length - 1
 
 
 
Return the closest value to the target. For example [1, 4, 7, 8, 9], 5 returns 4. If two elements are equidistant to the target, return either.
 
 
*/