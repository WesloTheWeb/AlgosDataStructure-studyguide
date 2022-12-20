/*
window.setTimeout() could be used to schedule some task in the future.

Could you implement clearAllTimeout() to clear all the timers ? This might be useful when we want to clear things up before page transition.

For example


const id1 = setTimeout(func1, 10000)
const id2 = setTimeout(func2, 10000)
const id3 = setTimeout(func3, 10000)

clearTimeout(id1)

// all 3 functions are scheduled 10 seconds later
clearAllTimeout()

The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

within clearAllTimeout( 
  clearTimeout(func1);
  clearTimeout(func2);
  clearTimeout(func3);
)

// all scheduled tasks are cancelled.
*/

function(global) {
    const arr = [];
    // setTimeOut(fn, number)
    const orignalSetTimeOut = global.setTimeOut;
  
    const pushTime = (time) => {
      arr.push(time)
    }
  
    // stores our timeouts
    global.setTimeout = function(fn, num) {
      pushTime(orignalSetTimeOut(fn, num))
  
    }
  
    // clear our timesout
    global.clearAllTimeout = function() {
      for (let i = 0; i < arr.length; i++) {
        clearSingleTimeout(arr[i]); // clearTimeout(id1... )
      }
    }
  
    global.clearSingleTimeout = function(n) {
      // n is the id 
      clearTimeout(n)
      for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
          // remove array
          arr.slice(arr[n], n + 1)
        }
      }
    }
    // iterate through array, call clearTimeOut(each array element)
  }
  
  
  
    clearTimeout(id1);
  clearTimeout(id2);
  clearTimeout(id3);
  )
  
  