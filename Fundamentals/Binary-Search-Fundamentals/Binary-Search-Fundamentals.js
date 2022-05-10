/*######################################################
KEY ELEMENTS WHEN WRITING A CORRECT BINARY SEARCH
1. When to terminate the loop
Make sure while loop has equality comparison. Otherwise, for the edge case of a one-element array, 
we'd skip the loop and miss the potential match.

2. Whether/how to update left and right boundary in the if conditions
Consider which side to discard. If arr[mid] is already smaller than the target, 
then we should discard everything on the left by making left = mid + 1.

3. Should I discard the current element?
For vanilla binary search, we can discard it since it can't be the final answer if it is not equal to the target. 
There might be situations where you would want to think twice before discarding the current element. 
We'll discuss this in the next module.

When to use binary search
Interestingly, binary search works beyond sorted arrays. You can use binary search whenever you can make a 
binary decision to shrink the search range. We will see this in the following modules.

ALTERNATIVES
- Binary Search is NOT exclusive to arrays. See problem 2 (square root).

######################################################*/



/*########################
PROBLEM 2: SQUARE ROOT
Q: Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).

Input: 16
Output: 4

Input: 8
Output: 2

Explanation: square root of 8 is 2.83..., return integer part 2
#########################*/

function squareRoot(n) {
    let left = 0;
    let right = n;
    let res = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (mid * mid <= n) {
            left = mid + 1;
            res = mid;
        } else {
            right = mid - 1;
        }
    }
    return res;
}

/*===========
BREAKDOWN
=============

1.) About the square root integer:
Binary search can work on numerical function that exists in an ordered way, meaning always increasing in one direction 
and always decreasing in the other direction.

When we use a sorted array, our "function" is basically: function(i) { return array[i];}
In the case of square roots, as you can see our function is function(n) { return n * n}

The binary search works because it can always test to see if the value is too big/ too small and it knows 
which direction to move in for the next test.

2.) About the mid formula:

let mid = left + Math.trunc((right - left) / 2);

The formulas are identical, the 2nd version is just designed to avoid integer overflow, 
which can happen in some languages/cases. Note:

  left + (right - left) / 2
= left + right/2 - left/ 2
= left - left/2 + right/ 2
= left/2 + right/ 2
= (left + right) / 2

=============*/