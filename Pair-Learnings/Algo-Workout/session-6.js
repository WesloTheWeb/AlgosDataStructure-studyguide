
/*

You are given a binary tree that is represented by a string. Nodes have no value. A 0 represents null and a (00) represents a leaf node. ((00)0) would represent a tree where the root has one left node and no right node. ((00)(00)) represents a tree with one left and one right node. 

---------

((00)0)

   n
  /   -> 2
  n
  
(0(00))
  
---------

((00)(00))

   n
  / \ -> 2
  n  n
  
--------
(((LR)(LR))(LR))

0 -> 0
(00) -> 1
(0(00)) -> 2
(((00)(00))(00)) -> 3

      n
    /  \
    n   n
   / \
  n   n
  
((00)((00))(00)) -> 3

Given this representation of the tree, return an Int representing the depth of the tree.

Assumptions:
- All input is valid



Psuedocode:
count=0, max = 0
each char:
    if (
      count++
      if count > max: max = count
    if ) count--
 return max
 
 )(
        
*/

function depth(tree) {
    let count = 0;
    let max = 0;

    for (let c of tree) {
        if (c === "(") {
            count++;
            if (count > max) {
                max = count;
            }
        }
        if (c === ")") {
            count--;
        }
    }
    return max;
}


console.log(depth('0'), 0);
console.log(depth('(00)'), 1);
console.log(depth('(0(00))'), 2);
console.log(depth('(((00)(00))(00))'), 3);

/*
checks:
if tree === '0', return 0
no more than 2 consecutive 0's
tree must start with (
( occurs before 0 or 00
equal amount of ( to )
count >= 0 at each step
*/

/*

100
0
50

-----------------

NONZERO -> 1 | 2 | 3 | ... | 9
DIGIT -> NONZERO | 0
DIGITS -> DIGIT | DIGIT DIGITS
INTEGER -> DIGIT | NONZERO DIGITS

BIN_OP -> + | - | * | /
BIN_EXP -> [INTEGER | BIN_EXP] BIN_OP [INTEGER | BIN_EXP]

-----------------

VAL -> 0 | NODE
NODE -> ( VAL VAL )

-----------------

5 (10)

*/


'((00)0(00))'
'(0)00()'

'(0)'
'(0)00()'
'()'

