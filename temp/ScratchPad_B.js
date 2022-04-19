/*
3Sum

Essentially just 2 sum with extra steps
1) Sort input
2) Iterate through nums
  - Each num is a candidate for first el in triplet
  - Run 2-sum on the other elements

No duplicate triplets
No duplicate elements
      v            v
[-5, -1, 0, 1, 4, -1]
  C
      L
         R


[-5 , -1 , -1, -1, -1, 0, 1, 4]
  C
                       L
                             R
*/

function threeSum(nums) {
  let res = [];
  nums.sort();

  for (let i = 0; i < nums.length; ++i) {
    let candidate = nums[i];
    let l = i + 1, r = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (l < r) { // no duplicate elements
      let sum = candidate + nums[l] + nums[r];
      if (sum < 0) ++l;
      else if (sum > 0) --r;
      else { // sum === 0
        res.push([candidate, nums[l], nums[r]]);
        ++l;
        while (nums[l] === nums[l - 1]) ++l; // skip dups on left side
      }
    }
  }

  return res;
}

function test(array) {
  console.log('in:', array);
  console.log('out:', threeSum(array));
  console.log('-------------------------');
}

test([-5, -1, 0, 1, 4, -1]);
test([2, -3, -3, 0, 0, 1, 1]);
test([-1, -1, 1, 1, 0, 0]);


/*
racecar
   l
   r
return true;

rabecar
  l
    r
return false
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) return false;
    else {
      ++left;
      --right;
    }
  };

  return true;
};