/*
QUESTION: Find the most frequent number in this array

Approach:
We can use a hashmap to keep track of the values and count. 

Pseudocode:
1. Create an empty hashmap.
2. Create variables for the most frequent number and its count.
3. Iterate through the array:
    - For each number, check if it's in the hashmap:
        - If it's not, add it to the hashmap with a frequency count of 1.
        - If it is, increment its frequency count.
4. Check if the current number's frequency is greater than the most frequent count:
    - If it is, update the most frequent number and its count.
5. Return the most frequent number.
*/
const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 10, 11, 12];

const countFrequencies = (arr) => {
    const frequencies = new Map();
    let mostFrequentNumber = arr[0];
    let maxCount = 0;

    for (let num of arr) {
        if (!frequencies.has(num)) {
            frequencies.set(num, 1);
        } else {
            frequencies.set(num, frequencies.get(num) + 1);
        };

        if (frequencies.get(num) > maxCount) {
            maxCount = frequencies.get(num);
            mostFrequentNumber = num;
        };
    };

    return mostFrequentNumber;
};

// TEST CASES
const test1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 10, 11, 12];
const test2 = [1, 2, 2, 3]; // 2
const test3 = []; // 0
const test4 = [1, 2, 3, 4];
const test5 = [1, 1, 2, 2, 3];

console.log(countFrequencies(test1)); // 9
console.log(countFrequencies(test2)); // 2
console.log(countFrequencies(test3)); // 0
console.log(countFrequencies(test4)); // 1
console.log(countFrequencies(test5)); // 2

// Time: O(n); loop over array once
// Space: O(n) n number of the array

// * Old Code:
/*

const countFrequencies = (arr) => {
  const frequencies = new Map();
  let mostFrequentNumber = 0;

  for (let num of arr) {
    if (!frequencies.has(num)) {
      frequencies.set(num, 1);
    } else {
      frequencies.set(num, frequencies.get(num) + 1);
    };
  };

  for (let [num, value] of frequencies) {
    if (value > mostFrequentNumber) {
      mostFrequentNumber = num;
    };
  };

  return mostFrequentNumber;
};

PROBLEM:
The original implementation you had there was to iterate through the hashmap again after you filled it up 
with numbers and their frequencies. This iteration was meant to find the number with the maximum frequency 
in the hashmap. Essentially, you were doing two separate iterations: one to fill the hashmap,
 and one to find the maximum.


*/