/* TODO: Finish coverting this from python to JS.
TYPE: GRAPHJ
QUESTION: 
Given a chess board with a set of bishops, return the number of pairs of bishops that are attacking each other. 
Bishops will be given as an array of tuples.

EXAMPLE(S)
Bishops: [(0, 0), (2, 2), (1, 2), (3, 0)]
This would look like this:
x+y
keys: [0,4,3,3]
x-y
keys: [0,0,-1,3]
x . . . .
. . x . .
. . x . .
x . . . .
. . . . .

In this case, there are 2 pairs of bishops attacking each other.

Example : 

x . .
. x .
. . x

Answer : 3 pairs 

Edge cases/Assumptions/Observations : 
- all bishops are within boundaries of board
- can attack all on diagnol path
- all diagonals to be considered

Possible ways for generating keys : 

dict :{
    "(x1,y1)": "(x2,y2)",
    "(x2,y2)": "(x1,y1)"
}
       var 1        || var 2
key : "x1 x2 y1 y2" || "x2 x1 y2 y1"



APPROACH: 
We can use a formula for two line that is diagnol, one is positive slope and one with negative slope, then 
we can iterate through our list and see which cordinates are in that line, keep a count of how many are on the same 
line, then go to the second index

y = mx + b
y = 1x + b
y-x = b

FUNCTION SIGNATURE
def numberOfBishops(bishops): Int
function pairsOfAttackingBishops(bishops)

Hint :  one for diagonal (x-y) , other one for anti-diagonal (x+y)

dictionary = {
    1 :(x,y)
}

dictionary1 = {
    (x+y) : count of co-ordinates with same x+y value
}


dictionary2 = {
    (x-y) : count of co-ordinates with same x-y value
}
*/

function numberOfBishops(bishops) {

};

def numberOfBishops(bishops):
    diagnonal = {}
    anti_diagnonal = {}
    results = 0
    for (x,y) in bishops:
       
        if diagnonal.get(x+y) is not None:
            diagnonal[x+y] += 1
            results += diagnonal[x+y]

        else:
            diagnonal[x+y] = 0
        
        if anti_diagnonal.get(x-y) is not None:
            anti_diagnonal[x-y] += 1
            results += anti_diagnonal[x-y]
        else:
            anti_diagnonal[x-y] = 0 
    return results

print(numberOfBishops([(0, 0), (2, 2), (1, 2), (3, 0)]))