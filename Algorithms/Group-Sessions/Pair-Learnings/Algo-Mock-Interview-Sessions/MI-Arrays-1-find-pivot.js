/* Algo Marathon
Date: 
PARTNERS:

QUESTION:
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. 
Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.
 
EXAMPLE(S)

l = 5, m = 10, r = 4
For example, given [5, 7, 10, 3, 4], return 3.
[4, 5, 2, 3] // 2
- return idx
[] // -1
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 0 idx

[5, 7, 10, 3, 4]
l = 5, r = 4
l > r move m to the right otherwise move l to the left for inverse (r > l)
 
Notes:
- 2 pointers
[5, 7, 10, 3, 4]
10, 3, 4
3, 4
3
l  r = 3, 
p1
   p2 

- binary search
low, mid, high

FUNCTION SIGNATURE
function findPivot(input: number[]) -> number


APPROACH:




PSEUDO CODE:




Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:







// Solution(s): 
// My attempt
function findPivot(arr) {
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (arr[left] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        };
    };

    return mid;
};

// Fang's solution
// O(logn) | O(1) uses l/r only for comparison
function FangFindPivot(nums) {
    if (nums.length <= 1) return nums.length ? 0 : -1
    let [l, r] = [0, nums.length - 1]

    while (l < r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[l] < nums[r]) r = mid
        else l = mid + 1
        if (l == r) return l
    }
}

// their solution (recursive) uses mid for comparison
function solution(arr) {
    if (!arr.length) return -1;
    let low = 0, high = arr.length - 1;
    return helper(arr, low, high);
};


function helper(arr, low, high) {
    if (high === low) return low;
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] < arr[high]) high = mid;
    else low = mid + 1;
    return helper(arr, low, high);
};


// Test Cases:
const test1 = [5, 7, 10, 3, 4];

// ->3
console.log(findPivot([5, 7, 10, 3, 4]));
// ->3: even len
console.log(findPivot([5, 7, 10, 3, 4, 5]));
// ->0: pivot at edge
console.log(findPivot([1, 2, 3]));
// ->0: 1 item
console.log(findPivot([1]));
// ->-1: no items
console.log(findPivot([]));

