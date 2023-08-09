// Grokking

// 3 sum initial:

export function findSumOfThree(nums, target) {
    const newArr = nums.sort();
    let low = 0;
    let high = newArr.length - 1;
    let runningTripletSum = 0;

     for (let c = 1; c < newArr.length; c++) {
         runningTripletSum += newArr[c] + newArr[low] + newArr[high];
         
         if ( runningTripletSum > target) {
             high--;
         } else if ( runningTripletSum < target) {
             low++;
         } else if (runningTripletSum === target) {
             return true;
         };
         
     };

     return false;
}