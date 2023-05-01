/*
TYPE: Dynamic Programming (DP)
DATE: April 17th, 2023

QUESTION:
You're holding a silent auction with 650 bidders, assigning each bidder a numbered sign between 1-650. 
A person raises their sign when they want to make an offer.

However, they sometimes hold the sign upside-down, and the auctioneer
mistakes their number for a different number. For example, bidder #6 
raises their sign upside-down and could be mistaken for bidder #9.

Write a function that underlines all numbers from 1-650 that can be
misinterpreted for another number within that range when rotated 180 degrees.
 

EXAMPLE(S)
The number 6 should be underlined because it can be misinterpreted for the number 9 and vice versa.

FUNCTION SIGNATURE
function underlineMistakenNumbers(upperBound) {
def underlineMistakenNumbers(upperBound: int) -> None:
'''

Edge cases/Assumptions/Observations : 
- the numbers are not having leading zeroes  
- keep within range of 1 - 650
- rotation can be - anti-clockwise/clockwise 
169 -> 691 X
123 -> X

119 -> 611
110-> do not underline 
  ^
  
 - any number with 2,3,4,5,7 does not need to be underlined
 - any number with ONLY 0,1,6,8,9 need to be checked when rotated
 - except single digit that isn't 6/9 OR has trailing 0
 - any number with a zero at the end does not need to be underlined (ex: 10, 110, 160...)
 - numbers that are only 1's or 8's (111, 88) should not be underlined

Approach :


0 -> 0
1 -> 1
6 -> 9
8 -> 8
9 -> 6

191 -> 161
loop: 1-650 

  checkNum():
    - if contains 2,3,4,5,7 -> continue 
    - if 0 at end -> continue
   - loop backwards 16 
      -> %10 -> 6
          6 -> use hashMap -> 9 *10 -> 90
      -> /10 -> 1 -> use hashMap-> 1 + 90 = 91 
      -> check num once fully reversed if under 650

  */


//Output : 6, 9, 16, 18, 19, 61, 66, 68, 81, 86,89, 91, 98, 99, 109,119, 161, 191, 601, 611


function underlineMistakenNumbers(upperLimit) {
    // return list of numbers which should be uniquely identified 
    let results = []
    let map = new Map()
    for (let n of [0, 1, 8])
        map.set(n, n)
    map.set(6, 9)
    map.set(9, 6)


    for (let i = 1; i <= upperLimit; i++) {

        if (i % 10 == 0)
            continue;

        if (checkNum(i))
            flip(i);
    }

    // objective of this function is whether this number should be flipped or can we avoid flipping it 
    function checkNum(n) {
        let number = n.toString();
        const invalids = ["2", "3", "4", "5", "7"]
        return !invalids.some(n => number.includes(n))
    }

    function flip(n) {
        //flip, check, if valid then add to results 
        let flippedNumber = 0;
        let originalNumber = n;

        while (n > 0) {

            let digit = n % 10;
            digit = map.get(digit);

            flippedNumber = flippedNumber * 10 + digit;
            n = Math.floor(n / 10);

        }
        if (flippedNumber <= upperLimit && flippedNumber != originalNumber)
            results.push(originalNumber);
    }

    return results;
}

console.log(underlineMistakenNumbers(650))