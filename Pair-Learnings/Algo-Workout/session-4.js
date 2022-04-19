/*
You are given an array of tuples, representing key presses. The first element in the tuple will be a letter and the 
second will be a timestamp that it was pressed at. You'll return the character that took the slowest amount of time to press. 
The time that it takes to press is equal to the timestamp it was pressed, subtracted by the time the previous character 
was pressed. Ignore the first character that is pressed, we do not know the time associated with that character.

Examples
[['a', 0], ['b', 3], ['a', 7], ['c', 8]] returns 4. 'a' took 7 - 3 = 4 times to press.

[['a', 0], ['b', 9], ['a', 1], ['c', 2]] return 7

[['a', 0], ['b', 7], ['a', 7], ['c', 7]] returns 7. 'b' 

[['a', 7], ['b', 7], ['a', 7], ['c', 7]] returns 0. 'b' 

[['a', 7], ['a', 7], ['a', 7], ['a', 7]] returns 0. 'a'

[['a', 7]] returns -1. 'null'

[['a', 7], ['a', 7]] returns 0. 'a'

[['null', 0]] returns -1. 'null'

Time: O(n)
Space: O(1)

- if len 1 -> return -1 | 
- iterate through array, skip 1st tuple
- find difference btw tuples
- return max difference
*/

function diffTupple(arr) {
    if (arr.length <= 1) return -1;
    let maxDiff = 0;
  
    arr.sort((a, b) => a[1] - b[1]);
//    - iterate through array, skip 1st tuple
    for(let i = 1; i < arr.length; i++) {
        let prev = arr[i-1][1];
        let curr = arr[i][1];
        maxDiff = Math.max(maxDiff, curr - prev);
    }
  
    return maxDiff;
  
// - find difference btw tuples

  
  // - return max difference
};


console.log(diffTupple([]), -1);
console.log(diffTupple([['a', 0], ['b', 9], ['a', 1], ['c', 2]]), 7);
console.log(diffTupple([['a', 0], ['b', 7], ['a', 7], ['c', 7]]), 7);
console.log(diffTupple([['a', 7]]), -1);
console.log(diffTupple([['a', 7], ['a', 7], ['a', 7], ['a', 7]]), 0);