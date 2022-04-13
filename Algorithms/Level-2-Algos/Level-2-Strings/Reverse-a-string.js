/*##################
TYPE: String Manipulation
- Write a function that can reverse the following strings:
Example:
    - Lived -> Devil
    - uwu -> uwu
    - Lime -< Emil

APPROACH:
1.) Take a string, break it into each character in an array
2,) Now that it is an array format two options:

3A.) use the built in reverse method and join the string
3B.) iterate backwards from the array (most proper way to do it.)
####################*/

function reverseStr(str) {
    // let newStr = str.split('');
    let newStr = '';

    for (let i = 0; i < newStr.length; i--) {
        return newStr += str[i];
    }
};

console.log(reverseStr('lived'));