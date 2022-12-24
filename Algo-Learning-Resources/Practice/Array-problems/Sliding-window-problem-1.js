/**#######################################
QUESTION: Best Time to Buy and Sell Stock
##########################################*/

const prices = [24, 27, 20, 57, 78]

var maxProfit = function (prices) {
    let min = prices[0];
    let res = 0;
    
    prices.forEach(cur => {
        res = Math.max(cur - min, res);
        min = Math.min(min, cur);
    });
    
    return res;
};

// var maxProfit = function (prices) {
//     /*
//      choose day
//      [ 24, 27, 20, 57, 78 ]
//            buy
//                   sell
    
//     max_profit = 3
//     sell > buy calc difference for max profits
//     buy > sell               
//     return maximum profit
//     */

//     let max_profit = 0;
//     let buyStocks = 0;
//     let sellStocks = 0;

//     for (let i = 0; i < prices.length; i++) {
//         // happy case
//         if (sellStocks > buyStocks) {
//             max_profit = sellStocks[i] - buyStocks[i];
//         };

//         // unhappy case
//         if (buyStocks > sellStocks) {

//         };
//     };

//     return max_profit
// };

/*
PAIN POINTS:
- How did do we set up the two pointers from the two edges for the unhappy case
*/