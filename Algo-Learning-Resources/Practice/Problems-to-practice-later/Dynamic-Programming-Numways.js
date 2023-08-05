/*
❓ PROMPT
Given *N* cents, write a function to determine the number of ways of using pennies, nickels, dimes, and quarters to represent it.

(Pennies are worth 1 cent; nickels, 5; dimes, 10; quarters, 25.) 

Example(s)
getNumWaysToMakeChange(1) == 1  (1 penny)
getNumWaysToMakeChange(3) == 1  (3 pennies)
getNumWaysToMakeChange(5) == 2  (1 nickel, or 5 pennies)

When "cents" increase, there are more ways of making change:
getNumWaysToMakeChange(12) == 4
Explanation:
  1 dime, 2 pennies
  2 nickels, 2 pennies
  1 nickel, 7 pennies
  12 pennies

getNumWaysToMakeChange(26) == 13
Explanation:
  1 quarter, 1 penny
  2 dimes, 1 nickel, 1 penny
  2 dimes, 6 pennies
  1 dime, 3 nickels, 1 penny
  1 dime, 2 nickels, 6 pennies
  1 dime, 1 nickel, 11 pennies
  1 dime, 16 pennies
  5 nickels, 1 penny
  4 nickels, 6 pennies
  3 nickels, 11 pennies
  2 nickels, 16 pennies
  1 nickel; 21 pennies
  26 pennies
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function getNumWaysToMakeChange(cents) {
def getNumWaysToMakeChange(cents: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/