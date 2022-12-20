/*######################################################################################
QUESTION:
Given a non-negative int n, return the sum of its digits recursively (no loops). 
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 
removes the rightmost digit (126 / 10 is 12).

##########
EXAMPLES
##########


#################
Expected Runtime
##################
Time:
Space: 


######################################################################################*/

function sumDigits(n) {
    if (n < 10) {
      return n;
    }
  
    const rightMostDigit = n % 10;
    const nextNumber = Math.floor(n / 10);
  
    return rightMostDigit + sumDigits(nextNumber);
  }

/*###############
TEST CASES
Independently create a comprehensive test suite for this problem. 
It should cover most general and boundary cases without enumerating every possible input permutation.
- zero
- single digit
- multiple digits
################*/
console.log(sumDigits(12) == 3)
console.log(sumDigits(49) == 13)
console.log(sumDigits(126) == 9)


// further tests
console.log(sumDigits(126)) // 9
console.log(sumDigits(49)) // 13
console.log(sumDigits(12)) // 3
console.log(sumDigits(10)) // 1
console.log(sumDigits(1)) // 1
console.log(sumDigits(0)) // 0
console.log(sumDigits(730)) // 10
console.log(sumDigits(1111)) // 4
console.log(sumDigits(11111)) // 5
console.log(sumDigits(10110)) // 3
console.log(sumDigits(235)) // 10