/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*APPROACH:          
- Have 3 pointers since its a triplet of numbers
- We need to get 0 sum
-  Current pointer,
- Left pointer, that is to the right of i
- Right pointer that is at the end.
[-1,0,1,2,-1,-4]
  C 
    L
              R
              
1.) sort the code
2.) initalize variables

*/
var threeSum = function (nums) {

    if (nums.length < 3) return [];
    nums.sort((x, y) => x - y);
    const results = [];

    //Iterate through until two from end since there will be two pointers after this idx
    //to find threesums
    for (let i = 0; i < nums.length - 2; i++) {

        //If nums[i] greater than 0, since arr is sorted we know nums[i] + all after will be 
        //positive and cannot === 0
        if (nums[i] > 0) break;

        //If we are after 0 idx, and num is a repeat, skip because we have already found
        //all permutations.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        //Initialize pointers and loop
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            //We start with total < 0 first for Greedy purposes.  At beginning when we
            //have the most work to do in this loop, first pointer (i) is at 0, second pointer
            //(left) is at i + 1, third (right) is at .length - 1.  This stacks heaver in the negative side depending on distrubution and target.
            //Total < 0 most likely.  If that's the case, we need a higher number.  We increment left,
            //then loop through until we find a unique value since we already know nums[left] is not 
            //viable.  Also, loop isn't necessary, and does worse in LC spec tests.  That said, I stand by
            //it for arrs like this - [-9,-9,-9,-9,-9,-9,-9,-9,-9,-9, 0,1,8].  Not a Huge improvement, but we'll take it.
            if (total < 0) {
                left++;
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else if (total > 0) {
                right--;
                while (left < right && nums[right] === nums[right + 1]) right--;
                //if below else executes, we know total = 0.  Push results and move pointers.
            } else {
                results.push([nums[i], nums[left], nums[right]]);
                left++, right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            }
        }
    }
    return results;
};