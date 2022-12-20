// Backtracking example
function powerSet(arr, combo = []) {
  if (arr.length === 0) {
    console.log(combo);
  } else {
    const [cur, ...rest] = arr;

    powerSet(rest, combo);
    combo.push(cur);
    powerSet(rest, combo);
    // backtrack logic happen here, take step back...
    combo.pop();
  };
};

const test1 = ['A', 'B', 'C']
powerSet(test1)

/* Expected Outcome
[]
['c']
['D']
['B','C']
['A']
['A','C']
['A','D']
['A', 'B', 'C']
*/

 