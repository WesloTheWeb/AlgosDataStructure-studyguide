/**
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function(s) {
    const stack = [];
    
    const str = s.split('');
    
    for (let i = 0; i <= str.length; i++) {
        if (stack[ i + 1 ] === stack[i]) {
            stack.push(str[i+1]);
        } else
        stack.push(str[i])
    };
    
    return stack.join('');
    
};

function rearrangeString(s) {
   
  }
  