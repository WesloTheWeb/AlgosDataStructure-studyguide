/*######################################################################################
QUESTION:
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while integer division by 10 
removes the rightmost digit (126 / 10 is 12).

Be aware that some languages require some special handling to do integer division while others do not.

##########
EXAMPLES
##########
count7(7) == 1
count7(123) == 0
count7(717) == 2

#################
Expected Runtime
##################
Time:
Space: 


######################################################################################*/

function count7(x) {

}


// Iterative Approach
function count7Iterative(n) {
    // Convert the number to a string
    const str = n.toString();

    // Initialize a count variable to 0
    let count = 0;

    // Check if the string includes the digit 7
    if (str.includes('7')) {
        // If it does, use the split() method to split the string into an array of characters
        const arr = str.split('');

        // Iterate over the array and increment the count variable for each occurrence of the digit 7
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '7') {
                count++;
            }
        }
    }

    // Return the count
    return count;
}

/*###############
TEST CASES
################*/