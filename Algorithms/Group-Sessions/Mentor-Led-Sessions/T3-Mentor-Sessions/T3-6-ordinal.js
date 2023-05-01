/*
DATE: April 20th, 2023
QUESTION:
In most spreadsheets, the rows are named with numbers (starting at 1) and the columns are given names that 
are strings of capital letters. The first column is 'A', the second is 'B' up to the 26th which is 'Z'. At 
that point, they progress to 'AA' for 27, then 'AB' for 28, etc.

As part of our new product, we need functions to convert between these column header strings and their ordinal 
values, and visa versa!

Start out with the column header to ordinal direction. If you get that working, do the inverse!

The challenges arise from our labeling system not having a character that represents zero. 
This problem will make you thankful that ancient Babylonian, 
Chinese and other civilizations came up with the idea of zero.
 

EXAMPLE(S)
columnToOrdinal("A") => 1
columnToOrdinal("J") =>10
columnToOrdinal("Z") => 26
columnToOrdinal('AA') => 27
columnToOrdinal('AB') =>28

columnToOrdinal('AAB') => 

columnToOrdinal('BA') => 53

A->Z : 1-26
AA->AZ : 27-52
BA->BZ : 53-78
(2 x 26) + 1

ABC
   A= 1 x 26^2 b= 2 x 26^1 C= 3 x 26^0
   *power operation is very heavy

ordinalToColumn(1) =>"A"
ordinalToColumn(26) => "Z"
ordinalToColumn(27) => "AA"
ordinalToColumn(52) => "AZ"
 

FUNCTION SIGNATURE
function columnToOrdinal(headerStr)
function ordinalToColumn(ord)
charCodeAt()
26^5 + 26^4
*/

/*
1. Init the res=0
2. iterate through all the chars in the strings
    2.1 multiply the curr_res value by 26
    2.2 add to the new_res the value of curr char [A:1, B:2,...]
3. return res


 
*/


function columnToOrdinal(headerStr) {
    let result = 0;
    let currChar;
    // console.log('A'.charCodeAt(0)-64)
    for (let i = 0; i < headerStr.length; i++) {
        currChar = headerStr.charCodeAt(i) - 64;
        result = result * 26 + currChar;
    }
  
    return result;
  
  }
  
  
  /*
  1. calculate the remainder
  2. inverse of what we did earlier
  
  
  ordinalToColumn(1) =>"A"
  ordinalToColumn(26) => "Z"
  ordinalToColumn(27) => "AA"
  ordinalToColumn(52) => "AZ"
  ordinalToColumn(703) => "AAA"
  ordinalToColumn(675) => 'YY'
  
  (51/26)  (51 % 26)
  *each time take division value
  
  1-26
  0
  
  
  703 % 26 ->
  
  1. Init an empty string
  2. Iterate till ordinal>0
  2.1 subtract 1 from ordinal
  2.2 the next char to add is char corresponding to ordinal%26 (A:1-Z-26)
  2.3 next value for ordinal is ordinal/26 [floor]
  3 return reverse of string
  
  
  52
  
  
  Iter1:
  (52-1)=51
  'A'+(51%26)=Z
  (51/26)=1
  
  Iter2:
  (1-1)=0
  'A'+(0%26)=A
  (0/26)=0
  
  
  Iter3:X
  
  */
  
  // fromCharCode
  function ordinalToColumn(ord) {
    // 
    let result = ''
    while (ord > 0) {
        ord -= 1 //0
        const char = String.fromCharCode((ord % 26) + 65)
        ord = Math.floor(ord / 26);
        result = char + result
    }
    return result;
  }
  
  
  // console.log(columnToOrdinal("A"), 1);
  // console.log(columnToOrdinal("J"), 10);
  // console.log(columnToOrdinal("Z"), 26);
  // console.log(columnToOrdinal('AA'), 27);
  // console.log(columnToOrdinal('AZ'), 52);
  // console.log(columnToOrdinal('BA'), 53);
  // console.log(columnToOrdinal('ZZ'), 702);
  // console.log(columnToOrdinal('AAA'), 703);
  
  console.log(ordinalToColumn(1), "A");
  console.log(ordinalToColumn(25), "Y");
  console.log(ordinalToColumn(26), "Z");
  console.log(ordinalToColumn(27), "AA");
  console.log(ordinalToColumn(52), "AZ");
  console.log(ordinalToColumn(53), "BA");
  console.log(ordinalToColumn(675), 'YY');
  console.log(ordinalToColumn(676), 'YZ');
  console.log(ordinalToColumn(677), 'ZA');
  console.log(ordinalToColumn(701), "ZY");
  console.log(ordinalToColumn(702), "ZZ");
  console.log(ordinalToColumn(703), "AAA");
  
  // // Test via round trip
  let passed = true;
  for (let i = 1; i < 100000; i++) {
    const col = ordinalToColumn(i);
    const ord = columnToOrdinal(col);
    if (ord !== i) {
        passed = false;
        console.log(`FAILED on input ${i}:`, col, ord);
    }
  }
  if (passed) console.log("PASSED");