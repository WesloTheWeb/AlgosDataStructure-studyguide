/*################
PAIR LEARNING: Insertion Sort
###################
Question: 
- Given an unsorted array, perform insertion sort in ascending order.

Examples:
• Given an aray: [1] // returns [1]
• Given an aray: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

function insertionSort(array) {
    // O(N^2) time
    // 1 method
    // for (let i = 0; i < array.length; i++) {
    //   // inner loop
    //   for (let j = i; j > 0; j--) {
    //     // Switch logic
    //     if (array[j] < array[j-1]) {
    //       const temp = array[j];
    //       array[j] = array[j - 1];
    //       array[j - 1] = temp;
    //     }
    //   }
    // }
    // return array;

    /*##################    
    Alternative Method
    ####################*/
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}