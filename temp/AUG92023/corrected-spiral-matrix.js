/*




R\C | 0  left | 1       | 2  right |
-----------------------------------
 0  top  | 1       | 2       | 3       |
-----------------------------------
 1       | 4       | 5       | 6       |
-----------------------------------
 2  bottom | 7       | 8       | 9       |

*/
function spiralOrder(matrix) {
    let results = [];
    // Define boundaries for our traversal. 
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    // While there's still a layer to process in our spiral.
    while (left <= right && top <= bottom) {
        // Process the top row.
        for (let i = left; i <= right; i++) {
            results.push(matrix[top][i]);
        }
        top++; // move our top boundary "down" aka increase it

        // Process the rightmost column.
        for (let i = top; i <= bottom; i++) {
            results.push(matrix[i][right]);
        }
        right--;

        // Here's where our problem might come in.
        // After we process the top row and the rightmost column, 
        // we should check if we're still within our boundaries 
        // before processing the bottom row and the leftmost column.

        if (top <= bottom) {
            // Process the bottom row.
            for (let i = right; i >= left; i--) {
                results.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Process the leftmost column.
            for (let i = bottom; i >= top; i--) {
                results.push(matrix[i][left]);
            }
            left++;
        }
    }
    return results;
}

/* #########################
    KEY TAKEAWAYS
############################
 - Define boundaries up and remember when you define the boundaries, you are turning an integer number
 that can be manipulated. For example:
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

will return values and in our while loop we can manipulate them for each for loop.
- We are still working in a 2D array, so think about the outer layer and inner layer each time.

*/

