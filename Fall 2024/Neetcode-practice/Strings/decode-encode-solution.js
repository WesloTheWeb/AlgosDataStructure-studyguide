/**
 * Decodes an encoded string back into an array of strings.
 * @param {string} str - The encoded string
 * @returns {string[]} - The decoded array of strings
 */
function decode(str) {
    // Initialize an empty array to store decoded strings
    let result = [];

    // Main pointer, starts at the beginning of the string:
    let i = 0;

    // Continue until we reach the end of the string
    while (i < str.length) {
        // ? Secondary pointer, starts at the same position as i
        let j = i;

        // ? Move j forward until we find the '#' delimiter
        while (str[j] !== '#') {
            j++;
        };

        // ? Extract the length of the next string
        let length = parseInt(str.substring(i, j), 10);

        // ? Move i to the start of the actual string (just after '#')
        i = j + 1;

        // ? Move j to the end of the actual string
        j = i + length;

        // ? Extract the string and add it to the result array
        result.push(str.substring(i, j));

        // ? Move i to the end of the current string, ready for next iteration
        i = j;
    }

    return result;  // Return the array of decoded strings
}

// Example usage:
// let encoded = "4#neet4#code4#love3#you";
// let decoded = decode(encoded);
// console.log(decoded);  // Outputs: ["neet", "code", "love", "you"]

/*
? Key Points:
?  1. The function uses two pointers, i and j, to navigate the encoded string.
?  2. It first extracts the length of each string, then uses that to extract the string itself.
?  3. The '#' character serves as a delimiter between the length and the string content.
?  4. The loop continues until all encoded strings have been processed.
?  5. This method is efficient as it only makes a single pass through the encoded string.


EXAMPLE 
! "4#neet4#code4#love3#you";
?  i 
?   j
*/