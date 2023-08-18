//  TODO: AUG9 Clean up Code and take note.
/*
         o
        / \
       o   o
      /
     o
    / \
   o   o

   Given an array of integers, determine if some subset of those integers can sum
   to a given target.

   [1, 2, 3], 6 => True
   [10, 1, 10], 20 => True
   [1, 10, 100], 77 => False

   debugs:
   - keep your inputs small (~ 3 is good)
   - console log at before recursive, log index and running sum
   - console log at returning
   - can also add console log right before recursive call itself


*/


function arraySubset(arr, target) {

    function recurse(index, runningSum) {
      console.log("Starting recursive call - index: " + index + ", runningSum: " + runningSum);
  
      if (index == arr.length) {
        // return runningSum == target;
        console.log("First return");
        return true;
      }
  
      // Third place to add logs: Immediately before going into new recursive calls
      console.log("Entering the 'takeNumber' recursive call");
      let takeNumber = recurse(index + 1, runningSum + arr[index]);
      console.log("Entering the 'dontTakeNumber' recursive call");
      let dontTakeNumber = recurse(index + 1, runningSum);
  
      let result = takeNumber || dontTakeNumber;
      console.log("Second return - result is " + result);
      return result;
    }
  
    return recurse(0, 0);
  }
  
  
  
  // console.log(arraySubset([1, 2, 3], 6), true);
  // console.log(arraySubset([10, 1, 10], 20), true);
  console.log(arraySubset([1, 10, 100], 77), false);