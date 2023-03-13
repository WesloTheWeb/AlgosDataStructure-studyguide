/* Algo Mock Interviews
Date: Feb 5th, 2023
PARTNERS: Fang

QUESTION:
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. 
Find the minimum element in O(log N) time. You may assume the array does not contain duplicates. We want to return the index.
 
EXAMPLE(S)

Example 1:
given [5, 7, 10, 3, 4], return 3.

Example 2:
[4, 5, 2, 3] // 2
- return idx

Example 3:
[] // -1

Example 4:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 0 idx

Example 5:
[5, 7, 10, 3, 4]
l = 5, r = 4
l > r move m to the right otherwise move l to the left for inverse (r > l)


FUNCTION SIGNATURE
function findPivot(input: number[]) -> number


APPROACH:
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

PSEUDO CODE:


Time Complexity:
Space Complexity:
#########################################*/

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

        if (left === right) return left;
    };

    return mid;
};

// Solution(s): 
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
const test2 = [5, 7, 10, 3, 4, 5];
const test3 = [1, 2, 3];
const test4 = [1];
const test5 = [];

console.log(findPivot(test1)); // 3
console.log(findPivot(test2)); // 3: even len
console.log(findPivot(test3)); // 0: pivot at edge
console.log(findPivot(test4)); // 0: 1 item
console.log(findPivot(test5)); // -1: no items

console.log('solution', solution([5, 7, 10, 3, 4])); // ->3: even len
console.log('solution', solution([5, 7, 10, 3, 4, 5])); // ->0: pivot at edge
console.log('solution', solution([1, 2, 3])); // ->0: 1 item
console.log('solution', solution([1])); // ->-1: no items
console.log('solution', solution([])); // -1: no items

console.log('fang', FangFindPivot([5, 7, 10, 3, 4])); // ->3: even len
console.log('fang', FangFindPivot([5, 7, 10, 3, 4, 5])); // ->0: pivot at edge
console.log('fang', FangFindPivot([1, 2, 3])); // ->0: 1 item
console.log('fang', FangFindPivot([1])); // ->-1: no items
console.log('fang', FangFindPivot([])); // -1: no items