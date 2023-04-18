/*
'''
In front of you is a row of N coins, with values v1, v2, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.
 
EXAMPLE(S)
[10, 24, 5, 9] => 33

[10, 24, 5, 9] => 33
Me: 10
  [24, 5, 9] (what's remain)
Opp: 9
 [ 24, 5] (what's remain)

[10, 24, 5, 9] => 33
Opp: 10
Me: 24

[ 5, 9]
Me: 9 
  24 + 9 => 33
Opp: 5

psychology: 
we want to explore both branches of choosing EITHER:
(1) the leftmost coin
(2) the rightmost coin

in each of these, the opp player (who behaves like us) will
leave us with the smaller option of the remaining coins bc they're trying to
pick the bigger coin


[10, 24, 5, 9] start
[10, 24, 5] opponent turn (pick 5, 10)
[10, 24] my turn (pick 24 to add to the 9)


[10, 24, 5, 9]
[24, 5, 9] == opponent options (24, 9)

9 --
[10,24,5] == opponent options
[24,5]

Odd Number of rows of N coin ?
Null case, return 0?
draw possible? yes

Optimal amount:
  - combination (sum of elements in the array) we can only choose front or end.

- choose the highest value of the two

pseudo code:
N = # turns
N + 1 , N - 1

# Notice that this solution uses much more memory
# than the Javascript solution above
def max_profit(coins):
    if len(coins) == 1:
        return coins[0]

    elif len(coins) == 2:
        return max(coins)

    else:
        return max(
            coins[0] + min(max_profit(coins[2:]), max_profit(coins[1:-1])), # take the leftmost
            coins[-1] + min(max_profit(coins[:-2]), max_profit(coins[1:-1])) # take the rightmost
        )

FUNCTION SIGNATURE
function maxProfit(coins)
'''
*/

/* TAKE AWAYS
- Try to pick out the highlights the problems,
key context.

- Translating it into

*/