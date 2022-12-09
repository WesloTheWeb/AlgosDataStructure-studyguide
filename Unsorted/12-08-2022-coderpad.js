// Backtracking example
// function powerSet(arr, combo = []) {
//   if (arr.length === 0) {
//     console.log(combo);
//   } else {
//     const [cur, ...rest] = arr;

//     powerSet(rest, combo);
//     combo.push(cur);
//     powerSet(rest, combo);
//     // backtrack logic happen here, take step back...
//     combo.pop();
//   };
// };

// const test1 = ['A', 'B', 'C']
// powerSet(test1)

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

const mobiles = [
    {
      brand: 'Samsung',
      model: 'Galaxy Note 9',
      prices: [599, 900]
    },
    {
      brand: 'Google',
      model: 'Pixel 3',
      prices: [1099, 1200]
    },
    {
      brand: 'Apple',
      model: 'iPhone X',
      prices: [699, 999, 1199]
    }
  ]
  
  const arr = mobiles.filter((item) => item.brand !== 'Samsung');
  // console.log(arr)
  
  const prices = mobiles.map((item) => {
    return item.prices;
  });
  
  // console.log(prices)
  
  const stringExample = 6 * 'uwu' ;
  
  console.log(stringExample)