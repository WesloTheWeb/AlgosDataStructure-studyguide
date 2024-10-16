/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const newStr = x.toString();

    let left = 0;
    let right = newStr.length - 1;

    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;
        };

        left++;
        right--;
    };  

    return true;
};

/*
Turn integer to string. Very important for pointers and data type coercion 
move the indices of left and right
check the value via bracket notation.

-- similar to LL problems
*/