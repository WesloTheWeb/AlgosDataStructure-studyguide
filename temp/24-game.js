// Office Hours 9/13/2022
// [1,2,3] = 6
// [1,2,2] = 5
// [1,1,2] = 4

[1, 2, 3, 4, 5] = 15
[1, 2, 2, 3, 4] = 12

// add up all numbers
// subtract sum from expected

// 24 game
var judgePoint24 = function (cards) {
    // valid results will be ~24 (deals with floating ints)
    const isValid = (value) => Math.abs(value - 24) < 0.0000001;

    function calculate(hand) {
        // base case
        // we only have one card left - lets see if it evaluates to ~24
        if (hand.length === 1) {
            return isValid(hand[0]);
        }
        let valid = false;

        // max length of the hands array is 4 cards
        // but through recursion we shorten the length of the hands to 3 then 2 then 1
        for (let i = 0; i < hand.length; i++) {
            for (let j = i + 1; j < hand.length; j++) {
                let firstCard = hand[i];
                let secondCard = hand[j];

                // save the rest of the hand so we can evaluate the remaining cards next
                // you will never have more than 2 extra cards
                const nextCards = hand.filter((x, index) => index !== i && index !== j);

                valid =
                    valid ||
                    calculate([...nextCards, firstCard + secondCard]) ||
                    calculate([...nextCards, firstCard - secondCard]) ||
                    calculate([...nextCards, secondCard - firstCard]) ||
                    calculate([...nextCards, firstCard * secondCard]) ||
                    calculate([...nextCards, firstCard / secondCard]) ||
                    calculate([...nextCards, secondCard / firstCard]);
            }
        }
        return valid;
    }

    return calculate(cards);
};

/*
        +
    +   7   9
  4  4

*/