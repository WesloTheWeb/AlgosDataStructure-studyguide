# Notes
We use Infinity when initializing a variable that we want to minimize, and -Infinity when we want to maximize. 
Here's why:

## Infinity
For minimization: Any real number is less than Infinity, so `Math.min(Infinity, anyNumber)` will always return `anyNumber`.

For maximization: Any real number is greater than -Infinity, so `Math.max(-Infinity, anyNumber)` will always return `anyNumber`.

This approach ensures that the first comparison will always update the initial value.

## Absolute Difference
Absolute difference patterns:
The absolute difference is indeed a common pattern in many problems. Here are some tips:

1. When the array is sorted, you often don't need the absolute value operator | | because you know the order of elements. This
will most often turn the time complexity to `O(n log n)`.

2. In unsorted arrays, `Math.abs()` is useful for finding the smallest difference regardless of order.

3. The `Math.min()` function is commonly used to keep track of the smallest value seen so far.
Consider sorting as a first step if the problem involves finding smallest differences or pairs.


### Other useful tips and situations
1. Using Infinity and -Infinity
```javascript 
function findMinMax(arr) {
    let min = Infinity;
    let max = -Infinity;
    for (let num of arr) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    return [min, max];
};
```

2. Absolute difference patterns
```javascript
function smallestDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i-1]);
    }
    return minDiff;
};
```

3. For loop logic for finding pairs
```javascript
function findPairsWithSmallestDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    let results = [];
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i-1];
        if (diff < minDiff) {
            minDiff = diff;
            results = [[arr[i-1], arr[i]]];
        } else if (diff === minDiff) {
            results.push([arr[i-1], arr[i]]);
        }
    }
    return results;
};
```

4. Clearing an array
```javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 0;  // arr is now []
```
 