// TODO Evalute this solution attempt

var asteroidCollision = function(asteroids) {
    const stack = [];
    const length = stack.length;
 
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i];
 
        if (curr > 0) {
            stack.push(curr);
        } else {
            while (length > 0 && stack[length - 1] > 0 && stack[length - 1] < Math.abs(curr)){
                stack.pop()
            }
            // standard checks
             if (length === 0 || stack[length - 1] < 0) {
                 stack.push(curr);
             } else if (stack[length - 1] === Math.abs(curr)) {
                 stack.pop();
             };
         };
     };
 
     return stack;
 };


 // with this solution

 var solution = function(asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const curr = asteroids[i];

        if (curr > 0) {
            stack.push(curr);
        } else {
            while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(curr)) {
                stack.pop();
            }
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(curr);
            } else if (stack[stack.length - 1] === Math.abs(curr)) {
                stack.pop();
            }
        }
    }

    return stack;
};