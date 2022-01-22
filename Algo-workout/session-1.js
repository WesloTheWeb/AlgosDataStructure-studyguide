//############################
// SESSION 1 | Jan 22
//############################
/*PROBLEM:
Given an array of chronological prices for a stock, find the maximum profit to be made per stock. You can make at most one trade and there are no trading fees.

- [2, 5] -> 3 (buy at 2, sell at 5)
- [6, 10, 2, 3, 8] -> 6 (buy at 2, sell at 8)
       
       
- [3, 4, 7, 8, 1, 9]

1, 4, 5, -2, 6
Brute force: 
Time: O(n^2)
Space: O(1)


minPrice, minIndex
maxPrice, maxIndex

i: 0   1  2  3  4
- [6, 10, 2, 3, 8]

minPrice =2 minIndex=2
MaxPrice=10 maxIndex=1
maxIndex 

minPrice=arr[0]  // 6
maxPrice=arr[0]  // 10
profit=
// 0

nums[i] = 10

  minPrice = 2;
  maxProfit = 6 (10 - 6)
- [6, 10, 2, 3, 8]

for i in range(1,len(arr)):
    if(arr[i]<minPrice):
      minPrice=arr[i]
      minIndex=i
      
    if(arr[i]>maxPrice)):
      maxPrice = arr[i]
      maxIndex = i
    if(maxPrice - minPrice > profit)
      profit = maxPrice - minPrice

-[10, 8, 7, 6, 4] -> 0
               _

potential pofit = -2
minPrice = 4
maxProfit = 0





- [2, 2, 2, 2] --> 0
Assumptions:
- Can't sell on a prior day after buying
- If no profit, return 0
-
*/

function maxProfit(prices) {
    let minPrice = 0;
    let maxProfit = 0;
    let potentialProfit = 0;


    // [6, 10, 2, 3, 8]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
}